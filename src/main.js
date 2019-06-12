import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routes from './route';
import { store } from './store/store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
//fontawsome icons imprt and use
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCoffee,
    faPowerOff,
    faMapMarkerAlt,
    faHome,
    faMosque,
    faTruckMoving,
    faUsers,
    faPollH,
    faChevronRight,
    faEdit,
    faPlus
} from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';


library.add(faCoffee, faMapMarkerAlt, faPowerOff, faHome, faMosque, faTruckMoving, faUsers, faPollH, faChevronRight, faEdit, faPlus);
//end fontaswome

//fontwasome compenet
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false;
//scroll
Vue.directive('on-scroll', {
    inserted: function(el, binding) {
        let f = function(evt) {
            if (binding.value(evt, el)) {
                window.removeEventListener('scroll', f)
            }
        }
        window.addEventListener('scroll', f)
    }
});
//router
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});
//bootstrap
Vue.use(BootstrapVue);
// Vue.config.devtools = true;
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})