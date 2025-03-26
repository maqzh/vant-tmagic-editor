import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    dts({
      outDir: path.resolve(__dirname, './types'),
      insertTypesEntry: true,
      copyDtsFiles: true
    })
  ], // 使用 dts 插件来生成类型声明文件 (.d.ts)
  build: {
    lib: {
      entry: 'src/index.js', // 入口文件
      name: 'TmagicEmitterHelp', // 库的名字，在 UMD 构建时使用
      fileName: (format) => `tmagic-emitter-help.${format}.js`, // 输出文件名格式
      formats: ['es', 'umd'] // 支持的格式：ES Module (for bundlers) 和 UMD (for script tags)
    },
    rollupOptions: {
      // 确保外部化那些你的库依赖的包模块，这样库的用户可以 bundle 他们自己的依赖而不是和库一起重复打包。
      external: ['vue'], // 根据需要添加外部依赖
      output: {
        // 在 UMD 构建的情况下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
});