import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '选项类型',
                name: 'columnsType',
                type: 'select',
                options: [
                    {label: 'year', value: 'year' },
                    {label: 'month', value: 'month' },
                    {label: 'day', value: 'day' },
                ],
                fieldConfig: {
                    multiple: true
                }
            },
            {
                text: '标题',
                name: 'title',
                type: 'text',
            },
            {
                text: '确认按钮文字',
                name: 'confirmButtonText',
                type: 'text',
            },
            {
                text: '取消按钮文字',
                name: 'cancelButtonText',
                type: 'text',
            },
            {
                text: '显示顶部栏',
                name: 'showToolbar',
                type: 'switch',
            },
            {
                text: '加载状态',
                name: 'loading',
                type: 'switch',
            },
            {
                text: '只读状态',
                name: 'readonly',
                type: 'switch',
            },
            {
                text: '分隔符',
                name: 'delimiter',
                type: 'text',
            },
        ]
    },
]
