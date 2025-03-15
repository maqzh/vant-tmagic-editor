export default [{
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
        {
            text: '方向',
            name: 'direction',
            type: 'select',
            options: [{
                label: 'vertical',
                value: 'vertical'
            }, {
                label: 'horizontal',
                value: 'horizontal'
            }],
        },
        {
            text: '间距大小',
            name: 'size',
            type: 'text',
        },
        {
            text: '对齐方式',
            name: 'align',
            type: 'select',
            options: [{
                label: 'start',
                value: 'start'
            }, {
                label: 'end',
                value: 'end'
            }, {
                label: 'center',
                value: 'center'
            }, {
                label: 'baseline',
                value: 'baseline'
            }],
        },
        {
            text: '自动换行',
            name: 'wrap',
            type: 'switch',
        },
        {
            text: '块级元素',
            name: 'fill',
            type: 'switch',
        },
    ]
}]
