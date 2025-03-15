<template>
    <VantCell 
      v-bind="props" 
      :style="style" 
      :class="`magic-ui-cell ${className}`" 
      @click="handleClick"
    >
    {{ props?.value }}
    </VantCell>
</template>

<script lang="ts" setup>
import {Cell as VantCell } from 'vant';
import { CellConfig } from '../../schame';
import {useField} from '../../hook';
defineOptions({
    name: 'MagicUiCell',
});

const config = defineProps<CellConfig>();
const emit = defineEmits(['click']);
const { handleClick } = useField(config, emit);
</script>

<style lang="scss">

</style>