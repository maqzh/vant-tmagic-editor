import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    globalThis: 'window',
    'global': 'window'
  },
  resolve: {
    alias: [
      {
        find: /^vant-adapter$/, replacement: path.resolve(__dirname, '../packages/vant-adapter/src/index.ts')
      }
    ]
  },
  build: {
    rollupOptions: {
      input: {
        playground: path.resolve(__dirname, './playground/index.html'),
        page: path.resolve(__dirname, './page/index.html')
      }
    }
  },
  server: {
    host: '0.0.0.0', // 监听所有网络接口，包括本地网络和远程网络
    port: 8061, // 自定义端口号
    strictPort: true, // 端口被占用时，尝试下一个可用端口
    proxy: {
      '^/mock-server': {
        target: 'http://127.0.0.1:8062',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/mock-server/, '')
        }
      }
    }
  }
})
