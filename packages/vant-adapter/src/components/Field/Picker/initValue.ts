export default {
  label: '选择器',
  readonly: true,
  props: {
    isLink: true,
    placeholder: '点击选择',
    columns: [
      {text: '选项1', value: '1'},
      {text: '选项2', value: '2'},
    ],
    title: '',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    toolbarPosition: 'top',
    loading: false,
    readonly: false,
    showToolbar: true,
    allowHtml: false,
    optionHeight: 44,
    visibleOptionNum: 6,
    swipeDuration: 1000,
  },
  style: {
    position: 'relative',
  },
};