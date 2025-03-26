<template>
  <Row :gutter="8">
    <Col span="6">
      <Button @click="handleClearClick" type="primary" size="normal" block>clear</Button>
    </Col>
    <Col span="6">
      <Button @click="handleResetClick" type="success" size="normal" block>init</Button>
    </Col>
    <Col span="6">
      <Button @click="handleFormValueClick" type="warning" size="normal" block>form values</Button>
    </Col>
    <Col span="6">
      <Button @click="handleFieldValueClick" type="danger" size="normal" block>field value</Button>
    </Col>
  </Row>
  <Row :gutter="8" style="margin-top: 8px;">
    <Col span="6">
      <Button @click="handleDisabledClick" type="warning" size="normal" block>disabled</Button>
    </Col>
    <Col span="6">
      <Button @click="handleVisibleClick" type="danger" size="normal" block>visible</Button>
    </Col>
    <Col span="6">
      <Button @click="handleRequiredClick" type="primary" size="normal" block>required</Button>
    </Col>
    <Col span="6">
      <Button @click="handleSetPropsClick" type="success" size="normal" block>setProps</Button>
    </Col>
  </Row>
  <Divider></Divider>
  <component
    :is="pageComponent" 
    :config="(pageConfig as MPage)"
    :on-init-value="onInitValue"
  >
  </component>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Row, Col, Button, Divider, showDialog } from 'vant';
import { useEmitter } from 'emitter-help';
import type { MPage } from '@tmagic/core';
import { useComponent, useDsl } from '@tmagic/vue-runtime-help';

const { pageConfig } = useDsl();
const pageComponent = useComponent('page');

const page = ref<any>();
const form = ref<any>();
const onInitValue = (f: any) => {
  form.value = f;
}

useEmitter().on('pageMounted', (p: any) => {
  page.value = p;
})

const handleClearClick = () => {
  form.value?.clear()
};

const handleResetClick = () => {
  form.value?.reset()
};
const handleFormValueClick = () => {
  // form.value?.setFieldsValue({
  //   sqb: {
  //     dxk: '1',
  //     lx: 'b'
  //   }
  // })
  form.value?.validate().then(() => {
    showDialog({
      title: '表单数据提示',
      message: JSON.stringify(form.value?.getFieldsValue() || {})
    })
  })
};
const handleFieldValueClick = () => {
  form.value?.setFieldValue('radio-field_63fe72f5', '1')
  form.value?.validate().then(() => {
    showDialog({
      title: '字段内容提示',
      message: form.value?.getFieldValue('radio-field_63fe72f5')
    })
  })
}
const handleSetPropsClick = () => {
  page.value?.updateComponentProp('tabs_ef637b80', 'active', 'tabf')
}
const disabled = ref<boolean>(false)
const handleDisabledClick = () => {
  disabled.value = !disabled.value
  form.value?.setFieldDisabled('radio-field_63fe72f5', disabled.value)
  console.log(form.value?.getFieldDisabled('radio-field_63fe72f5'))
}
const visible = ref<boolean>(true)
const handleVisibleClick = () => {
  visible.value = !visible.value
  form.value?.setFieldVisible('radio-field_63fe72f5', visible.value)
  console.log(form.value?.getFieldVisible('radio-field_63fe72f5'))
}
const required = ref<boolean>(false)
const handleRequiredClick = () => {
  required.value = !required.value
  form.value?.setFieldRequired('radio-field_63fe72f5', required.value)
  console.log(form.value?.getFieldRequired('radio-field_63fe72f5'))
}
</script>
