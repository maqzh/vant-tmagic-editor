<template>
    <Step 
        v-bind="props" 
        :style="style" 
        :class="`magic-ui-step ${className || ''}`"
    >
        <slot>
            <template v-if="items && items.length > 0">
                <Container
                    :config="items"
                    :model="model || {}"
                    :parent-name="parentName" />
            </template>
            <template v-else>
                <component 
                    :is="`${props.titleTag || 'span'}`"
                >
                    {{ props.title || '' }}
                </component>
                <component 
                    v-if="props.desc && props.desc.length > 0" 
                    :is="`${props.descTag || 'span'}`"
                >
                    {{ props.desc }}
                </component>
            </template>
        </slot>
    </Step>
</template>

<script lang="ts" setup>
import { Step } from 'vant';
import Container from '../../Container.vue';
import { StepConfig } from '../../../schame';

defineOptions({
    name: 'MagicUiStep'
})
defineProps<StepConfig>();
</script>

<style lang="scss">

</style>