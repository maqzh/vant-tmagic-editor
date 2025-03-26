<template>
    <Swipe 
        v-bind="props" 
        :style="style"
        :data-tmagic-component-id="id"
        :data-tmagic-component-name="name"
        :class="`magic-ui-swipe ${className || ''}`"
    >
    <slot>
            <Container 
                :config="items" 
                :model="model || {}"
                :parent-name="parentName" />
        </slot>
    </Swipe>
</template>

<script lang="ts" setup>
import { Swipe } from 'vant'
import { SwipeConfig } from '../../schame'
import { useComponent } from '../../hook'
defineOptions({
    name: 'MagicUiSwipe'
})
const config = defineProps<SwipeConfig>()
const {props, style} = useComponent(config)
</script>

<style lang="scss">

</style>