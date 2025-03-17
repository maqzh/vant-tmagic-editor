<template>
    <Field v-bind="fieldProps">
        <VantRadioGroup 
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler">
            <template v-if="options">
                <VantRadio 
                    v-for="(item, index) in options" 
                    :key="index"
                    :name="item.value"
                >{{ item.label }}</VantRadio>
            </template>
        </VantRadioGroup>
    </Field>
</template>

<script lang="ts" setup>
import { RadioGroup as VantRadioGroup, Radio as VantRadio } from 'vant';
import Field from '../index.vue';
import { RadioFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiRadioField'
})
const changeEvent: string = 'radio:change'
const config = defineProps<RadioFieldConfig>();
const emit = defineEmits([changeEvent])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

</script>

<style lang="scss">

</style>