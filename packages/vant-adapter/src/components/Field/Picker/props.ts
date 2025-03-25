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
                text: '占位提示符',
                name: 'placeholder',
                type: 'text',
            },
            {
                text: '选项',
                name: 'columns',
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
                text: '顶部栏位置',
                name: 'toolbarPosition',
                type: 'select',
                options: [
                    {
                        label: '顶部',
                        value: 'top',
                    },
                    {
                        label: '底部',
                        value: 'bottom',
                    },
                ]
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
                text: '显示顶部栏',
                name: 'showToolbar',
                type: 'switch',
            },
            {
                text: '允许HTML',
                name: 'allowHtml',
                type: 'switch',
            },
        ]
    },
]
