import type { ComponentGroup } from '@tmagic/editor';

export default [
  {
    title: '容器组件',
    items: [
      {
        icon: 'iconfont icon-row',
        text: '行容器',
        type: 'row',
        data: {
          name: 'row'
        },
      },
      {
        icon: 'iconfont icon-group',
        text: '分组框',
        type: 'cell-group',
        data: {
          name: 'cell_group'
        }
      },
      {
        icon: 'iconfont icon-sticky',
        text: '粘性布局',
        type: 'sticky',
        data: {
          name: 'sticky'
        }
      },
      {
        icon: 'iconfont icon-tab',
        text: '标签页',
        type: 'tabs',
        data: {
          name: 'tabs'
        }
      },
    ],
  },
  {
    title: '表单组件',
    items: [
      {
        icon: 'iconfont icon-input',
        text: '输入框',
        type: 'input-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-radio',
        text: '单选框',
        type: 'radio-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-checkbox',
        text: '复选框',
        type: 'checkbox-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-picker',
        text: '选择器',
        type: 'picker-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-datepicker',
        text: '日期选择',
        type: 'date-picker-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-calendar',
        text: '日历选择',
        type: 'calendar-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-timepicker',
        text: '时间选择',
        type: 'time-picker-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-cascader',
        text: '级联选择',
        type: 'cascader-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-switch',
        text: '开关',
        type: 'switch-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-rate',
        text: '评分',
        type: 'rate-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-stepper',
        text: '数字',
        type: 'stepper-field',
        data: {
          name: ''
        }
      },
      {
        icon: 'iconfont icon-signature',
        text: '签名',
        type: 'signature-field',
        data: {
          name: ''
        }
      },
    ],
  },
  {
    title: '基础组件',
    items: [
      {
        icon: 'iconfont icon-button',
        text: '按钮',
        type: 'button',
        data: {
          name: 'btn'
        }
      },
      {
        icon: 'iconfont icon-cell',
        text: '单元格',
        type: 'cell',
        data: {
          name: 'cell'
        }
      },
      {
        icon: 'iconfont icon-space',
        text: '间距',
        type: 'space',
        data: {
          name: 'space'
        }
      },
      {
        icon: 'iconfont icon-divider',
        text: '分割线',
        type: 'divider',
        data: {
          name: 'divider'
        }
      },
      {
        icon: 'iconfont icon-steps',
        text: '步骤条',
        type: 'steps',
        data: {
          name:'steps'
        }
      },
      {
        icon: 'iconfont icon-swipe',
        text: '轮播',
        type: 'swipe',
        data: {
          name:'swipe'
        }
      },
    ],
  },
] as ComponentGroup[];