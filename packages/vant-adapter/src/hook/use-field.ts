import { inject, ref, computed, watch, ComponentInternalInstance, getCurrentInstance } from 'vue-demi';
import { debounce } from 'lodash-es';
import { useComponent } from './use-component';
import { FormState, FieldState, FormItemProps, ChangeRecord, FormItemRule } from '../schame';
import { FORM_INJECT_KEY } from '../utils/constant';

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

const addField = (mForm?: FormState | null, prop?: string, fieldState?: FieldState) => {
  if (!prop) return;
  const instance = getCurrentInstance() as ComponentInternalInstance;
  watch(
    () => instance?.proxy,
    (vm) => {
      if (vm) {
        fieldState!.instance = vm;
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

export function useField(config: FormItemProps<any>, emit?: any, changeEvent?: string) {
  const mForm = inject<FormState | null>(FORM_INJECT_KEY);
  const disabled = ref<boolean>(getFormItemPropValue(mForm, config, 'disabled') || false)
  const visible = ref<boolean>(config?.style?.display !== 'none')
  const required = ref<boolean>(config.required || false)
  const rules = computed<FormItemRule[]>(() => [
    {
      required: required.value,
      message: config?.errorMessage || '内容不能为空',
      trigger: 'onChange'
    },
    ...(config.rules || [])
  ])
  const { props, style, state } = useComponent(config)
  const fieldState: FieldState = {
    getValue: () => {
      return config?.model[config?.name]
    },
    setValue: (value: any) => {
      if (config?.model && config?.name) {
        config.model[config.name] = value;
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
    ...state
  }
  addField(mForm, config.id, fieldState)
  const compProps = computed(() => {
    return {
      ...props.value,
      disabled: disabled.value,
    }
  })
  const fieldProps = computed<any>(() => {
    return {
      label: config.label,
      name: config.name,
      // value: props.model[props.name],
      labelWidth: getFormItemPropValue(mForm, config, 'labelWidth'),
      labelAlign: getFormItemPropValue(mForm, config, 'labelAlign'),
      inputAlign: getFormItemPropValue(mForm, config, 'inputAlign', 'right'),
      disabled: disabled.value,
      required: required.value,
      colon: config.colon || false,
      clsName: config.className,
      rules: rules.value,
      style: {
        ...style.value,
        position: 'relative',
        display: visible.value ? '' : 'none'
      }
    }
  })
  const changeHandler = (value: any) => {
    const event: ChangeRecord = {
      propPath: config.parentName ? `${config.parentName}.${config.name}` : config.name,
      value: value
    }
    mForm?.setChangeValue(event)
    config.onChange?.(value)
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
