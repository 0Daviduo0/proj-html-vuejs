<script>
// import { store } from '../store.js';

export default{
    name: "AppFooter",
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

    <footer>

        <div class="info">

            <div class="info_column events">

                <div class="events_text white_text">
                    EVENTS
                </div>

                <div class="event">

                    <img src="/images/avada-nightclub-events-6-66x66.jpg" alt="">

                    <div class="eventInfo">

                        <div class="eventTitle bold_little_title blue_text">
                            Dj Fusion
                        </div>

                        <div class="eventDate">
                            August 19, 2021 @ 8:00am
                        </div>

                    </div>

                </div>

                <div class="event">

                    <img src="/images/avada-nightclub-events-5-66x66.jpg" alt="">

                    <div class="eventInfo">

                        <div class="eventTitle bold_little_title blue_text">
                            House Nation
                        </div>

                        <div class="eventDate">
                            August 19, 2021 @ 8:00am
                        </div>

                    </div>

                </div>

                <div class="event">

                    <img src="/images/avada-nightclub-events-4-66x66.jpg" alt="">

                    <div class="eventInfo">

                        <div class="eventTitle bold_little_title blue_text">
                            Jazz Night
                        </div>

                        <div class="eventDate">
                            August 19, 2021 @ 8:00am
                        </div>

                    </div>

                </div>

                <div class="viewAll blue_text">

                    VIEW ALL EVENTS

                </div>


            </div>

            <div class="info_column avada_info">

            </div>

            <div class="info_column venues">

            </div>

        </div>

        <div class="copyright">

        </div>

    </footer>
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    background-image: url(/images/avada-nightclub-footer-background-final-2.jpg);
    background-size: 100%;
    background-position: 0 -2500px;
    background-repeat: no-repeat;
}

    .info{
        display: flex;
    }

        .info_column{
            display: flex;
            flex-direction: column;
        }

            .events{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(5, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
                text-align: center;
            }

                .event{
                    display: flex;
                    margin-bottom: 20px;
                }

                    .eventInfo{
                        display: flex;
                        flex-direction: column;
                        padding-left: 10px;
                    }

                    .eventDate{
                        padding-top: 10px;
                        color: rgba(255, 255, 255, 0.411);
                    }

                .viewAll{
                    padding-top: 20px;
                    font-size: 15px;
                }

</style>
