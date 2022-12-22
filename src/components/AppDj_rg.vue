<script>
// import { store } from '../store.js';

export default{
    name: "AppDj_rg",
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

    <div class="resident_and_guests">

        <div class="rg_wrapper resident">

            <div class="dj_type red_text">
                RESIDENT DJ
            </div>

            <div class="dj_name">
                dj avada
            </div>

            <div class="profile_button blue_button">
                VIEW PROFILE
            </div>

        </div>

        <div class="rg_wrapper guest">

            <div class="dj_type blue_text">
                SPECIAL GUEST DJ
            </div>

            <div class="dj_name">
                dj blondie
            </div>

            <div class="profile_button red_button">
                VIEW PROFILE
            </div>

        </div>

    </div>
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

.resident_and_guests{
    display: flex;
    
}

    .rg_wrapper{
        width: 50%;
        height: 650px;
        background-size: 100%;
        background-repeat: no-repeat;
        padding: 50px;
    }

        .resident{
            background-image: url(/images/avada-nightclub-resident-profile.jpg);
            background-position: 0px -500px;
            border-top: 5px solid $violetRed;
        }

        .guest{
            background-image: url(/images/avada-nightclub-lisahouse-inset-new.jpg);
            background-position: 0px -20px;
            border-top: 5px solid $havelockBlue;
        }

            .dj_type{
                padding-bottom: 10px;
                font-size: 20px;
                font-weight: 700;
            }

            .dj_name{
                padding-bottom: 30px;
                font-size: 80px;
                color: $prim;
            }

            .profile_button{
                padding: 10px 0px;
                text-align: center;
                width: 160px;
            }

</style>
