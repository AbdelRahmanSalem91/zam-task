import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faArrowUp,
  faStar,
  faHandHoldingUsd,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faLinkedin,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentAlt, faListAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/styles/main.css";

library.add(
  faChevronLeft,
  faYoutube,
  faLinkedin,
  faInstagram,
  faTwitter,
  faArrowUp,
  faCommentAlt,
  faComment,
  faStar,
  faListAlt,
  faHandHoldingUsd
);

createApp(App).component("fontAwesome", FontAwesomeIcon).mount("#app");
