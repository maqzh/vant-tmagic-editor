import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '最小值',
                name: 'min',
                type: 'number',
            },
            {
                text: '最大值',
                name: 'max',
                type: 'number',
            },
            {
                text: '自动校正',
                name: 'autoFixed',
                type: 'boolean',
            },
            {
                text: '初始值',
                name: 'defaultValue',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '步长',
                name: 'step',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '输入框宽度',
                name: 'inputWidth',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '按钮大小',
                name: 'buttonSize',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '小数位数',
                name: 'decimalLength',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '样式风格',
                name: 'theme',
                type: 'select',
                options: [
                    {
                        label: '圆形',
                        value: 'round'
                    }
                ]
            },
            {
                text: '占位提示文字',
                name: 'placeholder',
                type: 'text',
            },
            {
                text: '只允许输入整数',
                name: 'integer',
                type: 'switch',
            },
            {
                text: '是否禁用',
                name: 'disabled',
                type: 'switch',
            },
            {
                text: '禁用增加按钮',
                name: 'disablePlus',
                type: 'switch',
            },
            {
                text: '禁用减少按钮',
                name: 'disableMinus',
                type: 'switch',
            },
            {
                text: '禁用输入框',
                name: 'disableInput',
                type: 'switch',
            },
            {
                text: '显示增加按钮',
                name: 'showPlus',
                type: 'switch',
            },
            {
                text: '显示减少按钮',
                name: 'showMinus',
                type: 'switch',
            },
            {
                text: '显示输入框',
                name: 'showInput',
                type: 'switch',
            },
            {
                text: '开启长按手势',
                name: 'longPress',
                type: 'switch',
            },
            {
                text: '允许值为空',
                name: 'allowEmpty',
                type: 'switch',
            },
        ]
    }
]
