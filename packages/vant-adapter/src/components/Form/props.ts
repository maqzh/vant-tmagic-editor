export default [{
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
        {
            text: '标签宽度',
            name: 'labelWidth',
            defaultValue: '6.2em',
        },
        {
            text: '标签对齐方式',
            name: 'labelAlign',
            type: 'select',
            options: [
                {
                    text: '居中',
                    value: 'center',
                },
                {
                    text: '右对齐',
                    value: 'right',
                },
                {
                    text: '上对齐',
                    value: 'top',
                },
            ],
        },
        {
            text: '输入框对齐方式',
            name: 'inputAlign',
            type: 'select',
            options: [
                {
                    text: '居中',
                    value: 'center',
                },
                {
                    text: '右对齐',
                    value: 'right',
                },
            ],
        },
    ]
}];