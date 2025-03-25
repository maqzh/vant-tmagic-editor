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
import { reactive, ref, provide } from 'vue';
import { asyncLoadCss, asyncLoadJs, type MPage } from '@tmagic/core';
import { useApp } from '@tmagic/vue-runtime-help';
import Container from '../Container.vue';
import { PageState, FormState, FormValue } from '../../schame';
import { PAGE_INJECT_KEY } from '../../utils/constant';

defineOptions({
    name: 'MagicUiPage',
});

const props = defineProps<{
    config: MPage
    onInitValue?: (mForm: FormState | undefined, {formValue, initValue}: {formValue: FormValue, initValue: FormValue}) => FormValue;
}>();
const components = new Map<string, any>();
const formState = ref<FormState>();

const pageState: PageState = reactive<PageState>({
    setComponent: (id: string, component: any) => {
      components.set(id, component);
    },
    getComponent: (id: string): any => {
      return components.get(id);
    },
    deleteComponent: (id: string) => {
      components.delete(id);
    },
    getComponents: (): any[] => {
      return Object.values(components);
    },
    setRootForm: (form: FormState): void => {
      formState.value = form;
    },
    getRootForm: (): FormState | undefined => {
      return formState.value;
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

</script>

<style lang="scss">

</style>