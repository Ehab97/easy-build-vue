import Home from './compenets/singelCompents/Home.vue';
import location from './compenets/singelCompents/Location.vue';
import LocationEdit from './compenets/singelCompents/LocationEdit.vue';
import Suplliers from './compenets/singelCompents/Suplliers.vue';
import EditSuplliers from './compenets/singelCompents/SuplliersEdit.vue';
import Employees from './compenets/singelCompents/Employees.vue';
import Acountants from './compenets/singelCompents/Acountants.vue';
import Login from './compenets/register/Login.vue';
import Signup from './compenets/register/Signup.vue';
export default [
    { path: '/', component: Home },
    { path: '/location', component: location },
    { path: '/locationedit', component: LocationEdit },
    { path: '/suplliers', component: Suplliers },
    { path: '/editsuplliers', component: EditSuplliers },
    { path: '/employee', component: Employees },
    { path: '/acountant', component: Acountants },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
]