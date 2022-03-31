import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCardStack from "vue-card-stack";
import vuetify from '@/plugins/vuetify' // path to vuetify export

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(vuetify)
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
  vuetify,
  render: h => h(App),
}).$mount('#app')
