import { createApp } from 'vue';
import TMagicApp, { DataSourceManager, DeepObservedData } from '@tmagic/core';
import TmagicVantAdapter from 'vant-adapter';

import App from './App.vue';

import '@tmagic/core/resetcss.css';
import 'vant/lib/index.css';
import './index.css';

DataSourceManager.registerObservedData(DeepObservedData);

const vueApp = createApp(App);

const app = new TMagicApp({
  ua: window.navigator.userAgent,
  platform: 'editor',
});

if (app.env.isWeb) {
  app.setDesignWidth(window.document.documentElement.getBoundingClientRect().width);
}

// 扩展 Window 接口以包含 appInstance 属性
declare global {
  interface Window {
    appInstance: typeof app;
  }
}
window.appInstance = app;
vueApp.config.globalProperties.app = app;
vueApp.provide('app', app);
vueApp.use(TmagicVantAdapter);
vueApp.mount('#app');
