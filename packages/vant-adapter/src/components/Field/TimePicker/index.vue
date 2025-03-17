<template>
    <div :class="`tmagic-ui-time-picker-field ${className}`">
        <Field 
            v-bind="formItemProps" 
            readonly
            is-link
            @click="handleClick"
            v-model="result"
        ></Field>
        <VantPopup v-model:show="showPicker" destroy-on-close position="bottom">
            <VantTimePicker
                v-bind="compProps"
                v-model="pickerValue"
                @change="debounceChangeHandler"
                @cancel="showPicker = false"
                @confirm="handleConfirm">
            </VantTimePicker>
        </VantPopup>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { TimePicker as VantTimePicker, Popup as VantPopup } from 'vant';
import Field from '../index.vue';
import { TimePickerFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiTimePickerField'
})
const changeEvent: string = 'timePicker:change'
const config = defineProps<TimePickerFieldConfig>();
const emit = defineEmits([changeEvent]);
const showPicker = ref<boolean>(false);
const result = ref<any>('')
const pickerValue = ref<any[]>([])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

const formItemProps = computed<any>(() => {
    return {
        ...fieldProps.value,
        isLink: compProps.value.isLink,
        readonly: true,
        placeholder: compProps.value.placeholder,
    }
})

watch(() => config.model[config.name], (val?: string) => {
    result.value = val;
})

const handleClick = () => {
    if (!fieldProps.value.disabled) {
        showPicker.value = true
    }
}

const handleConfirm = ({ selectedValues }: {selectedValues: any[]}) => {
    result.value = selectedValues.join(config.props.delimiter || ':');
    pickerValue.value = selectedValues;
    showPicker.value = false
}
</script>

<style lang="scss">

</style>