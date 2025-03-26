<template>
    <Tag 
        v-bind="props" 
        :style="style" 
        :class="`magic-ui-tag ${className || ''}`"
        @click="$emit('click', $event)"
        @tag:close="$emit('tag:close', $event)"
    >
        <slot>
            {{ props.text }}
        </slot>
    </Tag>
</template>

<script lang="ts" setup>
import { Tag } from 'vant';
import { TagConfig } from '../../schame';
import { useComponent } from '../../hook';
defineOptions({
    name: 'MagicUiTag'
})
const config = defineProps<TagConfig>()
defineEmits(['click', 'tag:close'])
const {props, style} = useComponent(config)
</script>

<style lang="scss">

</style>