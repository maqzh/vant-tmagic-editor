<template>
    <VantTabs 
        v-bind="props" 
        v-model="active"
        :style="style"
        :class="`magic-ui-tabs ${className || ''}`"
    >
        <slot>
            <Container 
                :config="items" 
                :model="model || {}"
                :parent-name="parentName" />
        </slot>
    </VantTabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Tabs as VantTabs } from 'vant'
import Container from '../Container.vue'
import { TabsConfig } from '../../schame'
defineOptions({
    name: 'MagicUiTabs'
})

const config = defineProps<TabsConfig>()

const active = ref<number | string>(config.props.active)
</script>

<style lang="scss">

</style>