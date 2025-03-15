import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts', // 类库入口文件
      name: 'TmagicVueRuntimeHelp', // 类库的全局变量名
      fileName: (format) => `tmagic-vue-runtime-help.${format}.js`, // 输出文件名
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        'typescript',
        '@tmagic/core',
        '@tmagic/stage',
        '@tmagic/schema',
        '@vue/composition-api'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {},
      },
    },
  },
});