export default [
    {
        type: 'container',
        name: 'props',
        items: [
            {
                text: '吸附位置',
                name: 'position',
                type: 'select',
                options: [
                    {
                        text: '顶部',
                        value: 'top'
                    },
                    {
                        text: '底部',
                        value: 'bottom'
                    }
                ],
            },
            {
                text: '吸顶距离',
                name: 'offsetTop',
                type: 'text',
            },
            {
                text: '吸底距离',
                name: 'offsetBottom',
                type: 'text',
            },
            {
                text: 'z-index',
                name: 'zIndex',
                type: 'text',
            },
        ]
    }
]
