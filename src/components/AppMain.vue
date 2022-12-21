<script>
// import { store } from '../store.js';

export default{
    name: "AppMain",
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

    <div class="welcome">

        <div class="welcomeTo">
            WELCOME TO AVANA
        </div>
        <h1 class="title">
            have the night of your life
        </h1>

        <div class="welcome_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quidem, praesentium tenetur porro vero nesciunt error quam soluta impedit iusto, nemo possimus sint sequi. .Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae inventore porro eaque nemo ex error veritatis voluptatem blanditiis nam unde atque sit recusandae, voluptatibus repellendus, dolor, iusto eius eligendi ab.
        </div>

        <div class="contentBlocks">

            <div class="feature feature_1">

            </div>
            <div class="feature feature_2">
                
            </div>
            <div class="feature feature_3">
                
            </div>
            <div class="feature feature_4">
                
            </div>
            
        </div>

    </div>

    <div class="spacing">

    </div>  
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

.spacing{
    background-color: #111015;
    height: 100px;
}

.welcome{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/images/avada-nightclub-cloud-background.jpg);
    background-size: cover;
    height: 1250px;
    padding-top: 150px;
}

.welcomeTo{
    color: $havelockBlue;
    font-size: 30px;
    font-weight: 700;
}

.title{
    font-size: 70px;
    color: $prim;
    padding-bottom: 20px;
}

.welcome_text{
    width: 1000px;
    text-align: center;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.411);
}

.contentBlocks{
    padding-top: 80px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
}

.feature{
    width: 600px;
    height: 400px;
}

.feature_1{
    background-image: url(/images/avada-nightclub-dancelounge-small.jpg);
    background-size: cover;
}
.feature_2{
    background-image: url(/images/avada-nightclub-rooftoplounge-small.jpg);
    background-size: cover;
}
.feature_3{
    background-image: url(/images/avada-nightclub-viplounge-small.jpg);
    background-size: cover;
}
.feature_4{
    background-image: url(/images/avada-nightclub-events-small.jpg);
    background-size: cover;
}

</style>
