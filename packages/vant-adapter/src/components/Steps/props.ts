export default [
  {
    name: 'props',
    type: 'container',
    items: [
      {
        text: '索引值',
        name: 'active',
        type: 'text',
      },
      {
        text: '方向',
        name: 'direction',
        type: 'select',
        options: [
          {
            text: '水平',
            value: 'horizontal'
          },
          {
            text: '垂直',
            value: 'vertical'
          }
        ]
      },
      {
        text: '当前步骤图标',
        name: 'activeIcon',
        type: 'text',
      },
      {
        text: '非当前步骤图标',
        name: 'inactiveIcon',
        type: 'text',
      },
      {
        text: '已完成步骤图标',
        name: 'finishIcon',
        type: 'text',
      },
      {
        text: '已激活步骤颜色',
        name: 'activeColor',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
      {
        text: '未激活步骤颜色',
        name: 'inactiveColor',
        type: 'data-source-field-select',
        fieldConfig: {
          type: 'colorPicker',
        },
      },
      {
        text: '图标类名前缀',
        name: 'iconPrefix',
        type: 'text',
      },
    ],
  },
  {
    text: '步骤',
    name: 'items',
    type: 'table',
    items: [
      {
        label: '组件Id',
        name: 'id',
        type: 'hidden',
        defaultValue: () => {
          return `step_${Math.random().toString(36).substring(2)}`
        },
      },
      {
        label: '组件Name',
        name: 'name',
        type: 'hidden',
        defaultValue: () => {
          return `step${Math.random().toString(36).substring(2, 6)}`
        },
      },
      {
        label: '组件类型',
        name: 'type',
        type: 'hidden',
        defaultValue: 'step',
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
        label: '标题标签',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'titleTag',
            type: 'text',
          }
        ],
      },
      {
        label: '描述',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'desc',
            type: 'text',
          }
        ],
      },
      {
        label: '描述标签',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'descTag',
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
