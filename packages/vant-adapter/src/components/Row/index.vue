<template>
    <VantRow 
      v-bind="props"
      :style="style" 
      :class="`magic-ui-row ${className || ''}`"
      @click="handleClick">
      <slot>
        <Container 
          :config="config.items" 
          :model="model || {}"
          :parent-name="parentName"
        ></Container>
      </slot>
    </VantRow>
</template>

<script lang="ts" setup>
import { Row as VantRow } from 'vant';
import Container from '../Container.vue';
import { RowConfig } from '../../schame';
defineOptions({
    name: 'MagicUiRow',
});

const config = defineProps<RowConfig>();
const emit = defineEmits(['click']);
const handleClick = (event: Event) => {
  emit('click', event);
}
</script>

<style lang="scss">

</style>