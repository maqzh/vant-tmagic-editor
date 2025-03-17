export default {
  label: '日历选择',
  readonly: true,
  props: {
    isLink: true,
    poppable: true,
    placeholder: '点击选择日期',
    lazyRender: true,
    showMark: true,
    showTitle: true,
    showSubtitle: true,
    showConfirm: true,
    confirmText: '确定',
    maxDate: null,
    minDate: null,
    defaultDate: null,
    confirmDisabledText: '确认',
    title: '选择日期',
    color: '#1989fa',
    rowHeight: 64,
    firstDayOfWeek: 0,
    formatter: (day: Date) => day,
    format: 'yyyy-MM-dd'
  },
  style: {
    position: 'relative',
  },
};