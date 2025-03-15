<template>
    <VantField v-bind="fieldProps">
        <template #input>
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
        </template>
    </VantField>
</template>

<script lang="ts" setup>
import { Field as VantField, RadioGroup as VantRadioGroup, Radio as VantRadio } from 'vant';
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