<script>
// import { store } from '../store.js';

export default{
    name: "AppMainSection1",
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

                <div class="featureText">
                    dance lounge
                </div>
                
                <div class="coloredBar coloredBar_1">
                    
                </div>

            </div>
            <div class="feature feature_2">

                <div class="featureText">
                    rooftop bar
                </div>

                <div class="coloredBar coloredBar_2">
                    
                </div>
                
            </div>
            <div class="feature feature_3">

                <div class="featureText">
                    vip lounge
                </div>

                <div class="coloredBar coloredBar_3">
                    
                </div>
                
            </div>
            <div class="feature feature_4">

                <div class="featureText">
                    resident dj
                </div>

                <div class="coloredBar coloredBar_4">

                </div>
                
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
    background-color: #0f0e13;
    height: 200px;
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
    display: flex;
    padding-left: 20px;
    align-items: flex-end;
    color: $prim;
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 50px;
}

.featureText{
    width: fit-content;
    white-space: nowrap;
}

.coloredBar{
    width: 100%;
    height: 20px;
    margin-left: 10px;
}

.feature_1{
    background-image: url(/images/avada-nightclub-dancelounge-small.jpg);
    background-size: cover;
}

    .coloredBar_1{
        border-top: 1px solid $havelockBlue;
    }

.feature_2{
    background-image: url(/images/avada-nightclub-rooftoplounge-small.jpg);
    background-size: cover;
}

    .coloredBar_2{
        border-top: 1px solid $violetRed;
    }
.feature_3{
    background-image: url(/images/avada-nightclub-viplounge-small.jpg);
    background-size: cover;
}

    .coloredBar_3{
        border-top: 1px solid $sepiaSkin;
    }
.feature_4{
    background-image: url(/images/avada-nightclub-events-small.jpg);
    background-size: cover;
}

    .coloredBar_4{
        border-top: 1px solid $violetRed;
    }

</style>
