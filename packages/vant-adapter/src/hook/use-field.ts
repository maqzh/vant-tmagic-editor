import { inject, ref, computed, watch, ComponentInternalInstance, getCurrentInstance } from 'vue-demi';
import { debounce } from 'lodash-es';
import { FormState, FieldState, ChangeRecord } from '../schame';

const getFormItemPropValue = (mForm: any, props: any, prop: string, defValue?: any): any => {
  if (!props[prop] || !props.hasOwnProperty(prop) || props[prop] === '' 
    || !props.props || !props.props.hasOwnProperty(prop) || props.props[prop] === '') {
    return mForm?.config?.[prop]
  }
  return props[prop] || props.props[prop] || defValue
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
  const disabled = ref<boolean>(getFormItemPropValue(mForm, props, 'disabled', false))
  const visible = ref<boolean>(props?.style?.display !== 'none')
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
      return visible?.value
    },
    setVisible: (value: boolean = true) => {
      if (visible) {
        visible.value = value
      }
    },
  })
  const compProps = computed(() => {
    return {
      ...props.props,
      disabled: disabled.value,
    }
  })
  const fieldProps = computed(() => {
    return {
      label: props.label,
      name: props.name,
      value: props.value,
      labelWidth: getFormItemPropValue(mForm, props, 'labelWidth'),
      labelAlign: getFormItemPropValue(mForm, props, 'labelAlign'),
      inputAlign: getFormItemPropValue(mForm, props, 'inputAlign'),
      disabled: disabled.value,
      // className: props.className,
      rules: props.rules,
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
