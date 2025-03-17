<template>
    <VantField
        v-bind="props"
        :class="`tmagic-ui-field ${clsName || ''}`"
        @click="handleClick"
        @start-validate="handleStartValidate"
        @end-validate="handleEndValidate"
    >
    <template v-if="$slots.default" #input>
        <slot></slot>
    </template>
    </VantField>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Field as VantField } from 'vant';
import { FieldConfig } from '../../schame';

defineOptions({
    name: 'MagicUiField'
})

const config = defineProps<FieldConfig>();
const emit = defineEmits(['start-validate', 'end-validate', 'click']);
const props = computed<any>(() => {
    return config;
});
const handleClick = () => {
    emit('click');
}
const handleStartValidate = () => {
    emit('start-validate');
}
const handleEndValidate = ({status, message}: { status: string, message: string }) => {
    emit('end-validate', { status, message });
}
</script>

<style lang="scss">

</style>