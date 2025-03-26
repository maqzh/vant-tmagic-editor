<template>
    <VantTab
        v-bind="props"
        :style="props.style"
        :data-magic-component-id="id"
        :data-magic-component-name="name"
        :class="`magic-ui-tab ${className || ''}`"
    >
        <slot>
            <Container 
                :config="items" 
                :model="model || {}"
                :parent-name="parentName"
            ></Container>
        </slot>
    </VantTab>
</template>

<script lang="ts" setup>
import { Tab as VantTab } from 'vant'
import Container from '../../Container.vue'
import { TabConfig } from '../../../schame'
import { useComponent } from '../../../hook'

defineOptions({
    name: 'MagicUiTab'
})

const config = defineProps<TabConfig>()
const {props} = useComponent(config)
</script>

<style lang="scss">

</style>../../../schame../../../hook