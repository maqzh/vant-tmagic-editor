import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
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
                name: 'switchMode',
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
                text: '提示占位内容',
                name: 'placeholder',
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
                name: 'defaultDate',
                type: 'date'
            },
            {
                text: '最小日期',
                name: 'minDate',
                type: 'date'
            },
            {
                text: '最大日期',
                name: 'maxDate',
                type: 'date'
            },
            {
                text: '日期行高',
                name: 'rowHeight',
                type: 'text'
            },
            {
                text: '格式化函数',
                name: 'formatter',
                type: 'function'
            },
            {
                text: '格式化',
                name: 'format',
                type: 'text'
            },
            {
                text: '弹层形式',
                name: 'poppable',
                type: 'switch'
            },
            {
                text: '只渲染可视区域',
                name: 'lazyRender',
                type: 'switch'
            },
            {
                text: '背景水印',
                name: 'showMark',
                type: 'switch'
            },
            {
                text: '显示日历标题',
                name: 'showTitle',
                type: 'switch'
            },
            {
                text: '显示日历副标题',
                name: 'showSubtitle',
                type: 'switch'
            },
            {
                text: '显示日历副标题',
                name: 'showConfirm',
                type: 'switch'
            },
            {
                text: '只读状态',
                name: 'readonly',
                type: 'switch'
            },
            {
                text: '确认按钮文字',
                name: 'confirmText',
                type: 'text',
            },
            {
                text: '确认按钮禁用状态时的文字',
                name: 'confirmDisabledText',
                type: 'text',
            },
            {
                text: '设置周起始日',
                name: 'firstDayOfWeek',
                type: 'number'
            },
        ]
    },
]
