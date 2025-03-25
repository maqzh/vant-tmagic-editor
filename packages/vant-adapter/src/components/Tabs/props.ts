export default [
  {
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
      {
        text: '选中标签',
        name: 'active',
        type: 'text',
      },
      {
        text: '样式类型',
        name: 'type',
        type: 'select',
        options: [
          {
            label: '卡片',
            value: 'card',
          },
          {
            label: '线条',
            value: 'line',
          },
        ],
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
        text: '背景色',
        name: 'background',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
      {
        text: '动画时间',
        name: 'duration',
        type: 'text',
      },
      {
        text: '底部条宽度',
        name: 'lineWidth',
        type: 'text',
      },
      {
        text: '底部条高度',
        name: 'lineHeight',
        type: 'text',
      },
      {
        text: '外边框',
        name: 'border',
        type: 'switch',
      },
      {
        text: '省略标题',
        name: 'ellipsis',
        type: 'switch',
      },
      {
        text: '粘性布局',
        name: 'sticky',
        type: 'switch',
      },
      {
        text: '收缩布局',
        name: 'shrink',
        type: 'switch',
      },
      {
        text: '滑动切换',
        name: 'swipeable',
        type: 'switch',
      },
      {
        text: '延迟渲染',
        name: 'lazyRender',
        type: 'switch',
      },
      {
        text: '滚动导航',
        name: 'scrollspy',
        type: 'switch',
      },
      {
        text: '显示标题栏',
        name: 'showHeader',
        type: 'switch',
      },
      {
        text: '顶部的距离',
        name: 'offsetTop',
        type: 'text',
      },
      {
        text: '滚动阈值',
        name: 'swipeThreshold',
        type: 'text',
      },
      {
        text: '选中态颜色',
        name: 'titleActiveColor',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
      {
        text: '默认态颜色',
        name: 'titleInactiveColor',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
    ],
  },
  {
    text: '标签选项',
    name: 'items',
    type: 'table',
    items: [
      {
        label: '组件Id',
        name: 'id',
        type: 'hidden',
        defaultValue: () => {
          return `tab_${Math.random().toString(36).substring(2)}`
        },
      },
      {
        label: '组件Name',
        name: 'name',
        type: 'hidden',
        defaultValue: () => {
          return `tab${Math.random().toString(36).substring(2, 6)}`
        },
      },
      {
        label: '组件类型',
        name: 'type',
        type: 'hidden',
        defaultValue: 'tab',
      },
      {
        label: '是否容器组件',
        name: 'isContainer',
        type: 'hidden',
        defaultValue: true,
      },
      {
        label: '标题',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'title',
            type: 'text',
          }
        ],
      },
      {
        label: '标签名称',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'name',
            type: 'text',
            defaultValue: () => {
              return `tab${Math.random().toString(36).substring(2, 6)}`
            },
          }
        ],
      },
      {
        label: '禁用标签',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'disabled',
            type: 'switch',
            defaultValue: false,
          }
        ],
      },
      {
        label: '子组件',
        name: 'items',
        type: 'hidden',
        defaultValue: [],
      },
      {
        label: '样式',
        name: 'style',
        type: 'hidden',
        defaultValue: {},
      },
    ],
    onChange: (changeEvent: any) => {
      // TODO 已选组件标签没跟着更新
      console.log('change.....', changeEvent)
      const { services, values } = changeEvent;
      services.editorService.doUpdate(values.value || values).then((res: any) => {
        // console.log('update res', res)
        const page = services.editorService.get('page')
        page.modified = !page.modified
        services.editorService.set('page', page)
      });
    }
  },
]
