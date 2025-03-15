export default [
  {
    text: '类型',
    name: 'type',
    type: 'select',
    defaultValue: 'default',
    options: [
      {
        text: 'default',
        value: 'default',
      },
      {
        text: 'primary',
        value: 'primary',
      },
      {
        text: 'success',
        value: 'success',
      },
      {
        text: 'warning',
        value: 'warning',
      },
      {
        text: 'danger',
        value: 'danger',
      },
    ],
  },
  {
    text: '尺寸',
    name: 'size',
    type: 'select',
    defaultValue: 'normal',
    options: [
      {
        text: 'normal',
        value: 'normal',
      },
      {
        text: 'large',
        value: 'large',
      },
      {
        text: 'small',
        value: 'small',
      },
      {
        text: 'mini',
        value: 'mini',
      },
    ],
  },
  {
    text: '文字',
    name: 'text',
    type: 'text',
    defaultValue: '按钮'
  },
  {
    text: '颜色',
    name: 'color',
    type: 'data-source-field-select',
    fieldConfig: {
      type: 'colorPicker',
    },
  },
  {
    text: '左侧图标名称',
    name: 'icon',
    type: 'text',
  },
  {
    text: '图标类名前缀',
    name: 'icon-prefix',
    type: 'text',
    defaultValue: 'van-icon',
  },
  {
    text: '图标展示位置',
    name: 'icon-position',
    type: 'select',
    defaultValue: 'left',
    options: [
      {
        text: 'left',
        value: 'left',
      },
      {
        text: 'right',
        value: 'right',
      },
    ],
  },
]
