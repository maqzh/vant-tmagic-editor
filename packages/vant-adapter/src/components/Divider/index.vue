<template>
    <Divider 
        v-bind="props"
        :class="`magic-ui-divider ${className || ''}`"
        :style="style">
        <slot>
            {{ props.text }}
        </slot>
    </Divider>
</template>

<script lang="ts" setup>
import { Divider } from 'vant'
import { DividerConfig } from '../../schame'

defineOptions({
    name: 'MagicUiDivider'
})

defineProps<DividerConfig>()
</script>

<style lang="scss">

</style>