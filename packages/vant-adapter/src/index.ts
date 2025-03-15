import type { App } from 'vue';
import { toLine } from '@tmagic/core';
import components from './components/compConfig';

export * from './components/propsConfig';
export * from './components/eventConfig';
export * from './components/valueConfig';
export * from './schame';

export default {
    install(app: App) {
        Object.entries(components).forEach(([key, value]) => {
            app.component(toLine(value.name || key), value);
        });
    }
}