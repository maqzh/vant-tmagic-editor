export default {
    events: [
        {label: '每一页轮播结束', value: 'change'},
        {label: '开始拖动轮播组件', value: 'swipe:drag-start'},
        {label: '结束拖动轮播组件', value:'swipe:drag-end'},
    ],
    methods: [
        {label: '切换到指定页', value: 'swipeTo'},
        {label: '切换到上一页', value: 'prev'},
        {label: '切换到下一页', value: 'next'},
        {label: '外层元素状态变化', value:'resize'},
    ]
}