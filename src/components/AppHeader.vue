<script>
// import { store } from '../store.js';

export default{
    name: "AppHeader",
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

    <header>
        
        <div class="sx">

            <nav>
                <ul>
                    <li class="selected">
                        HOME
                    </li>
                    <li>
                        THE CLUB
                    </li>
                    <li>
                        EVENTS
                    </li>
                    <li>
                        <img src="../../public/images/avada-nightclub-logo-2x-300x99.png" alt="">
                    </li>
                    <li>
                        JOBS
                    </li>
                    <li>
                        NEWS
                    </li>
                    <li>
                        CONTACT US
                    </li>
                </ul>
            </nav>

            <div class="jumbo">
                <img src="/images/avada-nightclub-homepage-image.png" alt="">
            </div>

            <div class="header_text_under_img">
                making memories all night long

                <div class="vipButton">
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

header{
    display: flex;
    width: 100%;
    height: 1285px;
    background-image: url(/images/avada-nightclub-home-hero.jpg);
    background-size: contain;
    background-repeat: no-repeat;

    .sx{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    ul{
        color: $prim;
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
        color: $prim;
        padding: 50px 100px;
        background-color: rgba(0, 0, 0, 0.493);
        position: relative;
        font-weight: 700;
    }

    .vipButton{
        position: absolute;
        color: $prim;
        font-size: 20px;
        top: 100%;  
        left: 50%; 
        transform: translate(-50%, -50%);
        padding: 10px 20px;
        background-color: $violetRed;
    }

    .clubVideo{
        padding-top: 70px;
    }

    .dx{
        width: 80px;
        display: flex;
        flex-direction: column;
        margin-top: 200px;
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
