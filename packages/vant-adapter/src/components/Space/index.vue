<template>
    <VantSpace
        v-bind="props"
        :style="style"
        :class="`magic-ui-space ${className}`"
        @click="$emit('click', $event)"
    >
        <slot>
            <Container 
                :config="items"
                :model="model || {}"
                :parent-name="parentName"
            ></Container>
        </slot>
    </VantSpace>
</template>

<script lang="ts" setup>
import { Space as VantSpace } from 'vant';
import Container from '../Container.vue';
import { SpaceConfig } from '../../schame';

defineOptions({
    name: 'MagicUiSpace',
});

defineProps<SpaceConfig>();
defineEmits(['click']);
</script>

<style lang="scss">

</style>