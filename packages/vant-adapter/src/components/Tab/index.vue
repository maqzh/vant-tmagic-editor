<template>
    <VantTab
        v-bind="props"
        :style="style"
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
import Container from '../Container.vue'
import { TabConfig } from '../../schame'

defineOptions({
    name: 'MagicUiTab'
})

defineProps<TabConfig>()
</script>

<style lang="scss">

</style>