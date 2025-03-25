<template>
    <Field v-bind="fieldProps">
        <VantSignature ref="signatureRef"
            v-bind="compProps" 
            v-model="model[name]"
            @change="debounceChangeHandler"
            @start="emit('signature:start')"
            @end="emit('signature:end')"
            @signing="emit('signature:signing', $event)"
            @submit="emit('signature:submit')"
            @clear="emit('signature:clear')"
        >
        </VantSignature>
    </Field>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Signature as VantSignature } from 'vant';
import Field from '../index.vue';
import { SignatureFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiSignatureField'
})
const changeEvent: string = 'signature:change'
const config = defineProps<SignatureFieldConfig>();
const emit = defineEmits([changeEvent, 'signature:start', 'signature:end', 'signature:signing', 'signature:submit', 'signature:clear'])
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

const signatureRef = ref<any>(null)

defineExpose({
    resize() {
        signatureRef.value && signatureRef.value.resize()
    },
    clear() {
        signatureRef.value && signatureRef.value.clear()
    },
    submit() {
        signatureRef.value && signatureRef.value.submit()
    }
})

</script>

<style lang="scss">

</style>