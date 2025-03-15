export default [{
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
        {
            text: '图标名称',
            name: 'name',
            type: 'text',
        },
        {
            text: '右上角小红点',
            name: 'dot',
            type: 'switch',
        },
        {
            text: '徽标内容',
            name: 'badge',
            type: 'text',
        },
        {
            text: '图标颜色',
            name: 'color',
            type: 'data-source-field-select',
            fieldConfig: {
                type: 'colorPicker',
            },
            defaultValue: 'inherit',
        },
        {
            text: '图标大小',
            name: 'size',
            type: 'text',
            defaultValue: 'inherit',
        },
        {
            text: '类名前缀',
            name: 'class-prefix',
            type: 'text',
            defaultValue: 'van-icon',
        },
        {
            text: '标签名',
            name: 'tag',
            type: 'text',
            defaultValue: 'i',
        },
    ]
}]
