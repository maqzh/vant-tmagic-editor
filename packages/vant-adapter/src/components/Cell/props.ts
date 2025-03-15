export default [
    {
        text: '标题',
        name: 'title',
        type: 'text',
    },
    {
        text: '内容',
        name: 'value',
        type: 'text',
    },
    {
        text: '描述信息',
        name: 'label',
        type: 'text',
    },
    {
        text: '尺寸',
        name: 'size',
        type: 'select',
        options: [
            {
                text: 'large',
                value: 'large',
            },
            {
                text: 'normal',
                value: 'normal',
            },
        ]
    },
    {
        text: '图标',
        name: 'icon',
        type: 'text',
    },
    {
        text: '图标前缀',
        name: 'icon-prefix',
        type: 'text',
        defaultValue: 'van-icon',
    },
    {
        text: '标签名',
        name: 'tag',
        type: 'text',
        defaultValue: 'div',
    },
    {
        text: '链接地址',
        name: 'url',
        type: 'text',
    },
    {
        text: '目标路由对象',
        name: 'to',
        type: 'text',
    },
    {
        text: '内边框',
        name: 'border',
        type: 'switch',
        defaultValue: true,
    },
    {
        text: '替换当前页面历史',
        name: 'replace',
        type: 'switch',
        defaultValue: false,
    },
    {
        text: '点击反馈',
        name: 'clickable',
        type: 'switch',
        defaultValue: false,
    },
    {
        text: '右侧箭头',
        name: 'is-link',
        type: 'switch',
        defaultValue: true,
    },
    {
        text: '必填星号',
        name: 'required',
        type: 'switch',
        defaultValue: false,
    },
    {
        text: '垂直居中',
        name: 'center',
        type: 'switch',
        defaultValue: false,
    },
    {
        text: '箭头方向',
        name: 'arrow-direction',
        type: 'select',
        defaultValue: 'right',
        options: [
            {
                text: 'left',
                value: 'left',
            },
            {
                text: 'right',
                value: 'right',
            },
            {
                text: 'up',
                value: 'up',
            },
            {
                text: 'down',
                value: 'down',
            },
        ]
    },
    {
        text: '标题样式',
        name: 'title-style',
        type: 'text',
    },
    {
        text: '标题类名',
        name: 'title-class',
        type: 'text',
    },
    {
        text: '内容类名',
        name: 'value-class',
        type: 'text',
    },
    {
        text: '描述类名',
        name: 'label-class',
        type: 'text',
    },
]
