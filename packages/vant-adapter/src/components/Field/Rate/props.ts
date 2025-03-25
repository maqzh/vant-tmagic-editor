import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '图标总数',
                name: 'count',
                type: 'number',
            },
            {
                text: '图标大小',
                name: 'size',
                type: 'text',
            },
            {
                text: '图标间距',
                name: 'gutter',
                type: 'text',
            },
            {
                text: '选中时颜色',
                name: 'color',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '未选中时颜色',
                name: 'voidColor',
                type: 'data-source-field-select',
                fieldConfig: {
                    type: 'colorPicker',
                },
            },
            {
                text: '禁用时颜色',
                name: 'disabledColor',
                type: 'data-source-field-select',
                fieldConfig: {
                    type: 'colorPicker',
                },
            },
            {
                text: '选中图标名称',
                name: 'icon',
                type: 'text',
            },
            {
                text: '未选图标名称',
                name: 'voidIcon',
                type: 'text',
            },
            {
                text: '图标前缀',
                name: 'iconPrefix',
                type: 'text',
            },
            {
                text: '关闭值',
                name: 'allowHalf',
                type: 'switch',
            },
            {
                text: '点击后清除',
                name: 'clearable',
                type: 'switch',
            },
            {
                text: '只读状态',
                name: 'readonly',
                type: 'switch',
            },
            {
                text: '是否禁用',
                name: 'disabled',
                type: 'switch',
            },
            {
                text: '滑动选择',
                name: 'touchable',
                type: 'switch',
            }
        ]
    }
]
