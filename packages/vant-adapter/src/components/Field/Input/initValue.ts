export default {
  label: '输入框',
  props: {
    type: 'text',
    placeholder: '请输入',
    maxlength: 255,
    min: 0,
    max: 255,
    border: true,
    center: false,
    clearable: false,
    clearIcon: 'clear',
    clearTrigger: 'focus',
    clickable: false,
    isLink: false,
    autofocus: false,
    showWordLimit: false,
    error: false,
    errorMessageAlign: 'right',
    formatTrigger: 'onChange',
    arrowDirection: 'right',
    autosize: false,
    iconPrefix: 'van-icon'
  },
  style: {
    position: 'relative',
  },
};