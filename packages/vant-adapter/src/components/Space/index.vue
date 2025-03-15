<template>
    <VantSpace
        v-bind="props"
        :style="style"
        :class="`magic-ui-space ${className}`"
        @click="handleClick"
    >
        <slot>
            <Container :config="config.items"></Container>
        </slot>
    </VantSpace>
</template>

<script lang="ts" setup>
import { Space as VantSpace } from 'vant';
import Container from '../Container.vue';
import { SpaceConfig } from '../../schame';
import { useField } from '../../hook';

defineOptions({
    name: 'MagicUiSpace',
});

const config = defineProps<SpaceConfig>();
const emit = defineEmits(['click']);
const { handleClick } = useField(config, emit);
</script>

<style lang="scss">

</style>