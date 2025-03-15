export default [
    {
        text: '类型',
        name: 'type',
        type: 'select',
        defaultValue: 'single',
        options: [
            {
                text: 'single',
                value: 'single',
            },
            {
                text: 'multiple',
                value: 'multiple',
            },
            {
                text: 'range',
                value: 'range',
            }
        ],
    },
    {
        text: '模式',
        name: 'switch-mode',
        type: 'select',
        options: [
            {
                text: 'none',
                value: 'none'
            },
            {
                text: 'month',
                value: 'month'
            },
            {
                text: 'year-month',
                value: 'year-month'
            }
        ]
    },
    {
        text: '标题',
        name: 'title',
        type: 'text',
    },
    {
        text: '主题色',
        name: 'color',
        type: 'data-source-field-select',
        fieldConfig: {
            type: 'colorPicker',
        },
    },
    {
        text: '默认日期',
        name: 'default-date',
        type: 'date'
    },
    {
        text: '最小日期',
        name: 'min-date',
        type: 'date'
    },
    {
        text: '最大日期',
        name: 'max-date',
        type: 'date'
    },
    {
        text: '日期行高',
        name: 'row-height',
        type: 'text'
    },
    {
        text: '格式化函数',
        name: 'formatter',
        type: 'function'
    },
    {
        text: '弹层形式',
        name: 'poppable',
        type: 'switch'
    },
    {
        text: '只渲染可视区域',
        name: 'lazy-render',
        type: 'switch'
    },
    {
        text: '背景水印',
        name: 'show-mark',
        type: 'switch'
    },
    {
        text: '显示日历标题',
        name: 'show-title',
        type: 'switch'
    },
    {
        text: '显示日历副标题',
        name: 'show-subtitle',
        type: 'switch'
    },
    {
        text: '显示日历副标题',
        name: 'show-confirm',
        type: 'switch'
    },
    {
        text: '只读状态',
        name: 'readonly',
        type: 'switch'
    },
    {
        text: '确认按钮文字',
        name: 'confirm-text',
        type: 'text',
    },
    {
        text: '确认按钮禁用状态时的文字',
        name: 'confirm-disabled-text',
        type: 'text',
    },
    {
        text: '设置周起始日',
        name: 'first-day-of-week',
        type: 'text'
    },
]