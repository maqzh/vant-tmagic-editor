<template>
    <VantCell 
      v-bind="props" 
      :style="style" 
      :class="`magic-ui-cell ${className}`" 
      @click="$emit('click', $event)"
    >
    {{ props?.value }}
    </VantCell>
</template>

<script lang="ts" setup>
import {Cell as VantCell } from 'vant';
import { CellConfig } from '../../schame';
import {useComponent} from '../../hook';
defineOptions({
    name: 'MagicUiCell',
});

const config = defineProps<CellConfig>();
defineEmits(['click']);
const { props, style } = useComponent(config);
</script>

<style lang="scss">

</style>