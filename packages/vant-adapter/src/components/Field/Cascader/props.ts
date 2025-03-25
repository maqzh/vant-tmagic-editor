import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '标题',
                name: 'title',
                type: 'text',
            },
            {
                text: '选项',
                name: 'options',
                type: 'table',
                items: [
                    {
                        name: 'text',
                        label: '名称',
                    },
                    {
                        name: 'value',
                        label: '值',
                    },
                ],
                rowKey: 'value',
                defaultExpandAll: true,
            },
            {
                text: '占位提示符',
                name: 'placeholder',
                type: 'text',
            },
            {
                text: '选中颜色',
                name: 'activeColor',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '开启滑动切换',
                name: 'swipeable',
                type: 'switch',
            },
            {
                text: '关闭图标',
                name: 'closeable',
                type: 'switch',
            },
            {
                text: '展示标题栏',
                name: 'showHeader',
                type: 'switch',
            },
            {
                text: '关闭图标',
                name: 'closeIcon',
                type: 'text',
            },
            {
                text: '自定义字段',
                name: 'fieldNames',
                type: 'text',
            },
        ]
    },
]
