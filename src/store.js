import { reactive } from 'vue'   //importa "reactive" già presente in vue

export const store = reactive({
    // Header
    navContent: [
        {
            class: 'selected',
            navName: 'HOME',
            src: ''
        },
        {
            class: 'notSelected',
            navName: 'THE CLUB',
            src: ''
        },
        {
            class: 'notSelected',
            navName: 'EVENTS',
            src: ''
        },
        {
            class: 'notSelected',
            navName: '',
            src: '../../public/images/avada-nightclub-logo-2x-300x99.png'
        },
        {
            class: 'notSelected',
            navName: 'JOBS',
            src: ''
        },
        {
            class: 'notSelected',
            navName: 'NEWS',
            src: ''
        },
        {
            class: 'notSelected',
            navName: 'CONTACT US',
            src: ''
        },
    ],

    // Footer
    eventsContent: [
        {
            eventImg: '/images/avada-nightclub-events-6-66x66.jpg',
            eventTitle: 'Dj Fusion',
            eventDate: 'August 19, 2021 @ 8:00am',

        },
        {
            eventImg: '/images/avada-nightclub-events-5-66x66.jpg',
            eventTitle: 'House Nation',
            eventDate: 'August 19, 2021 @ 8:00am',

        },
        {
            eventImg: '/images/avada-nightclub-events-4-66x66.jpg',
            eventTitle: 'Jazz Night',
            eventDate: 'August 19, 2021 @ 8:00am',

        },
    ],

    contactLogo: '/images/avada-nightclub-logo-2x-200x66.png',

    contactsContent: [
        {
            name: 'Avada Nightclub',
            adress: '100 Night Club Blvd ',
            location: 'Beverly Hills ',
            email: 'hi@yourdomain.com',
            number: '+1 (555) 000 000 ',
        }
    ],

    contactsSocials: [
        {
            link: 'facebook.com',
            icon: 'fa-brands fa-facebook-f socialIcon',
        },
        {
            link: 'twitter.com',
            icon: 'fa-brands fa-twitter socialIcon',
        },
        {
            link: 'instagram.com',
            icon: 'fa-brands fa-instagram socialIcon',
        },
        {
            link: 'youtube.com',
            icon: 'fa-brands fa-youtube socialIcon',
        },
    ],

    venuesContent: [
        {
            venue: '/images/avada-nightclub-footer-rooftop-400x171.jpg',
        },
        {
            venue: '/images/avada-nightclub-footer-dancelounge-400x171.jpg',
        },
    ]

});
