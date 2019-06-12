<template>
  <div>
    <!-- <app-main-header></app-main-header> -->
    <!-- <app-secondry-header></app-secondry-header> -->
    <component :is="$store.state.headerSelect"></component>
    <b-container fluid>
          <b-row>
               <b-col cols="2" :style="$store.state.app">
                  <app-side-bar>

                  </app-side-bar>
               </b-col>
               <b-col cols="10" class="content">
                  <router-view></router-view>
               </b-col>
          </b-row>
    </b-container>
    <app-footer></app-footer>
  </div>
</template>

<script>
import MainHeader from './compenets/mainCompents/Header1';
import SecondryHeader from './compenets/mainCompents/Header2';
import SideBar from './compenets/mainCompents/SideBar';
import Home from './compenets/singelCompents/Home';
import Location from './compenets/singelCompents/Location';
import LocationEdit from './compenets/singelCompents/LocationEdit';
import Suplliers from './compenets/singelCompents/Suplliers';
import EditSuplliers from './compenets/singelCompents/SuplliersEdit';
import Employee from './compenets/singelCompents/Employees';
import Acountat from './compenets/singelCompents/Acountants';
import Login from './compenets/register/Login';
import Signup from './compenets/register/Signup';
import Footer from './compenets/mainCompents/Footer';
export default {
  data () {
    return {
      // headerSelect:'appMainHeader',
      //   userDetails:{
      //   name:'',
      //   pass:''
      // }
    }
  },
  components:{
    appMainHeader:MainHeader,
    appSecondryHeader:SecondryHeader,
    appSideBar:SideBar,
    appHome:Home,
    appLocation:Location,
    appLocationEdit:LocationEdit,
    appSuplliers:Suplliers,
    appEditSuplliers:EditSuplliers,
    appEmployee:Employee,
    appAcountat:Acountat,
    appLogin:Login,
    appSignup:Signup,
    appFooter:Footer
  },
  methods: {

  },
  // created() {
  //   if (this.$mq.above(600)) {
  //     console.log('screen > 600px')
  //   }
  // },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto');
body{
  height:100%;
   width:100%;
  font-family: 'Roboto', sans-serif;
}
.col-2{
background: #FFFFFF;
box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
padding-right: 0;
padding-left: 0;
max-width: 140px !important;
/* max-height: 100% !important; */
}
@media (min-width: 768px) and (max-width: 979px) {
    .search .btn-secondary {
          right: 110px;
    }
 }
 .app{
   display: block;
 }
 .content{
    /* flex-grow: 1;
    overflow: auto;
    min-height: 2em; */
   /* position:absolute; top:55.6px; bottom:50px; left:180px; right:0px; overflow:auto; */
 }
</style>
