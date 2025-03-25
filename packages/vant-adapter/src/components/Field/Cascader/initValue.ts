export default {
  label: '级联选择',
  readonly: true,
  props: {
    isLink: true,
    placeholder: '点击选择',
    options: [
      {text: '选项1', value: '1', children: [{text: '选项1-1', value: '1-1'}]},
      {text: '选项2', value: '2', children: [{text: '选项2-1', value: '2-1'}]},
    ],
    title: '',
    activeColor: '#1989fa',
    swipeable: true,
    closeable: true,
    showHeader: true,
    closeIcon: 'cross',
    fieldNames: { text: 'text', value: 'value', children: 'children' },
  },
  style: {
    position: 'relative',
  },
};