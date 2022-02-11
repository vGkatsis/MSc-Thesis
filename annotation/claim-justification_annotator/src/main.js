import { createApp } from 'vue'
import VueCookies from 'vue3-cookies'
import 'gitart-vue-dialog/dist/style.css'
import VueClipboard from 'vue-clipboard2'
import VueBasicAlert from 'vue-basic-alert'
import { GDialog } from 'gitart-vue-dialog'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowLeft);
library.add(faArrowRight);

const app = createApp(App)

app.use(VueBasicAlert).use(VueClipboard).use(VueCookies).component('GDialog', GDialog).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
