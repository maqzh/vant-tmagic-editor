<template>
    <Field v-bind="fieldProps">
        <VantRate 
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler">
        </VantRate>
    </Field>
</template>

<script lang="ts" setup>
import { Rate as VantRate } from 'vant';
import Field from '../index.vue';
import { RateFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiRateField'
})
const changeEvent: string = 'rate:change'
const config = defineProps<RateFieldConfig>();
const emit = defineEmits([changeEvent])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

</script>

<style lang="scss">

</style>