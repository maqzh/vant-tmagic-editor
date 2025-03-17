import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '类型',
                name: 'type',
                type: 'select',
                options: [
                    {label: 'text', value: 'text'},
                    {label: 'textarea', value: 'textarea'},
                    {label: 'password', value: 'password'},
                    {label: 'checkbox', value: 'checkbox'},
                    {label: 'radio', value: 'radio'},
                    {label: 'number', value: 'number'},
                    {label: 'digit', value: 'digit'},
                    {label: 'date', value: 'date'},
                    {label: 'time', value: 'time'},
                    {label: 'week', value: 'week'},
                    {label: 'month', value: 'month'},
                    {label: 'datetime-local', value: 'datetime-local'},
                    {label: 'tel', value: 'tel'},
                    {label: 'url', value: 'url'},
                    {label: 'file', value: 'file'},
                    {label: 'color', value: 'color'},
                    {label: 'email', value: 'email'},
                    {label: 'image', value: 'image'},
                    {label: 'range', value: 'range'},
                    {label: 'reset', value: 'reset'},
                    {label: 'button', value: 'button'},
                    {label: 'hidden', value: 'hidden'},
                    {label: 'search', value: 'search'},
                    {label: 'submit', value: 'submit'},
                ]
            },
            {
                text: '大小',
                name: 'size',
                type: 'select',
                options: [
                    {label: 'normal', value: 'normal'},
                    {label: 'large', value: 'large'},
                ]
            },
            {
                text: '最大字符',
                name: 'maxlength',
                type: 'text'
            },
            {
                text: '最小值',
                name: 'min',
                type: 'text'
            },
            {
                text: '最大值',
                name: 'max',
                type: 'text'
            },
            {
                text: '占位提示文字',
                name:'placeholder',
                type: 'text'
            },
            {
                text: '显示内边框',
                name:'border',
                type: 'switch',
            },
            {
                text: '垂直居中',
                name:'center',
                type: 'switch',
            },
            {
                text: '启用清除图标',
                name:'clearable',
                type: 'switch',
            },
            {
                text: '清除图标名称',
                name:'clear-icon',
                type: 'text',
            },
            {
                text: '清除图标时机',
                name:'clear-trigger',
                type: 'text',
            },
            {
                text: '击反馈',
                name:'clickable',
                type: 'switch',
            },
            {
                text: '展示右侧箭头',
                name:'is-link',
                type: 'switch',
            },
            {
                text: '自动聚焦',
                name:'autofocus',
                type: 'switch',
            },
            {
                text: '字数统计',
                name:'show-word-limit',
                type: 'switch',
            },
            {
                text: '箭头方向',
                name: 'arrowDirection',
                type: 'select',
                options: [
                    {label: 'up', value: 'up' },
                    {label: 'down', value: 'down' },
                    {label: 'left', value: 'left'},
                    {label: 'right', value: 'right' },
                ],
            },
            {
                text: '自动完成',
                name:'autocomplete',
                type: 'text',
            },
            {
                text: '自动大写',
                name:'autocapitalize',
                type: 'text',
            },
            {
                text: '回车键样式',
                name:'enterkeyhint',
                type: 'text',
            },
            {
                text: '检查拼写错误',
                name:'spellcheck',
                type: 'text',
            },
            {
                text: '自动更正文本',
                name:'autocorrect',
                type: 'text',
            },
            {
                text: '输入模式',
                name:'inputmode',
                type: 'text',
            },
        ]
    },
]
