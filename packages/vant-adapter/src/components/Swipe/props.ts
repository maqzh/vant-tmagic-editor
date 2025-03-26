export default [
  {
    name: 'props',
    type: 'container',
    items: [
      {
        text: '轮播间隔',
        name: 'autoplay',
        type: 'text'
      },
      {
        text: '动画时长',
        name: 'duration',
        type: 'text'
      },
      {
        text: '初始索引值',
        name: 'initialSwipe',
        type: 'text'
      },
      {
        text: '滑块宽度',
        name: 'width',
        type: 'text'
      },
      {
        text: '滑块高度',
        name: 'height',
        type: 'text'
      },
      {
        text: '开启循环播放',
        name: 'loop',
        type: 'switch'
      },
      {
        text: '显示指示器',
        name: 'showIndicators',
        type: 'switch'
      },
      {
        text: '纵向滚动',
        name: 'vertical',
        type: 'switch'
      },
      {
        text: '手势滑动',
        name: 'touchable',
        type: 'switch'
      },
      {
        text: '阻止滑动事件冒泡',
        name: 'stopPropagation',
        type: 'switch'
      },
      {
        text: '阻止滑动事件冒泡',
        name: 'lazyRender',
        type: 'switch'
      },
      {
        text: '指示器颜色	',
        name: 'indicatorColor',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
    ]
  },
  {
    text: '循环项',
    name: 'items',
    type: 'table',
    items: [
      {
        label: '组件Id',
        name: 'id',
        type: 'hidden',
        defaultValue: () => {
          return `swipe-item_${Math.random().toString(36).substring(2)}`
        },
      },
      {
        label: '组件Name',
        name: 'name',
        type: 'hidden',
        defaultValue: () => {
          return `swipe-item${Math.random().toString(36).substring(2, 6)}`
        },
      },
      {
        label: '组件类型',
        name: 'type',
        type: 'hidden',
        defaultValue: 'swipe-item',
      },
      {
        label: '是否非字段组件',
        name: 'noField',
        type: 'hidden',
        defaultValue: true,
      },
      {
        label: '文字',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'text',
            type: 'text',
          }
        ],
      },
      {
        label: '图片地址',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'src',
            type: 'text',
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
