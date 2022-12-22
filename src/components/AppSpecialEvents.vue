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
        <div class="black_shading">

            <div class="bold_little_title red_text">
                SPECIAL EVENTS
            </div>

            <div class="big_title white_text">
                for your diary
            </div>

            <div class="events_grid">

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-6-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        Dj Fusion
                    </div>
                    <div class="event_date white_text">
                        August 19, 2021 @ 8:00am
                    </div>
                </div>

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-5-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        House Nation
                    </div>
                    <div class="event_date white_text">
                        August 19, 2021 @ 8:00am
                    </div>
                </div>

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-4-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        Jazz Night
                    </div>
                    <div class="event_date white_text">
                        August 19, 2021 @ 8:00am
                    </div>
                </div>

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-3-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        VIP Taster Sessions
                    </div>
                    <div class="event_date white_text">
                        September 20, 2021 @ 8:00am
                    </div>
                </div>

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-2-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        Funky House Rave
                    </div>
                    <div class="event_date white_text">
                        September 20, 2021 @ 8:00am
                    </div>
                </div>

                <div class="event">
                    <div class="event_img">
                        <img src="/images/avada-nightclub-events-1-400x225.jpg" alt="">
                    </div>
                    <div class="event_title bold_little_title red_text">
                        Urban Vibes
                    </div>
                    <div class="event_date white_text">
                        September 20, 2021 @ 8:00am
                    </div>
                </div>

            </div>

            <div class="events_button red_button">
                RSVP NOW
            </div>



        </div>
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
}

    .black_shading{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.63);
    }

        .events_grid{
            padding-top: 50px;
            width: 70%;
            height: 55%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-column-gap: 50px;
        }

            .event{
                width: 100%;
                height: 320px;
            }

                img{
                    width: 100%;
                    height: 100%;
                }
            
            .event_title{
                padding-left: 20px;
            }

            .event_date{
                padding-left: 20px;
                font-size: 15px;
            }

        .events_button{
            padding: 15px 30px;
            font-size: 20px;
            margin-top: 30px;
        }

</style>
