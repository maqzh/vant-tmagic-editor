export default [
    {
        name: 'props',
        type: 'container',
        items: [
            {
                text: '文本内容',
                name: 'text',
                type: 'text',
            },
            {
                text: '类型',
                name: 'type',
                type: 'select',
                options: [
                    {
                        label: '默认',
                        value: 'default',
                    },
                    {
                        label: '主要',
                        value: 'primary',
                    },
                    {
                        label: '成功',
                        value: 'success',
                    },
                    {
                        label: '警告',
                        value: 'warning',
                    },
                    {
                        label: '危险',
                        value: 'danger',
                    }
                ]
            },
            {
                text: '大小',
                name: 'size',
                type: 'select',
                options: [
                    {label: 'large', value: 'large'},
                    {label: 'medium', value: 'medium'},
                ]
            },
            {
                text: '颜色',
                name: 'color',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '显示',
                name: 'show',
                type: 'switch',
            },
            {
                text: '空心样式',
                name: 'plain',
                type: 'switch',
            },
            {
                text: '圆角样式',
                name: 'round',
                type: 'switch',
            },
            {
                text: '标记样式',
                name: 'mark',
                type: 'switch',
            },
            {
                text: '文本颜色',
                name: 'textColor',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '可关闭',
                name: 'closable',
                type:'switch',
            }
        ]
    }
]
