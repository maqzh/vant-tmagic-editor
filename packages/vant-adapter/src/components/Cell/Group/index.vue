<template>
  <CellGroup 
    v-bind="props" 
    :style="style" 
    :class="`magic-ui-cell-group ${className || ''}`">
    <slot>
      <Container :config="items" :model="model" :parent-name="parentName"></Container>
    </slot>
  </CellGroup>
</template>

<script lang="ts" setup>
import { CellGroup } from 'vant';
import { CellGroupConfig } from '../../../schame'
import Container from '../../Container.vue'

defineOptions({
  name: 'MagicUiCellGroup'
})
defineProps<CellGroupConfig>();
</script>

<style lang="scss"></style>