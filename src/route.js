import Login from './compenets/register/Login.vue';

//lazy loading
const location = resolve => {
    require.ensure(['./compenets/singelCompents/Location.vue'], () => {
        resolve(require('./compenets/singelCompents/Location.vue'));
    })
};
const LocationEdit = resolve => {
    require.ensure(['./compenets/singelCompents/LocationEdit.vue'], () => {
        resolve(require('./compenets/singelCompents/LocationEdit.vue'));
    })
}
const Suplliers = resolve => {
    require.ensure(['./compenets/singelCompents/Suplliers.vue'], () => {
        resolve(require('./compenets/singelCompents/Suplliers.vue'));
    })
}
const EditSuplliers = resolve => {
    require.ensure(['./compenets/singelCompents/SuplliersEdit.vue'], () => {
        resolve(require('./compenets/singelCompents/SuplliersEdit.vue'));
    })
}
const Employees = resolve => {
    require.ensure(['./compenets/singelCompents/Employees.vue'], () => {
        resolve(require('./compenets/singelCompents/Employees.vue'));
    })
}
const Acountants = resolve => {
    require.ensure(['./compenets/singelCompents/Acountants.vue'], () => {
        resolve(require('./compenets/singelCompents/Acountants.vue'));
    })
}
const Signup = resolve => {
    require.ensure(['./compenets/register/Signup.vue'], () => {
        resolve(require('./compenets/register/Signup.vue'));
    })
}


const Home = resolve => {
    require.ensure(['./compenets/singelCompents/Home.vue'], () => {
        resolve(require('./compenets/singelCompents/Home.vue'));
    })
}



export default [
    { path: '/', component: Login, name: 'login' },
    { path: '/home', component: Home, name: 'home' },
    { path: '/location', component: location },
    { path: '/locationedit', component: LocationEdit },
    { path: '/suplliers', component: Suplliers },
    { path: '/editsuplliers', component: EditSuplliers },
    { path: '/employee', component: Employees },
    { path: '/acountant', component: Acountants },
    { path: '/signup', component: Signup },
    {
        path: '/redirect-me',
        redirect: '/login',
        beforeEnter: (to, from, next) => {
            // ...
            console.log('inside route setup');
            next();
        }
    },
    { path: '/redirect-me', redirect: { name: 'login' } },
    { path: '*', redirect: '/login' }
]