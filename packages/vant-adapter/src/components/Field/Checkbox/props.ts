import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '是否禁用',
                name: 'disabled',
                type: 'switch',
            },
            {
                text: '最大可选数',
                name: 'max',
                type: 'text',
                fieldConfig: {
                    type: 'number'
                },
            },
            {
                text: '排列方向',
                name: 'direction',
                type: 'select',
                options: [
                    { label: 'horizontal', value: 'horizontal' },
                    { label: 'vertical', value: 'vertical' },
                ]
            },
            {
                text: '图标大小',
                name: 'iconSize',
                type: 'text',
            },
            {
                text: '选中状态颜色',
                name: 'checkedColor',
                type: 'data-source-field-select',
                fieldConfig: {
                    type: 'colorPicker',
                },
            },
            {
                text: '形状',
                name: 'shape',
                type: 'select',
                options: [
                    { label: 'round', value: 'round' },
                    { label: 'square', value: 'square' },
                    { label: 'dot', value: 'dot' },
                ]
            }
        ]
    },
    {
        text: '选项',
        name: 'options',
        type: 'table',
        items: [
            {
                name: 'label',
                label: '名称',
            },
            {
                name: 'value',
                label: '值',
            },
        ],
    }
]
