import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      outDir: path.resolve(__dirname, './types'),
      insertTypesEntry: true,
      copyDtsFiles: true
    })
  ],
  define: {
    globalThis: 'window',
    'global': 'window'
  },
  build: {
    lib: {
      entry: 'src/index.ts', // 类库入口文件
      name: 'TmagicVantAdapter', // 类库的全局变量名
      fileName: (format) => `tmagic-vant-adapter.${format}.js`, // 输出文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'vant',
        'vue',
        '@tmagic/core',
        '@tmagic/vue-runtime-help',
        'lodash-es'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^vue-runtime-help$/,
        replacement: path.resolve(__dirname, '../vue-runtime-help/src/index.ts') // 替换为项目根目录下的 src 目录
      }
    ],
    extensions: ['.ts', '.js', '.vue', '.json'],
  }
});