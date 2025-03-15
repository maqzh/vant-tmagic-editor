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
import { asyncLoadCss, asyncLoadJs, type MPage } from '@tmagic/core';
import { useApp } from '@tmagic/vue-runtime-help';
import Container from '../Container.vue';
import { FormState, FormValue } from '../../schame';

defineOptions({
    name: 'MagicUiPage',
});

const props = defineProps<{
    config: MPage
    onInitValue?: (mForm: FormState | undefined, {formValue, initValue}: {formValue: FormValue, initValue: FormValue}) => FormValue;
}>();

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
</script>

<style lang="scss">

</style>