import Vue from 'vue'
import App from './App.vue'
import VueCardStack from "vue-card-stack";

Vue.config.productionTip = false
export default {
  components: {
    VueCardStack,
  },
  data() {
    return {
      cards: [
        { background: "#00659d" },
        { background: "#00abbc" },
        { background: "#e2c58a" },
        { background: "#fc8890" },
        { background: "#b35d7f" },
      ],
    };
  },
};
new Vue({
  render: h => h(App),
}).$mount('#app')
