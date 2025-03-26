<template>
    <Steps 
        v-bind="props"
        v-model:active="active"
        :style="style"
        :class="`magic-ui-steps ${className || ''}`"
    >
        <slot>
            <Container 
                :config="items" 
                :model="model || {}"
                :parent-name="parentName" />
        </slot>
    </Steps>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Steps } from 'vant'
import Container from '../Container.vue'
import { StepsConfig, StepConfig } from '../../schame'
import { useComponent } from '../../hook'

defineOptions({
    name: 'MagicUiSteps'
})

const config = defineProps<StepsConfig>()

const active = ref<number | string>(config.props.active || 0)

const items = ref<StepConfig[]>(config.items || [])

const {props, style} = useComponent(config)

defineExpose({
    setActive: (step: number | string) => {
        active.value = step
    },
    setSteps: (steps: {
        title: string,
        desc?: string,
        titleTag?: string,
        descTag?: boolean,
    }[]) => {
        items.value = steps.map(step => {
            return {
                id: Math.random().toString(36).substring(2),
                name: `step${Math.random().toString(36).substring(2)}`,
                type: 'step',
                noField: true,
                parentName: config.parentName,
                item: [],
                props: {
                    title: step.title,
                    desc: step.desc,
                    titleTag: step.titleTag,
                    descTag: step.descTag,
                },
                style: {}
            } as unknown as StepConfig
        })
    },
})
</script>

<style lang="scss">

</style>