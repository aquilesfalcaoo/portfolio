import { createApp } from "vue";
import App from "./App.vue";
import './assets/base.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).mount("#app");
ScrollReveal().reveal('.tagline', { delay: 400, duration: 1000, easing: 'ease-in' });
ScrollReveal().reveal('.headline', { delay: 800, duration: 1000,  easing: 'ease-out' });