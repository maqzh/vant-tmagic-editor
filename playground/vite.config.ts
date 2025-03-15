import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    vueJsx(),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis',
      },
    },
  },
  server: {
    host: '0.0.0.0', // 监听所有网络接口，包括本地网络和远程网络
    port: 8060, // 自定义端口号
    strictPort: true, // 端口被占用时，尝试下一个可用端口
    proxy: {
      '^/vant-adapter/runtime': {
        target: 'http://127.0.0.1:8061',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/vant-adapter\/runtime/, '')
        }
      },
      '^/mock-server': {
        target: 'http://127.0.0.1:8062',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/mock-server/, '')
        }
      }
    }
  },
  resolve: {
    alias: [
      {
        find: /^vant-adapter$/, replacement: path.resolve(__dirname, '../packages/vant-adapter/src/index.ts')
      }
    ]
  }
})
