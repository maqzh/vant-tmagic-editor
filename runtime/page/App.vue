<template>
  <Row :gutter="8">
    <Col span="6">
      <Button @click="handleInitValuesClick" type="success" size="normal" block>init</Button>
    </Col>
    <Col span="6">
      <Button @click="handleClearClick" type="primary" size="normal" block>clear</Button>
    </Col>
    <Col span="6">
      <Button @click="handleResetClick" type="warning" size="normal" block>reset</Button>
    </Col>
    <Col span="6">
      <Button type="danger" size="normal" block>empty</Button>
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
      <Button type="success" size="normal" block>empty</Button>
    </Col>
  </Row>
  <Row :gutter="8" style="margin-top: 8px;">
    <Col span="6">
      <Button @click="handleFormValueClick" type="success" size="normal" block>form values</Button>
    </Col>
    <Col span="6">
      <Button @click="handleFieldValueClick" type="warning" size="normal" block>field value</Button>
    </Col>
    <Col span="6">
      <Button @click="handleSetPropsClick" type="primary" size="normal" block>setProps</Button>
    </Col>
    <Col span="6">
      <Button type="danger" size="normal" block>empty</Button>
    </Col>
  </Row>
  <Divider></Divider>
  <component
    :is="pageComponent" 
    :config="(pageConfig as MPage)"
  >
  </component>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Row, Col, Button, Divider, showDialog } from 'vant';
import { useEmitter, PAGE_LIFE_CYCLE, FORM_LIFE_CYCLE } from 'emitter-help';
import type { MPage } from '@tmagic/core';
import { useComponent, useDsl } from '@tmagic/vue-runtime-help';

const { pageConfig } = useDsl();
const pageComponent = useComponent('page');

const page = ref<any>();
const form = ref<any>();

useEmitter().on(PAGE_LIFE_CYCLE.MOUNTED, (p: any) => {
  page.value = p;
})
useEmitter().on(FORM_LIFE_CYCLE.MOUNTED, (p: any) => {
  form.value = p;
})

const handleClearClick = () => {
  form.value?.clear()
};
const handleResetClick = () => {
  form.value?.reset()
};
const handleInitValuesClick = () => {
  form.value?.setFieldsValue({
    sqb: {
      dxk: '2',
      cb1: [0, 1],
      rl: '2025-03-27'
    }
  })
};
const handleFormValueClick = () => {
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
  page.value?.updateComponentProp('button_9b3419a7', 'type', 'warning')
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
