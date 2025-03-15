export default {
  methods: [
    {
      label: '打开弹出层',
      value: 'openPopup',
    },
    {
      label: '关闭弹出层',
      value: 'closePopup',
    },
  ],
  events: [
    {
      label: '打开弹出层',
      value: 'popup:open',
    },
    {
      label: '关闭弹出层',
      value: 'popup:close',
    },
    {
      label: '点击蒙层',
      value: 'popup:click-overlay',
    },
    {
      label: '点击关闭按钮',
      value: 'popup:click-close-icon',
    },
    {
      label: '打开弹出层后',
      value: 'popup:opened',
    },
    {
      label: '关闭弹出层后',
      value: 'popup:closed',
    },
  ],
};
