<template>
    <component 
      v-if="Array.isArray(config)"
      v-for="(item, index) in config"
      :key="index"
      :is="useComponent({ componentType: item.type })"
      :data-tmagic-id="item.id"
      :data-tmagic-name="item.name"
      :class-name="item.className"
      :config="item.items"
      v-bind="item"
      :model="model || {}"
      :parent-name="parentName"
    ></component>
    <component
      v-else
      :is="useComponent({ componentType: config.type })"
      :data-tmagic-id="config.id"
      :data-tmagic-name="config.name"
      :class-name="config.className"
      :config="config.items"
      v-bind="config"
      :model="model || {}"
      :parent-name="parentName"
    ></component>
</template>

<script lang="ts" setup>
import { FormValue } from '../schame';
import { useComponent } from '@tmagic/vue-runtime-help';
defineProps<{
  config: any
  model?: FormValue
  parentName?: string
}>();

</script>