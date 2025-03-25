<template>
    <VantSticky v-bind="props" :style="style">
        <Container 
          :config="items" 
          :model="model || {}"
          :parent-name="parentName" />
    </VantSticky>
</template>

<script lang="ts" setup>
import { Sticky as VantSticky } from 'vant';
import { StickyConfig } from '../../schame';
import Container from '../Container.vue';

defineOptions({
  name: 'MagicUiSticky'
})

defineProps<StickyConfig>()
</script>

<style lang="scss">

</style>