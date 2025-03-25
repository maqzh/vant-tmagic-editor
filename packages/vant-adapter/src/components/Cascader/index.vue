<template>
  <VantCascader
    :data-tmagic-id="id"
    :data-tmagic-name="name"
    v-bind="props"
    :style="style"
    :class="`magic-ui-cascader ${className || ''}`"
    @change="debounceChangeHandler"
    @finish="handleFinish"
    @click-tab="handleClickTab"
  >
    <slot></slot>
  </VantCascader>
</template>

<script lang="ts" setup>
import { Cascader as VantCascader } from 'vant';
import { CascaderConfig } from '../../schame';
import { useField } from '../../hook';

defineOptions({
  name: 'MagicUiCascader'
})

const config = defineProps<CascaderConfig>();
const emit = defineEmits(['cascader:change', 'cascader:finish', 'cascader:click-tab']);
const { debounceChangeHandler } = useField(config, emit, 'cascader:change');

const handleFinish = (value: any) => {
  emit('cascader:finish', value);
};

const handleClickTab = (value: any) => {
  emit('cascader:click-tab', value);
};
</script>

<style lang="scss">

</style>