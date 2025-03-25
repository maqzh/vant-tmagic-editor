import { ComponentInternalInstance, getCurrentInstance, inject, watch } from "vue-demi";
import { ComponentProps, FormState } from "../schame";
import { FORM_INJECT_KEY } from '../utils/constant';

export function useComponent(props: ComponentProps<any>) {
  const mForm = inject<FormState | null>(FORM_INJECT_KEY);
  if (!props.id) return;
  const instance = getCurrentInstance() as ComponentInternalInstance;
  watch(
    () => instance?.proxy,
    (vm) => {
      if (vm) {
        mForm?.setField(props.id, vm);
      } else {
        mForm?.deleteField(props.id);
      }
    },
    {
      immediate: true,
    },
  );
}