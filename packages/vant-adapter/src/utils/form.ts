import { toRaw } from 'vue';
import { cloneDeep } from 'lodash-es';
import { MContainer } from "@tmagic/core"
import { unflatten } from './flatten';
import { FormItemProps, FormState, FormValue } from '../schame';

export function getEmptyValue(type: string = 'string') {
  switch (type) {
    case 'array':
      return [];
    case 'number':
      return null;
    default:
      return null
  }
}

export function getMetaValues(formConfig: MContainer) {
  const metaConfig: any = {}
  const toggle = (items: any[], parentNode: any = {}) => {
    if (items) {
      items.forEach((item: any) => {
        if (item.name) {
          if (!item.isContainer) {
            parentNode[item.name] = parentNode[item.name] || (item.items && item.items.length > 0 ? {} : getEmptyValue(item.valueType))
          }
          toggle(item.items, item.isContainer? metaConfig: metaConfig[item.name])
        }
      })
    }
  }
  toggle(formConfig.items, metaConfig)
  return {
    [formConfig.name || '']: metaConfig
  }
}

export async function initFormValue(
  mForm: FormState | undefined,
  { initValues, config, formName }: { initValues: FormValue; config: FormItemProps<any>[]; formName: string }
): Promise<FormValue> {
  let initVal = unflatten(toRaw(initValues));
  if (initVal && formName) {
    initVal = initVal[formName];
  }
  let values = createValues(mForm, config, initVal);
  if (mForm && mForm.onInitValue) {
    const val = await mForm.onInitValue(mForm, { formValue: values, initValue: initValues });
    if (val) {
      values = val;
    }
  }
  return {
    [formName]: values
  };
}

function initFormItemValue(
  mForm: FormState | undefined,
  item: FormItemProps<any>,
  initValue: FormValue,
  value: FormValue,
) {
  const { valueType: type, name, items } = item;
  let subInitValues = initValue;
  if (!item.isContainer) {
    if (name) {
      value[name] = getEmptyValue(type);
      subInitValues = initValue[name];
      if (typeof subInitValues === 'undefined' && name.indexOf('.') > -1) {
        const paths = name.split('.');
        subInitValues = initValue;
        for (let i = 0; i < paths.length; i++) {
          const path = paths[i];
          subInitValues = subInitValues[path];
          if (typeof subInitValues === 'undefined') {
            break;
          }
        }

      }
    }
    if (name && typeof subInitValues !== 'undefined') {
      if (type === 'number') {
        value[name] = Number(subInitValues);
      } else if (typeof subInitValues === 'object') {
        value[name] = cloneDeep(subInitValues);
      } else {
        value[name] = subInitValues;
      }
      return value;
    }
  }
  if (items) {
    return createValues(mForm, items, subInitValues, name ? value[name] : value);
  }
  return unflatten(value);
}
function createValues(
  mForm: FormState | undefined,
  config?: FormItemProps<any>[],
  initValue: FormValue = {},
  value: FormValue = {}
): FormValue {
  if (Array.isArray(config)) {
    config.forEach((item: FormItemProps<any>) => {
      initFormItemValue(mForm, item, initValue, value);
    });
  }
  return value;
}