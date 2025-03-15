export default {
    events: [{
        label: '选中日期',
        value: 'calendar:select'
    },{
        label: '选择日期',
        value: 'calendar:confirm'
    },{
        label: '打开弹出层',
        value: 'calendar:open'
    },{
        label: '关闭弹出层',
        value: 'calendar:close'
    },{
        label: '打开弹出层后',
        value: 'calendar:opened'
    },{
        label: '关闭弹出层后',
        value: 'calendar:closed'
    },{
        label: '取消选中',
        value: 'calendar:unselect'
    },{
        label: '月份进入可视区',
        value: 'calendar:month-show'
    },{
        label: '选择超过最多可选天数时',
        value: 'calendar:over-range'
    },{
        label: '点击副标题',
        value: 'calendar:click-subtitle'
    },{
        label: '点击禁用日期',
        value: 'calendar:click-disabled-date'
    },{
        label: '日历面板切换',
        value: 'calendar:panel-change'
    }],
    methods: [
        {
            label: '重置到指定日期',
            value: 'reset'
        },
        {
            label: '滚动到某个日期',
            value: 'scrollToDate'
        },
        {
            label: '获取选中的时间',
            value: 'getSelectedDate'
        },
    ]
}