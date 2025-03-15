<template>
  <Row :gutter="8">
    <Col span="6">
      <Button @click="handleClearClick" type="primary" size="normal" block>clear</Button>
    </Col>
    <Col span="6">
      <Button @click="handleResetClick" type="success" size="normal" block>init</Button>
    </Col>
    <Col span="6">
      <Button @click="handleSetDataClick" type="warning" size="normal" block>setValues</Button>
    </Col>
    <Col span="6">
      <Button @click="handleGetDataClick" type="danger" size="normal" block>getValues</Button>
    </Col>
  </Row>
  <Row :gutter="8" style="margin-top: 8px;">
    <Col span="6">
      <Button @click="handleGetFieldClick" type="primary" size="normal" block>getField</Button>
    </Col>
    <Col span="6">
      <Button @click="handleSetFieldClick" type="success" size="normal" block>setField</Button>
    </Col>
    <Col span="6">
      <Button @click="handleDisabledClick" type="warning" size="normal" block>disabled</Button>
    </Col>
    <Col span="6">
      <Button @click="handleVisibleClick" type="danger" size="normal" block>visible</Button>
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

import type { MPage } from '@tmagic/core';
import { useComponent, useDsl } from '@tmagic/vue-runtime-help';

const { pageConfig } = useDsl();
const pageComponent = useComponent('page');
const form = ref<any>();
const onInitValue = (f: any) => {
  form.value = f;
}

const handleClearClick = () => {
  form.value?.clear()
};

const handleResetClick = () => {
  form.value?.reset()
};
const handleSetDataClick = () => {
  form.value?.setFieldsValue({
    sqb: {
      dxk: '1',
      lx: 'b'
    }
  })
};
const handleGetDataClick = () => {
  form.value?.validate().then(() => {
    showDialog({
      title: '提示',
      message: JSON.stringify(form.value?.getFieldsValue() || {})
    })
  })
}
const handleGetFieldClick = () => {
  console.log(form.value?.getFieldValue('radio-field_63fe72f5'))
}
const handleSetFieldClick = () => {
  form.value?.setFieldValue('radio-field_63fe72f5', '1')
}
const handleDisabledClick = () => {
  form.value?.setFieldDisabled('radio-field_63fe72f5', true)
  console.log(form.value?.getFieldDisabled('radio-field_63fe72f5'))
}
const handleVisibleClick = () => {
  form.value?.setFieldVisible('radio-field_63fe72f5', false)
  console.log(form.value?.getFieldVisible('radio-field_63fe72f5'))
}
</script>
