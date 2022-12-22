<script>
import { store } from '../store.js';

export default{
    name: "AppFooter",
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

    <footer>

        <div class="info">

            <div class="info_column events">

                <div class="events_text white_text">
                    EVENTS
                </div>

                <div class="event" v-for="event in store.eventsContent">

                    <img :src="event.eventImg" alt="">

                    <div class="eventInfo">

                        <div class="eventTitle bold_little_title blue_text">
                            {{ event.eventTitle }}
                        </div>

                        <div class="eventDate">
                            {{ event.eventDate }}
                        </div>

                    </div>

                </div>

                <div class="viewAll blue_text">

                    <a href=""> VIEW ALL EVENTS </a>

                </div>


            </div>

            <div class="info_column avada_info">

                <div class="infoBox avadaLogo">

                    <img :src="store.contactLogo" alt="">

                </div>

                <div class="infoBox contacts" v-for="info in store.contactsContent">

                    {{ info.name }} <br>
                    {{ info.adress }} <br>
                    {{ info.location }} <br>
                    <span class="blue_text">{{ info.email }}</span> <br>
                    {{ info.number }}


                </div>

                <div class="infoBox socials white_text">

                    <a v-for="social in store.contactsSocials" :href="social.link"> 
                        <i :class="social.icon"></i> 
                    </a>
                
                </div>

            </div>

            <div class="info_column venues">
                
                <div class="venues_text white_text">
                    VENUES
                </div>

                <div class="venue" v-for="venue in store.venuesContent">
                    <img :src="venue.venue" alt="">
                </div>
               
            </div>

        </div>

        <div class="copyright">

            © Copyright 2012 - 2021 | Avada Theme by <a href=""> <span class="blue_text">Theme Fusion</span> </a> | All Rights Reserved | Powered by <a href=""> <span class="blue_text">WordPress</span> </a> 

        </div>

    </footer>
  
</template>


<style lang="scss" scoped>
@use '../src/assets/style/general.scss' as *;
@use '../../src/assets/style/colorPalette.scss' as *;

a{
    text-decoration: none;
    color: inherit;
}

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
