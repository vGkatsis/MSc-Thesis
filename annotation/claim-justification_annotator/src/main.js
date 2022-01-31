import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft);
library.add(faArrowRight);

const app = createApp(App)

app.use(VueCookies).component('GDialog', GDialog).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
