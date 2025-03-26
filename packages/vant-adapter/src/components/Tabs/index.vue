<template>
    <VantTabs 
        v-bind="props"
        :style="style"
        v-model:active="props.active"
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
import { useComponent } from '../../hook'
defineOptions({
    name: 'MagicUiTabs'
})

const config = defineProps<TabsConfig>()

// const active = ref<number | string>(config.props.active)

const {props} = useComponent(config)
</script>

<style lang="scss">

</style>