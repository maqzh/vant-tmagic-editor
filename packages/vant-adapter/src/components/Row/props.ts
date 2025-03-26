export default [
  {
    type: 'container',
    name: 'props',
    title: '组件属性',
    items: [
      {
        text: '列间距',
        name: 'gutter',
        type: 'text',
      },
      {
        text: '元素标签',
        name: 'tag',
        type: 'text',
      },
      {
        text: '主轴对齐方式',
        name: 'justify',
        type: 'select',
        options: [
          {
            label: 'start',
            value: 'start'
          },
          {
            label: 'end',
            value: 'end'
          },
          {
            label: 'center',
            value: 'center'
          },
          {
            label: 'space-around',
            value: 'space-around'
          },
          {
            label: 'space-between',
            value: 'space-between'
          },
        ],
        defaultValue: 'start',
      },
      {
        text: '交叉轴对齐方式',
        name: 'align',
        type: 'select',
        options: [
          {
            label: 'top',
            value: 'top'
          },
          {
            label: 'center',
            value: 'center'
          },
          {
            label: 'bottom',
            value: 'bottom'
          },
        ],
        defaultValue: 'top',
      },
      {
        text: '自动换行',
        name: 'wrap',
        type: 'switch',
        defaultValue: true
      },
    ],
  },
  {
    text: '列',
    name: 'items',
    type: 'table',
    items: [
      {
        label: '组件Id',
        name: 'id',
        type: 'hidden',
        defaultValue: () => {
          return `col_${Math.random().toString(36).substring(2)}`
        },
      },
      {
        label: '组件Name',
        name: 'name',
        type: 'hidden',
        defaultValue: () => {
          return `col${Math.random().toString(36).substring(2, 6)}`
        },
      },
      {
        label: '组件类型',
        name: 'type',
        type: 'hidden',
        defaultValue: 'col',
      },
      {
        label: '是否非字段组件',
        name: 'noField',
        type: 'hidden',
        defaultValue: true,
      },
      {
        label: '列宽',
        name: 'props',
        type: 'container',
        items: [
          {
            name: 'span',
            type: 'number',
            defaultValue: 12,
          }
        ],
      },
      {
        label: '偏移距离',
        name: 'props',
        type: 'container',
        items: [
          {
            name:'offset',
            type: 'number',
            defaultValue: 0,
          }
        ],
      },
      {
        label: '元素标签',
        name: 'props',
        type: 'container',
        items: [
          {
            name:'tag',
            type: 'text',
            defaultValue: 'div',
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
