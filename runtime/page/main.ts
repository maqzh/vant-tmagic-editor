import { createApp } from 'vue';

import TMagicApp, { DataSourceManager, DeepObservedData, getUrlParam, registerDataSourceOnDemand } from '@tmagic/core';
import { getConfig } from './utils';
import request, { service } from './utils/request';
import datasources from './plugins/data-source';
import TmagicVantAdapter from 'vant-adapter';
import AppComponent from './App.vue';

import '@tmagic/core/resetcss.css';
import 'vant/lib/index.css';
import './index.css';

DataSourceManager.registerObservedData(DeepObservedData);

const vueApp = createApp(AppComponent);
vueApp.use(request);
vueApp.use(TmagicVantAdapter);

const init = () => {
  getConfig().then((res: any) => {
    const dsl = eval(`(${res.content || {}})`);
    const app = new TMagicApp({
      ua: window.navigator.userAgent,
      config: dsl,
      request: service,
      curPage: getUrlParam('page'),
      useMock: Boolean(getUrlParam('useMock')),
    });
    app.setDesignWidth(app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375);
    
    registerDataSourceOnDemand(dsl, datasources).then((dataSources) => {
      Object.entries(dataSources).forEach(([type, ds]: [string, any]) => {
        DataSourceManager.register(type, ds);
      });
    
      vueApp.config.globalProperties.app = app;
      vueApp.provide('app', app);
    
      vueApp.mount('#app');
    });
  });
}

init();
