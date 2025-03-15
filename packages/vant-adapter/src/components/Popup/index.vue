<template>
    <VantPopup 
        v-bind="props" 
        :style="style"
        :class="`magic-ui-popup ${className}`"
        v-model:show="visible"
        @click="handleClick"
        @click-overlay="handleClickOverlay"
        @click-close-icon="handleClickCloseIcon"
        @open="handleOpen"
        @close="handleClose"
        @opened="handleOpened"
        @closed="handleClosed"
    >
        <slot>
            <Container v-if="config.items" :config="config.items"></Container>
        </slot>
    </VantPopup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Popup as VantPopup } from 'vant';
import Container from '../Container.vue';
import { PopupConfig } from '../../schame';
import { useField } from '../../hook';
defineOptions({
    name: 'MagicUiPopup',
});
const config = defineProps<PopupConfig>();
const emit = defineEmits(['click', 'popup:open', 'popup:close', 'popup:click-overlay', 'popup:click-close-icon', 'popup:opened', 'popup:closed']);
const visible = ref<boolean>(false);
const { handleClick } = useField(config, emit);
const handleClickOverlay = () => {
    emit('popup:click-overlay', visible.value);
}
const handleClickCloseIcon = () => {
    emit('popup:click-close-icon', visible.value);
}
const handleOpen = () => {
    emit('popup:open', visible.value);
}
const handleClose = () => {
    emit('popup:close', visible.value);
}
const handleOpened = () => {
    emit('popup:opened', visible.value);
}
const handleClosed = () => {
    emit('popup:closed', visible.value);
}
const openPopup = () => {
    visible.value = true;
    handleOpen();
};
const closePopup = () => {
    visible.value = false;
    handleClose();
};

defineExpose({
    openPopup,
    closePopup,
});
</script>

<style lang="scss">

</style>