import { MPage } from "@tmagic/core"

export const useForm = (pageConfig: MPage) => {
    const metaConfig: any = {}
    const toggle = (items: any[], parentNode: any = {}) => {
        if (items) {
            items.forEach((item: any) => {
                if (item.name) {
                    parentNode[item.name] = parentNode[item.name] || (item.items && item.items.length > 0 ? {}: '')
                    toggle(item.items, metaConfig[item.name])
                }
            })
        }
    }
    toggle(pageConfig.items, metaConfig)
    return {
        metaConfig   
    }
}