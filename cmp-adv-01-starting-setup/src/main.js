import { createApp } from "vue";

import App from "./App.vue";
import BaseBadge from "./components/BaseBadge.vue";

const app = createApp(App);

//these are available globally, don't have to individually import
//being registered globally means the browser needs to download the code for all of these components initially

app.component("base-badge", BaseBadge);

app.mount("#app");
