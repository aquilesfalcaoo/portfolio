import { createApp } from "vue";
import App from "./App.vue";
import "./assets/base.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css";

createApp(App).mount("#app");

ScrollReveal().reveal(".tagline", {
  delay: 400,
  duration: 1000,
  easing: "ease-in",
});
ScrollReveal().reveal(".headline", {
  delay: 800,
  duration: 1000,
  easing: "ease-out",
});

tippy("#HTML5", {
  content: "HTML5",
});
tippy("#CSS3", {
  content: "CSS3",
});
tippy("#JavaScript", {
  content: "JavaScript",
});
tippy("#TypeScript", {
  content: "TypeScript",
});
tippy("#Angular", {
  content: "Angular",
});
tippy("#Vue", {
  content: "Vue.js",
});
tippy("#Bootstrap", {
  content: "Bootstrap",
});
tippy("#TailwindCSS", {
  content: "Tailwind CSS",
});
tippy("#SASS", {
  content: "SASS",
});
tippy("#Gulp", {
  content: "Gulp",
});
tippy("#jQuery", {
  content: "jQuery",
});
