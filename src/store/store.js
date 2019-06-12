import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //using plugin

export const store = new Vuex.Store({
    state: { //defineging our data
        app: 'display:block',
        key: '',
        headerSelect: 'appMainHeader',
        locations: ['Egypt'],
        userDetails: {
            name: '',
            pass: ''
        },
        emp: {
            name: '',
            work: ''
        },
        imp: {
            name: '',
            quant: '',
            rec: '',
            date: '',
            desc: '',
            amn: '',
            sup: ''
        },
        exp: {
            amn: '',
            dec: '',
            date: ''
        },
        lost: {
            amn: '',
            dec: '',
            date: ''
        },
        abs: {
            amn: '',
            dec: '',
            date: ''
        },
        suppllier: {
            name: '',
            phone: '',
            type: '',
            quant: '',
            date: '',
            amn: 0,
            paid: 0,
            res: '',
            orders: ''
        },
        emps: {
            name: '',
            phone: '',
            mail: '',
            project: '',
            salary: 0,
            att: 0
        },
        counterAmnount: 0,
        counterPaid: 0,
        counterRes: 0,
        counterOrder: 0
    },
    getters: {
        logout: state => {
            return state.userDetails.name = '';
        }
    },
});