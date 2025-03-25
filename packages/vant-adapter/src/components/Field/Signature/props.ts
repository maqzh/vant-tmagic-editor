import { formItemProps } from '../../../configs';
export default [
    ...formItemProps,
    {
        type: 'container',
        name: 'props',
        title: '组件属性',
        items: [
            {
                text: '图片类型',
                name: 'type',
                type: 'text',
            },
            {
                text: '笔触颜色',
                name: 'penColor',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '线条宽度',
                name: 'lineWidth',
                type: 'number',
            },
            {
                text: '背景颜色',
                name: 'backgroundColor',
                type: 'data-source-field-select',
                fieldConfig: {
                  type: 'colorPicker',
                },
            },
            {
                text: '提示文案',
                name: 'tips',
                type: 'text',
            },
            {
                text: '清除按钮文字',
                name: 'clearButtonText',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
            {
                text: '确认按钮文字',
                name: 'confirmButtonText',
                type: 'text',
                fieldConfig: {
                    type: 'number',
                },
            },
        ]
    }
]
