<script>
import AppHeader from './components/AppHeader.vue'
import AppWelcome from './components/AppWelcome.vue'
import AppDj_rg from './components/AppDj_rg.vue'
import AppSpecialEvents from './components/AppSpecialEvents.vue'
import AppFooter from './components/AppFooter.vue'

import { store } from './store.js';


export default {
  name: "App",
  components: {
    AppHeader,
    AppWelcome,
    AppDj_rg,
    AppSpecialEvents,
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

  <AppWelcome/>
  <AppDj_rg/>
  <AppSpecialEvents/>

  <AppFooter/>

</template>


<style lang="scss" scoped>

@use '../src/assets/style/general.scss' as *;

</style>
