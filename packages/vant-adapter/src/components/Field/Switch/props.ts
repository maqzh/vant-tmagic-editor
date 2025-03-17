import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '加载状态',
                name: 'loading',
                type: 'switch',
            },
            {
                text: '是否禁用',
                name: 'disabled',
                type: 'switch',
            },
            {
                text: '尺寸',
                name: 'size',
                type: 'text',
            },
            {
                text: '打开背景色',
                name: 'activeColor',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '关闭背景色',
                name: 'inactiveColor',
                type: 'data-source-field-select',
                fieldConfig: {
                    type: 'colorPicker',
                },
            },
            {
                text: '打开值',
                name: 'activeValue',
                type: 'text',
                fieldConfig: {
                    type: 'switch',
                },
            },
            {
                text: '关闭值',
                name: 'inactiveValue',
                type: 'text',
                fieldConfig: {
                    type: 'switch',
                },
            }
        ]
    }
]
