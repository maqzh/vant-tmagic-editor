<template>
    <VantCol 
      v-bind="props"
      :style="style" 
      :class="`magic-ui-col ${className || ''}`"
      @click="handleClick">
      <slot>
        <Container 
          :config="config.items"
          :model="model || {}"
          :parent-name="parentName"
        ></Container>
      </slot>
    </VantCol>
</template>

<script lang="ts" setup>
import { Col as VantCol } from 'vant';
import { ColConfig } from '../../schame';
import Container from '../Container.vue';

defineOptions({
    name: 'MagicUiCol',
});

const config = defineProps<ColConfig>();
const emit = defineEmits(['click']);
const handleClick = (event: Event) => {
  emit('click', event);
}
</script>

<style lang="scss">

</style>