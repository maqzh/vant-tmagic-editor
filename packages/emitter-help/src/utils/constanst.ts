export const DISPATCH = 'dispatch'
export const BROADCAST = 'broadcast'

/**
 * 页面生命周期
 */
export enum PAGE_LIFE_CYCLE {
    /**
     * 页面挂载完成
     */
    MOUNTED = 'pageMounted',
    /**
     * 页面卸载
     */
    UNMOUNTED = 'pageUnmounted'
}

/**
 * 表单生命周期
 */
export enum FORM_LIFE_CYCLE {
    /**
     * 表单挂载完成
     */
    MOUNTED = 'formMounted',
    /**
     * 表单卸载
     */
    UNMOUNTED = 'formUnmounted',
    /**
     * 表单初始化
     */
    INIT_VALUE = 'formInitValues'
};