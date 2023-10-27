import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { faLocationDot, faPhone, faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'

library.add(faTwitter, faFacebook, faInstagram, faLocationDot, faPhone, faEnvelope, faAddressCard)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
