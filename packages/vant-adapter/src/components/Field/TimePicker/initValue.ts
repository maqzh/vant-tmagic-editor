export default {
  label: '时间选择',
  readonly: true,
  props: {
    isLink: true,
    placeholder: '点击选择时间',
    columnsType: ['hour', 'minute'],
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showToolbar: true,
    loading: false,
    readonly: false,
    delimiter: ':',
  },
  style: {
    position: 'relative',
  },
};