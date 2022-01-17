import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
const app = createApp(App);
app.component(BaseCard);
app.mount("#app");
