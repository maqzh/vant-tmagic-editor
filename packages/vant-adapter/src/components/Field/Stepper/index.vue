<template>
    <Field v-bind="fieldProps">
        <VantStepper 
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler"
            @overlimit="emit('stepper:overlimit', $event)"
            @plus="emit('stepper:plus', $event)"
            @minus="emit('update:minus', $event)"
            @focus="emit('update:focus', $event)"
            @blur="emit('update:blur', $event)"
        >
        </VantStepper>
    </Field>
</template>

<script lang="ts" setup>
import { Stepper as VantStepper } from 'vant';
import Field from '../index.vue';
import { StepperFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiStepperField'
})
const changeEvent: string = 'stepper:change'
const config = defineProps<StepperFieldConfig>();
const emit = defineEmits([changeEvent, 'stepper:overlimit', 'stepper:plus', 'update:minus', 'update:focus', 'update:blur'])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

</script>

<style lang="scss">

</style>