import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base:'/vueGamework/',
  plugins: [vue()],
  // 配置选项
  publicDir:'public',
  // 路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  }
})
