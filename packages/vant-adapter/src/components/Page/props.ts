import { getElById } from '@tmagic/core';

export default {
    type: 'container',
    name: 'props',
    items: [
        {
            text: '页面标题',
            name: 'title',
        },
        {
            name: 'layout',
            text: '容器布局',
            type: 'select',
            defaultValue: 'relative',
            options: [
                { value: 'absolute', text: '绝对定位' },
                { value: 'relative', text: '流式布局' },
            ],
            onChange: (formState: any, v: string, { model }: any) => {
                if (!model.style) return v;
                if (v === 'relative') {
                    model.style.height = 'auto';
                } else {
                    const el = getElById()(formState.stage?.renderer?.contentWindow.document, model.id);
                    if (el) {
                        model.style.height = el.getBoundingClientRect().height;
                    }
                }
            },
        },
        {
            name: 'jsFiles',
            text: 'js',
            type: 'table',
            items: [
                {
                    name: 'url',
                    label: '链接',
                },
            ],
        },
        {
            name: 'cssFiles',
            text: 'css',
            type: 'table',
            items: [
                {
                    name: 'url',
                    label: '链接',
                },
            ],
        },
        {
            text: 'css',
            name: 'css',
            type: 'vs-code',
            language: 'css',
            height: '500px',
        },
    ]
}