import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import electronRenderer from "vite-plugin-electron-renderer";
export default defineConfig({
  plugins: [
    vue(),
    electron({
      entry: "electron/index.js", // 主进程文件
    }),
    electronRenderer(),
  ],
  build: {
    emptyOutDir: false, // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录
  },
  base: "./", // 加入这行就可以了
});
