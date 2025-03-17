import { inject, ref, computed, watch, ComponentInternalInstance, getCurrentInstance } from 'vue-demi';
import { debounce } from 'lodash-es';
import { FormState, FieldState, ChangeRecord, FormItemRule } from '../schame';

const getFormItemPropValue = (mForm: any, props: any, prop: string, defValue?: any): any => {
  let propValue: any = undefined
  if (!props[prop] || !props.hasOwnProperty(prop) || props[prop] === '' 
    || !props.props || !props.props.hasOwnProperty(prop) || props.props[prop] === '') {
    propValue = mForm?.config?.props?.[prop]
  }
  if (propValue == undefined) {
    propValue = props[prop]
  }
  if (propValue == undefined && props.props) {
    propValue = props.props[prop]
  }
  if (propValue == undefined) {
    propValue = defValue
  }
  return propValue
}

const addField = (mForm?: FormState | null, prop?: string, ext?: any) => {
  if (!prop) return;
  const instance = getCurrentInstance() as ComponentInternalInstance;
  watch(
    () => instance?.proxy,
    (vm) => {
      if (vm) {
        const fieldState: FieldState = {
          instance: vm,
          ...ext
        }
        mForm?.setField(prop, fieldState);
      } else {
        mForm?.deleteField(prop);
      }
    },
    {
      immediate: true,
    },
  );
};

export function useField(props: any, emit?: any, changeEvent?: string) {
  const mForm = inject<FormState | null>('mForm');
  const disabled = ref<boolean>(getFormItemPropValue(mForm, props, 'disabled') || false)
  const visible = ref<boolean>(props?.style?.display !== 'none')
  const required = ref<boolean>(props.required || false)
  const rules = computed<FormItemRule[]>(() => [
    {
      required: required.value,
      message: props?.errorMessage || '内容不能为空',
      trigger: 'onChange'
    },
    ...(props.rules || [])
  ])
  addField(mForm, props.id, {
    getValue: () => {
      return props?.model[props?.name]
    },
    setValue: (value: any) => {
      if (props?.model && props?.name) {
        props.model[props.name] = value;
      }
    },
    getDisabled: () => {
      return disabled?.value
    },
    setDisabled: (value: boolean = true) => {
      if (disabled) {
        disabled.value = value
      }
    },
    getVisible: () => {
      return visible.value
    },
    setVisible: (value: boolean = true) => {
      if (visible) {
        visible.value = value
      }
    },
    getRequired: () => {
      return required.value
    },
    setRequired: (value: boolean = true) => {
      if (required) {
        required.value = value
      }
    },
  })
  const compProps = computed(() => {
    return {
      ...props.props,
      disabled: disabled.value,
    }
  })
  const fieldProps = computed<any>(() => {
    return {
      label: props.label,
      name: props.name,
      // value: props.model[props.name],
      labelWidth: getFormItemPropValue(mForm, props, 'labelWidth'),
      labelAlign: getFormItemPropValue(mForm, props, 'labelAlign'),
      inputAlign: getFormItemPropValue(mForm, props, 'inputAlign', 'right'),
      disabled: disabled.value,
      required: required.value,
      colon: props.colon || false,
      clsName: props.className,
      rules: rules.value,
      style: {
        ...props.style,
        position: 'relative',
        display: visible.value ? '' : 'none'
      }
    }
  })
  const changeHandler = (value: any) => {
    const event: ChangeRecord = {
      propPath: props.parentName ? `${props.parentName}.${props.name}` : props.name,
      value: value
    }
    mForm?.setChangeValue(event)
    props.onChange?.(value)
    changeEvent && emit?.(changeEvent, value)
  }
  const debounceChangeHandler = debounce(changeHandler, 500)
  const handleClick = (event: MouseEvent): void => {
    emit?.('click', event)
  }
  return {
    compProps,
    fieldProps,
    disabled,
    debounceChangeHandler,
    handleClick,
  }
}
