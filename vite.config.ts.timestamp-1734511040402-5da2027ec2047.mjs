// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/jiayi/Desktop/%E9%80%9A%E7%94%A8/AntdFormModal/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/jiayi/Desktop/%E9%80%9A%E7%94%A8/AntdFormModal/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///Users/jiayi/Desktop/%E9%80%9A%E7%94%A8/AntdFormModal/node_modules/vite-plugin-dts/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "/Users/jiayi/Desktop/\u901A\u7528/AntdFormModal";
var __vite_injected_original_import_meta_url = "file:///Users/jiayi/Desktop/%E9%80%9A%E7%94%A8/AntdFormModal/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["./packages/**/*.{vue,ts}"],
      tsconfigPath: "tsconfig.app.json",
      rollupTypes: true
    })
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__vite_injected_original_dirname, "packages/antd-form-modal/index.ts"),
      name: "antd-form-modal",
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamlheWkvRGVza3RvcC9cdTkwMUFcdTc1MjgvQW50ZEZvcm1Nb2RhbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2ppYXlpL0Rlc2t0b3AvXHU5MDFBXHU3NTI4L0FudGRGb3JtTW9kYWwvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2ppYXlpL0Rlc2t0b3AvJUU5JTgwJTlBJUU3JTk0JUE4L0FudGRGb3JtTW9kYWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCB2dWUgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXZ1ZVwiO1xuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKCksXG5cbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogW1wiLi9wYWNrYWdlcy8qKi8qLnt2dWUsdHN9XCJdLFxuICAgICAgdHNjb25maWdQYXRoOiBcInRzY29uZmlnLmFwcC5qc29uXCIsXG4gICAgICByb2xsdXBUeXBlczogdHJ1ZSxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IHRydWUsXG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJwYWNrYWdlcy9hbnRkLWZvcm0tbW9kYWwvaW5kZXgudHNcIiksXG4gICAgICBuYW1lOiBcImFudGQtZm9ybS1tb2RhbFwiLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBpbmRleC4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBnbG9iYWxzOiB7XG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlULFNBQVMsZUFBZSxXQUFXO0FBRXBWLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBTGpCLElBQU0sbUNBQW1DO0FBQXlJLElBQU0sMkNBQTJDO0FBT25PLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUVKLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQywwQkFBMEI7QUFBQSxNQUNwQyxjQUFjO0FBQUEsTUFDZCxhQUFhO0FBQUEsSUFDZixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBLElBQ1gsS0FBSztBQUFBLE1BQ0gsT0FBTyxLQUFLLFFBQVEsa0NBQVcsbUNBQW1DO0FBQUEsTUFDbEUsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUyxNQUFNO0FBQUEsSUFDdkM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
