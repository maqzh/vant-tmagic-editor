import type { Ref, ComputedRef } from 'vue';
import type {
  CustomizeMoveableOptionsCallbackConfig,
  MenuBarData,
  MenuButton,
  MoveableOptions,
  Services
} from '@tmagic/editor';
import { propsConfig, valueConfig, eventConfig } from 'vant-adapter';
import {NodeType} from '@tmagic/core';
import { cloneDeep } from 'lodash-es';
import {calcValueByFontsize, ContentMenu, COPY_STORAGE_KEY } from '@tmagic/editor';
import {computed, markRaw} from 'vue';
import {Coin, CopyDocument, Document, Connection, DocumentCopy} from '@element-plus/icons-vue';

interface UseEditorPlaygroundOptions {
  menu: MenuBarData;
  propsConfig: Record<string, any>;
  valueConfig: Record<string, any>;
  eventConfig: Record<string, any>;
  moveableOptions: (config?: CustomizeMoveableOptionsCallbackConfig) => MoveableOptions;
  layerContentMenu: ComputedRef<MenuButton[]>;
  stageContentMenu: ComputedRef<MenuButton[]>;
};

export const useEditorPlayground = (
    editor: Ref, 
    saveHandler: () => void, 
    previewHandler: (servs: Services) => void
  ): UseEditorPlaygroundOptions => {
  const menu: MenuBarData = {
    left: [
      {
        type: 'text',
        text: '移动表单设计器',
      }
    ],
    center: ['delete', 'undo', 'redo', 'guides', 'rule', 'zoom'],
    right: [
      {
        type: 'button',
        text: '预览',
        icon: Connection,
        handler: async (services) => {
          previewHandler && previewHandler(services);
        },
      },
      {
        type: 'button',
        text: '保存',
        icon: Coin,
        handler: () => {
          saveHandler && saveHandler();
        },
      },
      '/',
      {
        type: 'button',
        icon: Document,
        tooltip: '源码',
        handler: (service) => service?.uiService.set('showSrc', !service?.uiService.get('showSrc')),
      },
    ]
  }

  const moveableOptions = (config?: CustomizeMoveableOptionsCallbackConfig): MoveableOptions => {
    const options: MoveableOptions = {};

    if (!editor.value) return options;

    const page = editor.value.editorService.get('page');

    const ids = config?.targetElIds || [];
    let isPage = page && ids.includes(`${page.id}`);

    if (!isPage) {
      const id = config?.targetElId;
      if (id) {
        const node = editor.value?.editorService.getNodeById(id);
        isPage = node?.type === NodeType.PAGE;
      }
    }

    options.draggable = !isPage;
    options.resizable = !isPage;
    options.rotatable = !isPage;

    // 双击后在弹层中编辑时，根组件不能拖拽
    if (config?.targetEl?.parentElement?.classList.contains('tmagic-editor-sub-stage-wrap')) {
      options.draggable = false;
      options.resizable = false;
      options.rotatable = false;
    }

    return options;
  };

  const collectorOptions = {
    id: '',
    name: '蒙层',
    isTarget: (key: string | number, value: any) =>
      typeof key === 'string' && typeof value === 'string' && key.includes('events') && value.startsWith('overlay_'),
    isCollectByDefault: false,
  };
  const usePasteMenu = (menu?: Ref<InstanceType<typeof ContentMenu> | undefined>): MenuButton => ({
    type: 'button',
    text: '粘贴(带关联信息)',
    icon: markRaw(DocumentCopy),
    display: (services) => !!services?.storageService?.getItem(COPY_STORAGE_KEY),
    handler: (services) => {
      const nodes = services?.editorService?.get('nodes');
      if (!nodes || nodes.length === 0) return;

      if (menu?.value?.$el) {
        const stage = services?.editorService?.get('stage');
        const rect = menu.value.$el.getBoundingClientRect();
        const parentRect = stage?.container?.getBoundingClientRect();
        const initialLeft =
          calcValueByFontsize(stage?.renderer?.getDocument(), (rect.left || 0) - (parentRect?.left || 0)) /
          services.uiService.get('zoom');
        const initialTop =
          calcValueByFontsize(stage?.renderer?.getDocument(), (rect.top || 0) - (parentRect?.top || 0)) /
          services.uiService.get('zoom');
        services?.editorService?.paste({ left: initialLeft, top: initialTop }, collectorOptions);
      } else {
        services?.editorService?.paste({}, collectorOptions);
        services?.codeBlockService?.paste();
        services?.dataSourceService?.paste();
      }
    },
  });

  const contentMenuData = computed<MenuButton[]>(() => [
    {
      type: 'button',
      text: '复制(带关联信息)',
      icon: markRaw(CopyDocument),
      handler: (services: Services) => {
        const nodes = services?.editorService?.get('nodes');
        nodes && services?.editorService?.copyWithRelated(cloneDeep(nodes), collectorOptions);
        nodes && services?.codeBlockService?.copyWithRelated(cloneDeep(nodes));
        nodes && services?.dataSourceService?.copyWithRelated(cloneDeep(nodes));
      },
    },
    usePasteMenu(),
  ]);

  return {
    menu,
    propsConfig,
    valueConfig,
    eventConfig,
    moveableOptions,
    layerContentMenu: contentMenuData,
    stageContentMenu: contentMenuData
  }
}
