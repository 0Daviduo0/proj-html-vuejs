<script>
// import { store } from '../store.js';

export default{
    name: "AppVipSection",
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

    <div class="JoinVip_container">

        <div class="VipText_container">

            <div class="bold_little_title blue_text">
                BECOME A VIP TONIGHT
            </div>

            <div class="big_title white_text">
                exclusive vip lounge
            </div>

        </div>

        <div class="VipButton red_button">
            JOIN THE CLUB
        </div>

    </div>
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

.JoinVip_container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-image: url(/images/avada-nightclub-vip-hero-new.jpg);
}

.VipButton{
    padding: 20px 40px;
    font-size: 20px;
    margin-left: 200px;
}

</style>
