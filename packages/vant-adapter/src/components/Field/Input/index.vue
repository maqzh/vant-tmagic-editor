<template>
    <Field 
        v-bind="props"
        :class="`tmagic-ui-input-field ${className}`"
        v-model="model[name]"
        @change="debounceChangeHandler">
        
    </Field>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import Field from '../index.vue';
import { InputFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiInputField'
})
const changeEvent: string = 'input:change'
const config = withDefaults(defineProps<InputFieldConfig>(), {
    type: 'text'
});
const emit = defineEmits([changeEvent])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);
const props = computed(() => {
    return {
        ...fieldProps.value,
        ...compProps.value,
        type: config.type
    }
})
</script>

<style lang="scss">

</style>