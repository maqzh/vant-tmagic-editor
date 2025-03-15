<template>
  <VantButton
    :data-tmagic-id="id"
    :data-tmagic-name="name"
    v-bind="props"
    :style="style"
    :class="`magic-ui-button ${className || ''}`"
    @click="handleClick"
  >
    <slot>
      {{props?.text || ''}}
    </slot>
  </VantButton>
</template>

<script lang="ts" setup>
import { Button as VantButton } from 'vant';
import { ButtonConfig } from '../../schame';
import {useField} from '../../hook';

defineOptions({
  name: 'MagicUiVButton'
})

const config = defineProps<ButtonConfig>();
const emit = defineEmits(['click']);
const { handleClick } = useField(config, emit);

</script>

<style lang="scss">

</style>
