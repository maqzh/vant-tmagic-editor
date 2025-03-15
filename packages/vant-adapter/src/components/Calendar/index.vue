<template>
  <VantCalendar
    ref="calendarRef"
    :data-tmagic-id="id"
    :data-tmagic-name="name"
    v-bind="props"
    :style="style"
    :class="`magic-ui-calendar ${className || ''}`"
    @click="handleClick"
    @confirm="handleConfirm"
    @select="handleSelect"
    @open="handleOpen"
    @close="handleClose"
    @opened="handleOpened"
    @closed="handleClosed"
    @unselect="handleUnselect"
    @month-show="handleMonthShow"
    @over-range="handleOverRange"
    @click-subtitle="handleClickSubtitle"
    @click-disabled-date="handleClickDisabledDate"
    @panel-change="handlePanelChange"
  >
  </VantCalendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Calendar as VantCalendar } from 'vant';
import { CalendarConfig } from '../../schame';
import { useField } from '../../hook';

defineOptions({
  name: 'MagicUiCalendar'
})

const config = defineProps<CalendarConfig>();
const emit = defineEmits([
  'click',
  'calendar:confirm',
  'calendar:select',
  'calendar:open',
  'calendar:close',
  'calendar:opened',
  'calendar:closed',
  'calendar:unselect',
  'calendar:month-show',
  'calendar:over-range',
  'calendar:click-subtitle',
  'calendar:click-disabled-date',
  'calendar:panel-change'
]);
const calendarRef = ref<any>(null);
const { handleClick } = useField(config, emit);

const handleConfirm = (value: Date) => {
  emit('calendar:confirm', value);
};

const handleSelect = (value: Date) => {
  emit('calendar:select', value);
};

const handleOpen = () => {
  emit('calendar:open');
}
const handleClose = () => {
  emit('calendar:close'); 
}
const handleOpened = () => {
  emit('calendar:opened'); 
}
const handleClosed = () => {
  emit('calendar:closed'); 
}
const handleUnselect = (value: Date) => {
  emit('calendar:unselect', value); 
}
const handleMonthShow = ({date, title}: { date: Date, title: string }) => {
  emit('calendar:month-show', { date, title });
}
const handleOverRange = () => {
  emit('calendar:over-range');
}
const handleClickSubtitle = (event: MouseEvent) => {
  emit('calendar:click-subtitle', event);
}
const handleClickDisabledDate = (value: Date | Date[]) => {
  emit('calendar:click-disabled-date', value);
}
const handlePanelChange = ({ date }: { date: Date }) => {
  emit('calendar:panel-change', date);
}

defineExpose({
  reset: (date?: Date | Date[]) => calendarRef.value?.reset(date),
  scrollToDate: (date: Date) => calendarRef.value?.scrollToDate(date),
  getSelectedDate: () => calendarRef.value?.getSelectedDate(),
})
</script>

<style lang="scss">

</style>