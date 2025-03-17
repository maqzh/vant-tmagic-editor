<template>
    <div :class="`tmagic-ui-calendar-field ${className}`">
        <Field 
            v-bind="formItemProps" 
            readonly
            is-link
            @click="handleClick"
            v-model="result"
        ></Field>
        <VantCalendar
            v-bind="compProps"
            v-model="model[name]"
            v-model:show="showCalendat"
            @change="debounceChangeHandler"
            @confirm="handleConfirm">
        </VantCalendar>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue';
import { Calendar as VantCalendar } from 'vant';
import dayjs from 'dayjs';
import Field from '../index.vue';
import { CalendarFieldConfig } from '../../../schame';
import { useField } from '../../../hook';

defineOptions({
    name: 'MagicUiCalendarField'
})
const changeEvent: string = 'calendar:change'
const config = defineProps<CalendarFieldConfig>();
const emit = defineEmits([changeEvent]);
const showCalendat = ref<boolean>(false);
const result = ref<any>('')
const { fieldProps, compProps, debounceChangeHandler } = useField(config, emit, changeEvent);

const formItemProps = computed<any>(() => {
    return {
        ...fieldProps.value,
        isLink: compProps.value.isLink,
        readonly: true,
        placeholder: compProps.value.placeholder,
    }
})

watch(() => config.model[config.name], (val?: Date) => {
    result.value = val? dayjs(val).format(config.props.format || 'YYYY-MM-DD'): '';
})

const handleClick = () => {
    if (!fieldProps.value.disabled) {
        showCalendat.value = true
    }
}

const handleConfirm = (date: Date) => {
    result.value = dayjs(date).format(config.props.format || 'YYYY-MM-DD');
    showCalendat.value = false
}
</script>

<style lang="scss">

</style>