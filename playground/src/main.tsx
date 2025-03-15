import { createApp, Suspense, nextTick } from 'vue'
import * as monaco from 'monaco-editor';
import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';
import CssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker';
import HtmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker';
import JsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker';
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker';

import editorPlugin from '@tmagic/editor';
import MagicElementPlusAdapter from '@tmagic/element-plus-adapter';

import App from './App.vue'

import 'element-plus/dist/index.css';
import '@tmagic/editor/dist/style.css';
import './style.css'

// @ts-ignore
globalThis.MonacoEnvironment = {
    getWorker(_: any, label: string) {
        if (label === 'json') {
            return new JsonWorker();
        }
        if (label === 'css' || label === 'scss' || label === 'less') {
            return new CssWorker();
        }
        if (label === 'html' || label === 'handlebars' || label === 'razor') {
            return new HtmlWorker();
        }
        if (label === 'typescript' || label === 'javascript') {
            return new TsWorker();
        }
        return new EditorWorker();
    },
};
  
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

const app = createApp({
    render: () => (
        <Suspense>
            {{
                default: () => <App />,
                fallback: () => <div 
                    v-loading={true}
                    element-loading-text="加载中..."
                    style={{
                        width: '100%',
                        height: '100%',
                    }}
                    ></div>
            }}
        </Suspense>
    )
});
app.use(editorPlugin, MagicElementPlusAdapter);
app.mount('#app');
