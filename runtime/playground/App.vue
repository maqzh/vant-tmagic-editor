<template>
  <component 
    v-if="pageConfig" 
    :is="pageComponent" 
    :key="pageConfig.id" 
    :config="pageConfig"
    :app="app"
  ></component>
</template>

<script lang="ts" setup>
import { useEditorDsl, useComponent } from '@tmagic/vue-runtime-help';

const { pageConfig, app } = useEditorDsl();
const pageComponent = useComponent('page');
</script>
