export default [{
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
        {
            text: '遮罩层',
            name: 'overlay',
            type: 'switch',
        },
        {
            text: '弹出位置',
            name: 'position',
            type: 'select',
            options: [
                { label: 'top', value: 'top' },
                { label: 'right', value: 'right' },
                { label: 'bottom', value: 'bottom' },
                { label: 'left', value: 'left' }
            ],
        },
        {
            text: '遮罩层类名',
            name: 'overlay-class',
            type: 'text',
        },
        {
            text: '遮罩层样式',
            name: 'overlay-style',
            type: 'text',
        },
        {
            text: '动画时长',
            name: 'duration',
            type: 'text',
        },
        {
            text: 'zIndex层级',
            name: 'z-index',
            type: 'text',
        },
        {
            text: '是否圆角',
            name: 'round',
            type: 'switch',
        },
        {
            text: '关闭销毁内容',
            name: 'destroy-on-close',
            type: 'switch',
        },
        {
            text: '锁定背景滚动',
            name: 'lock-scroll',
            type: 'switch',
        },
        {
            text: '锁定背景滚动',
            name: 'lazy-render',
            type: 'switch',
        },
        {
            text: '回退自动关闭',
            name: 'close-on-popstate',
            type: 'switch',
        },
        {
            text: '点击遮罩层关闭',
            name: 'close-on-click-overlay',
            type: 'switch',
        },
        {
            text: '显示关闭图标',
            name: 'closeable',
            type: 'switch',
        },
        {
            text: '关闭图标名称',
            name: 'close-icon',
            type: 'text',
        },
        {
            text: '关闭图标位置',
            name: 'close-icon-position',
            type: 'select',
            options: [
                { label: 'top-left', value: 'top-left' },
                { label: 'top-right', value: 'top-right' },
                { label: 'bottom-left', value: 'bottom-left' },
                { label: 'bottom-right', value: 'bottom-right' }
            ],
        },
        {
            text: '关闭回调函数',
            name: 'before-close',
            type: 'text',
        },
        {
            text: '图标类名前缀',
            name: 'icon-prefix',
            type: 'text',
        },
        {
            text: '动画类名',
            name: 'transition',
            type: 'text',
        },
        {
            text: '启用过渡动画',
            name: 'transition-appear',
            type: 'switch',
        },
        {
            text: '挂载节点',
            name: 'teleport',
            type: 'text',
        },
        {
            text: '开启顶部安全区',
            name: 'safe-area-inset-top',
            type: 'switch',
        },
        {
            text: '开启底部安全区',
            name: 'safe-area-inset-bottom',
            type: 'switch',
        },
    ]
}]
