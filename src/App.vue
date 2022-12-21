<script>
import AppHeader from './components/AppHeader.vue'
import AppMainSection1 from './components/AppMainSection1.vue'
import AppFooter from './components/AppFooter.vue'

import { store } from './store.js';


export default {
  name: "App",
  components: {
    AppHeader,
    AppMainSection1,
    AppFooter,
},
  data() {
    return {
      store,
    }
  },
}

</script>


<template>

  <AppHeader/>

  <AppMainSection1/>

  <AppFooter/>

</template>


<style lang="scss" scoped>

@use '../src/assets/style/general.scss' as *;

</style>
