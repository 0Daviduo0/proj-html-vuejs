<script>
// import { store } from '../store.js';

export default{
    name: "AppWelcome",
    components: {

    },
    data() {
        return {
            // store,
        }
    },
}

</script>


<template>

    <div class="specialEvents_container">

        div.

    </div>
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

.specialEvents_container{
    display: flex;
    justify-content: center;
    height: 1400px;
    background-image: url(/images/avada-nightclub-homepage-events-background-new.jpg);
    background-size: 140%;
    background-repeat: no-repeat;
    background-position: -400px;
    filter: brightness(0.5);
}

</style>
