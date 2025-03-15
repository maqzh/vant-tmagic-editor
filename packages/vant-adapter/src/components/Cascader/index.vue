<template>
  <VantCascader
    :data-tmagic-id="id"
    :data-tmagic-name="name"
    v-bind="props"
    :style="style"
    :class="`magic-ui-cascader ${className || ''}`"
    @change="handleChange"
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
const emit = defineEmits(['change', 'finish', 'click-tab']);
const { handleChange } = useField(config, emit);

const handleFinish = (value: any) => {
  emit('finish', value);
};

const handleClickTab = (value: any) => {
  emit('click-tab', value);
};
</script>

<style lang="scss">
.v-cascader {
  // 自定义样式
}
</style>