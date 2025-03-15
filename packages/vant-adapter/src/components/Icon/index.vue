<template>
    <VantIcon 
        v-bind="props"
        :style="style"
        :class="`magic-ui-icon ${className}`"
        @click="handleClick"
    ></VantIcon>
</template>

<script lang="ts" setup>
import { Icon as VantIcon } from 'vant';
import { IconConfig } from '../../schame';
import {useField} from '../../hook';

defineOptions({
    name: 'MagicUiIcon',
});

const config = defineProps<IconConfig>();
const emit = defineEmits(['click']);
const { handleClick } = useField(config, emit);

</script>

<style lang="scss">

</style>