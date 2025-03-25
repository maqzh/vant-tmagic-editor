<template>
  <div class="editor-app">
    <TMagicEditor
      ref="editor"
      v-model="formData"
      :menu="menu"
      :runtime-url="runtimeUrl"
      :props-configs="propsConfig"
      :props-values="valueConfig"
      :event-method-list="eventConfig"
      :component-group-list="componentGroupList"
      :moveable-options="moveableOptions"
      :disabled-page-fragment="true"
      :auto-scroll-into-view="true"
      :layerContentMenu="stageContentMenu"
      :stageContentMenu="layerContentMenu"
    >
    </TMagicEditor>
    <TMagicDialog v-model="previewVisible" destroy-on-close class="pre-viewer" title="预览" :width="stageRect?.width">
      <iframe
        v-if="previewVisible"
        ref="iframe"
        width="100%"
        style="border: none"
        :height="stageRect?.height"
        :src="previewUrl"
      ></iframe>
    </TMagicDialog>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue';
import { TMagicEditor, TMagicDialog, type Services, editorService, propsService, tMagicMessageBox, tMagicMessage } from '@tmagic/editor';
import type { MApp, MContainer, MNode } from '@tmagic/core';
import { useEditorPlayground } from './hooks/use-editor-app';
import componentGroupList from './configs/componentGroupList';
import dsl from './configs/dsl';
import { saveFormData, getFormData } from './apis/form.ts';

const editor = ref<any>(null);
const formData = ref<MApp>(dsl);

const { VITE_RUNTIME_PATH } = import.meta.env;
const runtimeUrl = `${VITE_RUNTIME_PATH}/playground/index.html`;
const previewUrl = computed(
  () => `${VITE_RUNTIME_PATH}/page/index.html?localPreview=1&page=${editor.value?.editorService.get('page')?.id}`,
);
const previewVisible = ref<boolean>(false);
const stageRect = ref({
  width: 375,
  height: 817,
});

const handleSave = async () => {
  const res = await saveFormData(formData.value)
  editor.value?.editorService.resetModifiedNodeId();
  tMagicMessage.success(res.message || '保存成功')
}
const handlePreview = async (services: Services) => {
  if (services?.editorService.get('modifiedNodeIds').size > 0) {
    try {
      await tMagicMessageBox.confirm('有修改未保存，是否先保存再预览', '提示', {
        confirmButtonText: '保存并预览',
        cancelButtonText: '预览',
        type: 'warning',
      });
      await handleSave();
    } catch (e) {
      console.error(e);
    }
  }
  previewVisible.value = true;

  await nextTick();

  // if (!iframe.value?.contentWindow || !deviceGroup.value?.viewerDevice) return;
  // Object.defineProperty(iframe.value.contentWindow.navigator, 'userAgent', {
  //   value: uaMap[deviceGroup.value.viewerDevice],
  //   writable: true,
  // });
}
const {
  menu,
  propsConfig,
  valueConfig,
  eventConfig,
  moveableOptions,
  stageContentMenu,
  layerContentMenu
} = useEditorPlayground(editor, handleSave, handlePreview);

await getFormData().then((res: any) => {
  const { content } = res;
  formData.value = eval(`(${content})`)
})

editorService.usePlugin({
  beforeDoAdd: (config: MNode, parent: MContainer) => {
    if (config.type === 'overlay') {
      config.style = {
        ...config.style,
        left: 0,
        top: 0,
      };
      return [config, editorService.get('page') as MContainer];
    }
    return [config, parent];
  },
});

propsService.usePlugin({
  beforeFillConfig: (config: any) => [config, '100px'],
});

onMounted(() => {
  // @ts-ignore
  window.editorInstance = editor.value;
});

onBeforeUnmount(() => {
  editorService.removeAllPlugins();
  // @ts-ignore
  delete window.editorInstance;
});


</script>

<style lang="scss">
html {
  overflow: hidden;
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
}

.editor-app {
  width: 100%;
  height: 100%;

  .m-editor {
    flex: 1;
    height: 100%;

    .m-editor-page-bar-tabs {
      display: none;
    }

    .m-editor-stage {
      height: 100%;
    }
  }

  .el-overlay-dialog {
    display: flex;
  }

  .pre-viewer {
    margin: auto;

    .el-dialog__body {
      padding: 0;
    }
  }

  .menu-left {
    .menu-item-text {
      margin-left: 10px;
    }
  }
}
</style>
