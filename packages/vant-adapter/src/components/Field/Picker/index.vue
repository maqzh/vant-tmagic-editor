<template>
    <div :class="`tmagic-ui-picker-field ${className}`">
        <Field 
            v-bind="formItemProps" 
            readonly
            is-link
            @click="handleClick"
            v-model="result"
        ></Field>
        <VantPopup v-model:show="showPicker" destroy-on-close position="bottom">
            <VantPicker
                v-bind="compProps"
                :columns="columns"
                v-model="pickerValue"
                @change="debounceChangeHandler"
                @cancel="showPicker = false"
                @confirm="handleConfirm">
            </VantPicker>
        </VantPopup>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Picker as VantPicker, Popup as VantPopup } from 'vant';
import Field from '../index.vue';
import { PickerFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiPickerField'
})
const changeEvent: string = 'picker:change'
const config = defineProps<PickerFieldConfig>();
const emit = defineEmits([changeEvent]);
const showPicker = ref<boolean>(false);
const result = ref<any>('')
const pickerValue = ref<any[]>([])
const columns = ref<any[]>(config.props?.columns || [])
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
watch(() => config.props?.columns, (val?: any[]) => {
    columns.value = val || []
})

const handleClick = () => {
    if (!fieldProps.value.disabled) {
        showPicker.value = true
    }
}

const handleConfirm = ({ selectedValues, selectedOptions }: {selectedValues: any[], selectedOptions: any[]}) => {
    result.value = selectedOptions[0]?.text
    pickerValue.value = selectedValues;
    showPicker.value = false
}
</script>

<style lang="scss">

</style>