export default {
  label: '日期选择',
  readonly: true,
  props: {
    isLink: true,
    placeholder: '点击选择日期',
    columnsType: ['year', 'month', 'day'],
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    showToolbar: true,
    loading: false,
    readonly: false,
    delimiter: '-',
  },
  style: {
    position: 'relative',
  },
};