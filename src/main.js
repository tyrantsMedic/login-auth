import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import "../src/assets/styles/style.scss"

const app = createApp(App).use(router);

app.mount("#app");
