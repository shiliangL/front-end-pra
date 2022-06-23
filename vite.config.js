/*
 * @Author: shiliangL
 * @Date: 2022-06-20 09:19:49
 * @LastEditTime: 2022-06-20 09:32:10
 * @LastEditors: Do not edit
 * @Description:
 */
import { defineConfig } from 'vite';
const path = require('path');

export default defineConfig({
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variable.scss";', // 添加公共样式
      },
    },
  },
});
