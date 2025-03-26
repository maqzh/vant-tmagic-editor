<template>
  <Step v-bind="props" :style="style" :class="`magic-ui-swipe-item ${className || ''}`">
    <slot>
      <template v-if="items && items.length > 0">
        <Container :config="items" :model="model || {}" :parent-name="parentName" />
      </template>
      <template v-else-if="props.src">
        <img :src="props.src" />
      </template>
      <template v-else>
        {{ props.text || '' }}
      </template>
    </slot>
  </Step>
</template>

<script lang="ts" setup>
import { Step } from 'vant';
import Container from '../../Container.vue';
import { SwipeItemConfig } from '../../../schame';
import { useComponent } from '../../../hook';

defineOptions({
  name: 'MagicUiSwipeItem'
})

const config = defineProps<SwipeItemConfig>();

const { props, style } = useComponent(config)
</script>

<style lang="scss"></style>