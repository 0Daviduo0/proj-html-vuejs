<script>
import { store } from '../store.js';

export default{
    name: "AppHeader",
    components: {

    },
    data() {
        return {
            store,
        }
    },
}

</script>


<template>

    <header>
        
        <div class="sx">

            <nav>
                <ul class="white_text">
                    <li v-for="navItem in store.navContent" :class="navItem.class">
                        <a href=""> {{ navItem.navName }}</a>
                        <img :src="navItem.src" alt="">
                    </li>
                    
                </ul>
            </nav>

            <div class="jumbo">
                <img src="/images/avada-nightclub-homepage-image.png" alt="">
            </div>

            <div class="header_text_under_img white_text">
                making memories all night long

                <div class="vipButton red_button">
                BECOME A VIP
                </div>

            </div>

            <div class="clubVideo">
                <img src="/images/avada-nightclub-play-showreel-400x95.png" alt="">
            </div>

            

        </div>

        <div class="dx">

            <div class="block">

                <i class="fa-solid fa-images demos_img"></i>
                <div class="first_block_text">
                    Demos
                </div>

            </div>
            <div class="block">
                
                <div class="price_block">
                    <div class="dollar">
                        $
                    </div>
                    <div class="number">
                        39
                    </div>
                </div>
                <div class="onSale">
                    On sale
                </div>

            </div>

        </div>
        
    </header>
  
</template>


<style lang="scss" scoped>

@use '../../src/assets/style/colorPalette.scss' as *;

a{
    text-decoration: none;
    color: inherit;
}

header{
    display: flex;
    width: 100%;
    height: 1285px;
    background-image: url(/images/avada-nightclub-home-hero.jpg);
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;

    .sx{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul{
        display: flex;
        align-items: center;

        li{
            display: inline;
            margin-right: 80px;
            margin-top: 30px;
            padding-bottom: 10px;
            font-weight: 600;
        }

        .selected{
            border-bottom: 3px solid $violetRed;
            color: $violetRed;
        }

        
    }

    .jumbo{
        img{
            width: 100%;
            height: 100%;
        }
        padding-top: 150px;
        width: 1200px;
    }

    .header_text_under_img{
        border-top: $havelockBlue 5px solid;
        font-size: 50px;
        padding: 50px 100px;
        background-color: rgba(0, 0, 0, 0.493);
        position: relative;
        font-weight: 700;
    }

    .vipButton{
        position: absolute;
        font-size: 20px;
        top: 100%;  
        left: 50%; 
        transform: translate(-50%, -50%);
        padding: 10px 20px;
    }

    .clubVideo{
        padding-top: 70px;
    }

    .dx{
        width: 80px;
        display: flex;
        flex-direction: column;
        margin-top: 200px;
        position: absolute;
        right: 0;
    }

    .block{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 5px;
        
    }
    
    .demos_img{
        font-size: 25px;
        color: $jacksonsPurple;
        padding-bottom: 5px;
    }

    .first_block_text{
        font-size: 12px;
    }

    .price_block{
        display: flex;
    }

    .dollar{
        color: rgb(65, 185, 41);
    }

    .number{
        color: rgb(65, 185, 41);
        font-size: 25px;
    }
}

</style>
