import type { App } from 'vue';
import { toLine } from '@tmagic/core';

const externals = ['./components/temp/index.ts']

const components: Record<string, any> = {}
const propsConfig: Record<string, any> = {}
const eventConfig: Record<string, any> = {}
const valueConfig: Record<string, any> = {}
// @ts-ignore
const modules = import.meta.glob('./components/**/index.ts', { eager: true })
for (const key in modules) {
    if (externals.includes(key)) continue;
    const module = modules[key]
    const name = module.default.name.replace(/^MagicUi/, '')
    components[name] = module.default
    propsConfig[name] = module.config
    eventConfig[name] = module.event
    valueConfig[name] = module.value
}
export { propsConfig, eventConfig, valueConfig };

export default {
    install(app: App) {
        Object.entries(components).forEach(([key, value]) => {
            app.component(toLine(value.name || key), value);
        });
    }
}