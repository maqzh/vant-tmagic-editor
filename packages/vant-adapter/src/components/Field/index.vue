<template>
    <VantField
        v-bind="props"
        :style="style"
        :class="`magic-ui-field ${className || ''}`"
        @click="handleClick"
        @start-validate="handleStartValidate"
        @end-validate="handleEndValidate"
    >
    <template #input>
        <slot></slot>
    </template>
    </VantField>
</template>

<script lang="ts" setup>
import { Field as VantField } from 'vant';
import { FieldConfig } from '../../schame';
import { useField } from '../../hook';

defineOptions({
    name: 'MagicUiField'
})

const config = defineProps<FieldConfig>();
const emit = defineEmits(['field:start-validate', 'field:end-validate', 'click']);
const { handleClick } = useField(config, emit);
const handleStartValidate = () => {
    emit('field:start-validate');
}
const handleEndValidate = ({status, message}: { status: string, message: string }) => {
    emit('field:end-validate', { status, message });
}
</script>

<style lang="scss">

</style>