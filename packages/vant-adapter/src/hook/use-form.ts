import { MContainer } from "@tmagic/core"
import { getMetaValues } from '../utils/form'

export const useForm = (formConfig: MContainer) => {
  
  return {
    metaConfig: getMetaValues(formConfig)
  }
}