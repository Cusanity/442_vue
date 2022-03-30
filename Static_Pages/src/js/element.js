import Vue from "vue";
import VueCardStack from "vue-card-stack";

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