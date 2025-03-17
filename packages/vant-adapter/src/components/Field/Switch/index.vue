<template>
    <Field v-bind="fieldProps">
        <VantSwitch 
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler">
        </VantSwitch>
    </Field>
</template>

<script lang="ts" setup>
import { Switch as VantSwitch } from 'vant';
import Field from '../index.vue';
import { SwitchFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiSwitchField'
})
const changeEvent: string = 'switch:change'
const config = defineProps<SwitchFieldConfig>();
const emit = defineEmits([changeEvent])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

</script>

<style lang="scss">

</style>