import type { ComponentGroup } from '@tmagic/editor';

export default [
  {
    title: '基础组件',
    items: [
      {
        icon: 'iconfont icon-group',
        text: '分组框',
        type: 'cell-group'
      },
      {
        icon: 'iconfont icon-button',
        text: '按钮',
        type: 'button'
      },
      {
        icon: 'iconfont icon-cell',
        text: '单元格',
        type: 'cell'
      },
      {
        icon: 'iconfont icon-picture',
        text: '图片',
        type: 'image'
      },
      {
        icon: 'iconfont icon-row',
        text: '行',
        type: 'row'
      },
      {
        icon: 'iconfont icon-popup',
        text: '弹出层',
        type: 'popup'
      },
      {
        icon: 'iconfont icon-space',
        text: '间距',
        type: 'space'
      },
    ],
  },
  {
    title: '表单组件',
    items: [
      {
        icon: 'iconfont icon-input',
        text: '输入框',
        type: 'input-field'
      },
      {
        icon: 'iconfont icon-radio',
        text: '单选框',
        type: 'radio-field'
      },
      {
        icon: 'iconfont icon-checkbox',
        text: '复选框',
        type: 'checkbox-field'
      },
      {
        icon: 'iconfont icon-picker',
        text: '选择器',
        type: 'picker-field'
      },
      {
        icon: 'iconfont icon-switch',
        text: '开关',
        type: 'switch-field'
      },
      {
        icon: 'iconfont icon-datepicker',
        text: '日期选择',
        type: 'date-picker-field'
      },
      {
        icon: 'iconfont icon-calendar',
        text: '日历选择',
        type: 'calendar-field'
      },
      {
        icon: 'iconfont icon-timepicker',
        text: '时间选择',
        type: 'time-picker-field'
      },
      {
        icon: 'iconfont icon-cascader',
        text: '级联选择',
        type: 'cascader'
      },
      {
        icon: 'iconfont icon-rate',
        text: '评分',
        type: 'rate'
      },
      {
        icon: 'iconfont icon-search',
        text: '搜索框',
        type: 'search'
      },
      {
        icon: 'iconfont icon-signature',
        text: '签名',
        type: 'signature'
      },
      {
        icon: 'iconfont icon-stepper',
        text: '步进器',
        type: 'stepper'
      },
      {
        icon: 'iconfont icon-uploader',
        text: '文件上传',
        type: 'uploader'
      },
    ],
  },
  {
    title: '反馈组件',
    items: [
      {
        icon: 'iconfont icon-divider',
        text: '分割线',
        type: 'divider'
      },
      {
        icon: 'iconfont icon-steps',
        text: '步骤条',
        type: 'steps'
      },
      {
        icon: 'iconfont icon-sticky',
        text: '粘性布局',
        type: 'sticky'
      },
      {
        icon: 'iconfont icon-swipe',
        text: '轮播',
        type: 'swipe'
      },
      {
        icon: 'iconfont icon-tag',
        text: '标签',
        type: 'tag'
      },
    ],
  },
  {
    title: '导航组件',
    items: [
      {
        icon: 'iconfont icon-tab',
        text: '标签页',
        type: 'tab'
      },
    ]
  }
] as ComponentGroup[];