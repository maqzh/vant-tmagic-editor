export const formItemProps = [
    {
        text: '标签',
        name: 'label',
        type: 'text',
    },
    {
        text: '大小',
        name: 'size',
        type: 'select',
        options: [
            { label: 'normal', value: 'normal' },
            { label: 'large', value: 'large' },
        ]
    },
    {
        text: '是否禁用',
        name: 'disabled',
        type: 'switch',
    },
    {
        text: '是否只读',
        name: 'readonly',
        type: 'switch',
    },
    {
        text: '冒号',
        name: 'colon',
        type: 'switch',
    },
    {
        text: '必填星号',
        name: 'required',
        type: 'switch',
    },
    {
        text: '标签宽度',
        name: 'labelWidth',
        type: 'text',
    },
    {
        text: '标签对齐',
        name: 'labelAlign',
        type: 'select',
        options: [
            {label: 'left', value: 'left' },
            {label: 'right', value: 'right' },
            {label: 'center', value: 'center' },
            {label: 'top', value: 'top' }
        ]
    },
    {
        text: '内容对齐',
        name: 'inputAlign',
        type: 'select',
        options: [
            {label: 'left', value: 'left' },
            {label: 'right', value: 'right' },
            {label: 'center', value: 'center' }
        ]
    },
    {
        text: '输入内容标红',
        name: 'error',
        type: 'switch',
    },
    {
        text: '错误内容',
        name: 'errorMessage',
        type: 'text',
    },
    {
        text: '错误内容对齐',
        name: 'errorMessageAlign',
        type: 'select',
        options: [
            {label: 'left', value: 'left' },
            {label: 'right', value: 'right' },
            {label: 'center', value: 'center' },
        ],
    },
    {
        text: '标签额外类名',
        name: 'labelClass',
        type: 'text',
    },
]