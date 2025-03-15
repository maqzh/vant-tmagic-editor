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
        name: 'label-width',
        type: 'text',
    },
    {
        text: '标签对齐',
        name: 'label-align',
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
        name: 'input-align',
        type: 'select',
        options: [
            {label: 'left', value: 'left' },
            {label: 'right', value: 'right' },
            {label: 'center', value: 'center' }
        ]
    },
]