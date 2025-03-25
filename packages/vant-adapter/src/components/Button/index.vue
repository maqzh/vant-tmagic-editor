<template>
  <VantButton
    :data-tmagic-id="id"
    :data-tmagic-name="name"
    v-bind="props"
    :style="style"
    :class="`magic-ui-button ${className || ''}`"
    @click="emit('click', $event)"
    @touchstart="emit('button:touchstart', $event)"
  >
    <slot>
      {{props?.text || ''}}
    </slot>
  </VantButton>
</template>

<script lang="ts" setup>
import { Button as VantButton } from 'vant';
import { ButtonConfig } from '../../schame';
import { useComponent } from '../../hook';

defineOptions({
  name: 'MagicUiButton'
})

const config = defineProps<ButtonConfig>();
const emit = defineEmits(['click', 'button:touchstart']);
useComponent(config)
</script>

<style lang="scss">

</style>
