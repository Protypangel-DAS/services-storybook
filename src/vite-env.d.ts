/// <reference types="vite/client" />

declare module '@ui/*' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
