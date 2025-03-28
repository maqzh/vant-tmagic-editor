<template>
  <Form 
    ref="formRef" 
    v-bind="props"
    :style="style"
    :class="`tmagic-ui-form ${className || ''}`"
  >
    <Container 
      :config="config" 
      :model="values[name || '']"
      :parent-name="name"
    >
    </Container>
  </Form>
</template>
<script setup lang="ts">
  import { inject, ref, onMounted, onBeforeUnmount, reactive, watchEffect, watch, provide, shallowRef, toRaw } from 'vue';
  import { Form } from 'vant';
  import { cloneDeep, isEqual, merge } from 'lodash-es';
  import { MContainer } from "@tmagic/core"
  import { useEmitter, FORM_LIFE_CYCLE } from 'emitter-help';
  import Container from '../Container.vue';
  import { PageState, FormState, FormConfig, FormValue, ChangeRecord } from '../../schame';
  import { PAGE_INJECT_KEY, FORM_INJECT_KEY } from '../../utils/constant';
  import { initFormValue } from '../../utils/form';
  import { unflatten } from '../../utils/flatten';
  import { useForm } from '../../hook';

  defineOptions({
    name: 'MagicUiForm',
  });

  const formProps = withDefaults(defineProps<FormConfig & {
    extendState?: (state: FormState) => Record<string, any> | Promise<Record<string, any>>;
  }>(), {
    config: () => ([])
  });

  if (!formProps.name) {
    throw new Error('Form name is required');
  }

  const formRef = ref();
  const initialized = ref<boolean>(false);
  const changed = ref<boolean>(false);
  const initValues = ref<FormValue>({});
  const { metaConfig } = useForm(formProps as MContainer);
  const cloneMeta = () => {
    return cloneDeep(metaConfig || {})
  }
  const values = ref<FormValue>(cloneMeta());
  const changeRecords = shallowRef<FormValue>({});
  const fields = new Map<string, any>();

  const formState: FormState = reactive<FormState>({
    initValues: initValues.value,
    values: values.value,
    changedValues: changeRecords.value,
    config: formProps,
    setField: (id: string, field: any) => fields.set(id, field),
    getField: (id: string): any => fields.get(id),
    deleteField: (id: string) => fields.delete(id),
    getFieldValue: (id: string): any => {
      const field: any = fields.get(id);
      return field?.getValue();
    },
    setFieldValue: (id: string, val: any): void => {
      const field: any = fields.get(id);
      field?.setValue(val);
    },
    getFieldsValue: (): FormValue => {
      let formData = formRef.value?.getValues()
      if (formData) {
        if (formProps.name) {
          formData = {
            [formProps.name]: formData
          }
        }
      } else {
        formData = values.value
      }
      return formData
    },
    setFieldsValue: (formValue: FormValue) => values.value = merge(values.value, formValue),
    setChangeValue: (changeValue: ChangeRecord) => {
      changeRecords.value[changeValue.propPath!] = changeValue.value;
    },
    getChangedValue: (): FormValue => unflatten(changeRecords.value),
    validate: (name?: string | string[]): Promise<boolean> => {
      return formRef.value?.validate(name);
    },
    isModified: (): boolean => {
      return Object.keys(changeRecords.value).length > 0 || changed.value;
    },
    reset: () => {
      initFormValue(formState, {
        config: Array.isArray(formProps.config)? formProps.config: [formProps.config],
        formName: formProps.name!,
        initValues: initValues.value
      }).then((value: FormValue) => {
        values.value = value;
        useEmitter().dispatch(FORM_LIFE_CYCLE.INIT_VALUE, { values })
      });
      changeRecords.value = {}
      changed.value = false;
    },
    clear: () => {
      values.value = cloneMeta();
      changeRecords.value = {}
      changed.value = true;
    },
    getFieldDisabled: (id: string): boolean => {
      const field: any = fields.get(id);
      return field?.getDisabled();
    },
    setFieldDisabled: (id: string, disabled: boolean = true): void => {
      const field: any = fields.get(id);
      field?.setDisabled(disabled);
    },
    getFieldVisible: (id: string): boolean => {
      const field: any = fields.get(id);
      return field?.getVisible();
    },
    setFieldVisible: (id: string, visible: boolean = true): void => {
      const field: any = fields.get(id);
      field?.setVisible(visible);
    },
    getFieldRequired: (id: string): boolean => {
      const field: any = fields.get(id);
      return field?.getRequired();
    },
    setFieldRequired: (id: string, required: boolean = true): void => {
      const field: any = fields.get(id);
      field?.setRequired(required);
    },
  });

  watchEffect(async () => {
    formState.initValues = initValues.value;
    formState.values = values.value;
    if (typeof formProps.extendState === 'function') {
    const state = (await formProps.extendState(formState)) || {};
      Object.entries(state).forEach(([key, value]) => {
        formState[key] = value;
      });
    }
  })

  watch([
    () => formProps.config, 
    () => initValues.value
  ], ([config], [preConfig]) => {
    changeRecords.value = {};
    if (!isEqual(toRaw(config), toRaw(preConfig))) {
      initialized.value = false;
    }
    initFormValue(formState, {
      config: Array.isArray(config)? config: [config],
      formName: formProps.name!,
      initValues: initValues.value
    }).then((value) => {
      values.value = value;
      initialized.value = true;
      changed.value = false;
    })
  }, {
    immediate: true
  });

  provide(FORM_INJECT_KEY, formState);

  if (formProps.id === 'root_form') {
    const mPage = inject<PageState | null>(PAGE_INJECT_KEY);
    if (mPage) {
      mPage.setRootForm(formState);
    }
  }

  onMounted(() => {
    useEmitter().dispatch(FORM_LIFE_CYCLE.MOUNTED, formState)
  })
  onBeforeUnmount(() => {
    useEmitter().dispatch(FORM_LIFE_CYCLE.UNMOUNTED)
  })

  defineExpose({
    formState
  })
</script>
<style lang="scss">
</style>