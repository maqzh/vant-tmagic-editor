export default [{
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
        {
            text: '列间距',
            name: 'gutter',
            type: 'text',
        },
        {
            text: '元素标签',
            name: 'tag',
            type: 'text',
        },
        {
            text: '主轴对齐方式',
            name: 'justify',
            type: 'select',
            options: [
                {
                    label: 'start',
                    value: 'start'
                },
                {
                    label: 'end',
                    value: 'end'
                },
                {
                    label: 'center',
                    value: 'center'
                },
                {
                    label: 'space-around',
                    value: 'space-around'
                },
                {
                    label: 'space-between',
                    value: 'space-between'
                },
            ],
            defaultValue: 'start',
        },
        {
            text: '交叉轴对齐方式',
            name: 'align',
            type: 'select',
            options: [
                {
                    label: 'top',
                    value: 'top'
                },
                {
                    label: 'center',
                    value: 'center'
                },
                {
                    label: 'bottom',
                    value: 'bottom'
                },
            ],
            defaultValue: 'top',
        },
        {
            text: '自动换行',
            name: 'wrap',
            type: 'switch',
            defaultValue: true
        },
    ]
}]
