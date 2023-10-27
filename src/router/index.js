import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/views/home-page/Main.vue';
import AboutTTL from '/src/views/about-page/Main.vue';
import Contact from '/src/views/contactus-page/Main.vue';
import Membership from '/src/views/memberships-page/Main.vue';
import OurArtists from '/src/views/ourartists-page/Main.vue';
import DigitalDistribution from '/src/views/digitaldistribution-page/Main.vue';

const routes = [
  { path: '/', 
    name: 'home',
  component: Home
  },
  { path: '/about',
    name: 'about',
    component: AboutTTL
  },
  { path: '/contact',
    name:'contact',
    component: Contact
  },
  { path: '/membership',
    name: 'membership',
    component: Membership
  },
  { path: '/artists',
    name: 'artists',
    component: OurArtists
  },
  { path: '/distribution',
    name: 'distribution',
    component: DigitalDistribution
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
