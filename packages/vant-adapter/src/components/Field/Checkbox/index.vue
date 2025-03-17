<template>
    <Field v-bind="fieldProps" :class="`tmagic-ui-checkbox-field ${className}`">
        <VantCheckboxGroup 
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler">
            <template v-if="options">
                <VantCheckbox 
                    v-for="(item, index) in options" 
                    :key="index"
                    :name="item.value"
                >{{ item.label }}</VantCheckbox>
            </template>
        </VantCheckboxGroup>
    </Field>
</template>

<script lang="ts" setup>
import { CheckboxGroup as VantCheckboxGroup, Checkbox as VantCheckbox } from 'vant';
import Field from '../index.vue';
import { CheckboxFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiCheckboxField'
})
const changeEvent: string = 'checkbox:change'
const config = defineProps<CheckboxFieldConfig>();
const emit = defineEmits([changeEvent])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);
</script>

<style lang="scss">

</style>