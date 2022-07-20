import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
let dirname = path.resolve();

function _resolve(dir) {
  // const __dirname = path.resolve();
  return path.resolve(dirname, dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('./src'),
    },
  },
  plugins: [vue()],
  stylus: {
    imports: [path.resolve(dirname, '../src/assets/styles/mixins.styl')]
  }
})
