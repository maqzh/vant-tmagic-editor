<template>
    <div :class="`tmagic-ui-cascader-field ${className}`">
        <Field 
            v-bind="formItemProps" 
            readonly
            is-link
            @click="handleClick"
            v-model="result"
        ></Field>
        <VantPopup v-model:show="show" destroy-on-close position="bottom">
            <VantCascader
                v-bind="compProps"
                :options="options"
                v-model="result"
                @change="debounceChangeHandler"
                @close="show = false"
                @finish="handleConfirm">
            </VantCascader>
        </VantPopup>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Cascader as VantCascader, Popup as VantPopup } from 'vant';
import Field from '../index.vue';
import { CascaderFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiCascaderField'
})
const changeEvent: string = 'cascader:change'
const config = defineProps<CascaderFieldConfig>();
const emit = defineEmits([changeEvent]);
const show = ref<boolean>(false);
const result = ref<any>('')
const options = ref<any[]>(config.props?.options || [])
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
watch(() => config.props?.options, (val?: any[]) => {
    options.value = val || []
})

const handleClick = () => {
    if (!fieldProps.value.disabled) {
        show.value = true
    }
}

const handleConfirm = ({ selectedOptions }: {selectedOptions: any[]}) => {
    result.value = selectedOptions?.map((option: any) => option.text).join(config.props?.separator || '/')
    show.value = false
}
</script>

<style lang="scss">

</style>