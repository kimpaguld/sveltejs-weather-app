import App from "./App.svelte"

const app = new App({
  target: document.body,
  props: {
    savedCities: []
  }
})

export default app
