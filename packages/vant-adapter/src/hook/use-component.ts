import { ComponentInternalInstance, getCurrentInstance, inject, ref, watch } from 'vue-demi';
import { ComponentProps, ComponentState, PageState } from '../schame';
import { PAGE_INJECT_KEY } from '../utils/constant';

export function useComponent(config: ComponentProps<any>): {
  props: any,
  style: any,
  state: ComponentState
} {
  const mPage = inject<PageState | null>(PAGE_INJECT_KEY);
  const props = ref<any>(config.props);
  const style = ref<any>(config.style);
  const componentState: ComponentState = {
    instance: null,
    getProp: (prop: string) => {
      return props.value[prop]
    },
    setProp: (prop: string, value: any) => {
      props.value[prop] = value;
    },
    getStyle: (prop: string) => {
      return style.value[prop]
    },
    setStyle: (prop: string, value: any) => {
      style.value[prop] = value;
    },
  }
  if (config.id) {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    watch(
      () => instance?.proxy,
      (vm) => {
        if (vm) {
          componentState.instance = vm;
          mPage?.setComponent(config.id, componentState);
        } else {
          mPage?.deleteComponent(config.id);
        }
      },
      {
        immediate: true,
      },
    );
  };
  return {
    props: props || {},
    style: style || {},
    state: componentState
  }
}