<template>
    <VantCol 
      v-bind="props"
      :style="style" 
      :class="`magic-ui-col ${className}`"
      @click="handleClick">
      <slot>
        <Container :config="config.items"></Container>
      </slot>
    </VantCol>
</template>

<script lang="ts" setup>
import { Col as VantCol } from 'vant';
import { ColConfig } from '../../schame';
import {useField} from '../../hook';

defineOptions({
    name: 'MagicUiCol',
});

const config = defineProps<ColConfig>();
const emit = defineEmits(['click']);
const { handleClick } = useField(config, emit);
</script>

<style lang="scss">

</style>