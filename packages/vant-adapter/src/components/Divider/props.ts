export default [
    {
        name: 'props',
        type: 'container',
        items: [
            {
                text: '文字内容',
                name: 'text',
                type: 'text',
            },
            {
                text: '使用虚线',
                name: 'dashed',
                type: 'switch',
            },
            {
                text: '使用0.5px线',
                name: 'hairline',
                type: 'switch',
            },
            {
                text: '内容位置',
                name: 'contentPosition',
                type: 'select',
                options: [
                    {
                        label: 'left',
                        value: 'left',
                    },
                    {
                        label: 'center',
                        value: 'center',
                    },
                    {
                        label: 'right',
                        value: 'right',
                    },
                ],
            },
            {
                text: '使用垂直',
                name: 'vertical',
                type: 'switch',
            },
        ]
    }
]
