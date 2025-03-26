<template>
    <div 
        class="magic-ui-page" 
        :data-tmagic-id="config.id" 
        :style="config?.style"
    >
    <Container 
      :config="config.items"
      :on-init-value="onInitValue"
    ></Container>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, provide, onMounted } from 'vue';
import { asyncLoadCss, asyncLoadJs, type MPage } from '@tmagic/core';
import { useApp } from '@tmagic/vue-runtime-help';
// @ts-ignore
import { useEmitter } from 'emitter-help';
import Container from '../Container.vue';
import { PageState, FormState, ComponentState, FormValue } from '../../schame';
import { PAGE_INJECT_KEY } from '../../utils/constant';

defineOptions({
    name: 'MagicUiPage',
});

const props = defineProps<{
    config: MPage
    onInitValue?: (mForm: FormState | undefined, {formValue, initValue}: {formValue: FormValue, initValue: FormValue}) => FormValue;
}>();
const components = new Map<string, ComponentState>();
const formState = ref<FormState>();

const pageState: PageState = reactive<PageState>({
    setComponent: (id: string, component: ComponentState) => {
      components.set(id, component);
    },
    getComponent: (id: string): ComponentState | undefined => {
      return components.get(id);
    },
    deleteComponent: (id: string) => {
      components.delete(id);
    },
    getComponents: (): ComponentState[] => {
      return Object.values(components);
    },
    setRootForm: (form: FormState): void => {
      formState.value = form;
    },
    getRootForm: (): FormState | undefined => {
      return formState.value;
    },
    updateComponentProp: (id: string, propPath: string, value: any): void => {
      const component = components.get(id);
      if (component) {
        component.setProp(propPath, value);
      }
    },
    updateComponentStyle: (id: string, propPath: string, value: any): void => {
      const component = components.get(id);
      if (component) {
        component.setStyle(propPath, value);
      }
    },
});

const createCss = (config: MPage) => {
  if (config.cssFile) {
    asyncLoadCss(config.cssFile);
  }

  if (Array.isArray(config.cssFiles)) {
    config.cssFiles.map((file) => asyncLoadCss(file.url));
  }

  if (config.css) {
    const style = window.document.createElement('style');
    style.innerHTML = config.css;
    window.document.head.appendChild(style);
  }
};

const createJs = (config: MPage) => {
  if (Array.isArray(config.jsFiles)) {
    config.jsFiles.map((file) => asyncLoadJs(file.url));
  }
};
const refresh = () => {
    window.location.reload();
};
const { app } = useApp({
    config: props.config,
    methods: { refresh },
});
if (app?.jsEngine === 'browser') {
    createCss(props.config);
    createJs(props.config);
}

provide(PAGE_INJECT_KEY, pageState);

onMounted(() => {
    useEmitter().dispatch('pageMounted', pageState);
});

</script>

<style lang="scss">

</style>