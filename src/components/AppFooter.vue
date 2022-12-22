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

                <div class="infoBox avadaLogo">

                    <img src="/images/avada-nightclub-logo-2x-200x66.png" alt="">

                </div>

                <div class="infoBox contacts">

                    Avada Nightclub <br>
                    100 Night Club Blvd <br>
                    Beverly Hills <br>
                    <span class="blue_text">hi@yourdomain.com</span> <br>
                    +1 (555) 000 000


                </div>

                <div class="infoBox socials white_text">

                    <i class="fa-brands fa-facebook-f socialIcon"></i>
                    <i class="fa-brands fa-twitter socialIcon"></i>
                    <i class="fa-brands fa-instagram socialIcon"></i>
                    <i class="fa-brands fa-youtube socialIcon"></i>

                </div>

            </div>

            <div class="info_column venues">
                
                <div class="venues_text white_text">
                    VENUES
                </div>

                <div class="">
                    <img src="/images/avada-nightclub-footer-rooftop-400x171.jpg" alt="">
                </div>
               
                <div class="venue">
                    <img src="/images/avada-nightclub-footer-dancelounge-400x171.jpg" alt="">
                </div>
                
            </div>

        </div>

        <div class="copyright">

            © Copyright 2012 - 2021 | Avada Theme by <span class="blue_text">Theme Fusion</span> | All Rights Reserved | Powered by <span class="blue_text">WordPress</span>

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
    padding-top: 50px;
}

    .info{
        display: flex;
    }

        .info_column{
            display: flex;
            flex-direction: column;
            padding-right: 100px;
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
                    margin-bottom: 40px;
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

            .avada_info{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(3, 1fr);
                grid-column-gap: 0px;
                grid-row-gap: 0px;
            }

                .infoBox{
                    display: flex;
                    
                }

                    .avadaLogo{
                        width: 200px;
                        height: 66px;
                    }

                    .contacts{
                        flex-direction: column;
                        text-align: center;
                        color: rgba(255, 255, 255, 0.411);
                    }

                    .socials{
                        display: flex;
                        justify-content: space-around;
                    }

                        .socialIcon{
                            font-size: 20px;
                        }
                
            .venues{
                display: flex;
                flex-direction: column;
                text-align: center;
            }

                .venues_text{
                    height: 50px;
                    margin-bottom: 50px;
                }

                    .venue{
                        margin-top: 20px;
                    }

            .copyright{
                padding-top: 80px;
                color: rgba(255, 255, 255, 0.411);
            }

</style>
