<template>
  <div>
    <b-container fluid>
      <b-row>
          <div v-for="(tab, index) in tabs" :key="index" class="col-12">
            <div @click="addClass(index);route();" :class="[tab.isActive ? 'styling':'tabs' ]">
                <router-link :to="tab.link">
                    <font-awesome-icon :icon="tab.icon" size="lg" />
                    <p>  {{ tab.name }}</p>
                </router-link>
              </div>
          </div>

      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      styles:[1,0,0,0,0],
      tabs: [
      { name: 'Home', link: '/home', icon: 'home', isActive: true },
      { name: 'Location', link: '/location', icon: 'map-marker-alt', isActive: false },
      { name: 'Suplliers', link: '/editsuplliers', icon: 'truck-moving', isActive: false },
      { name: 'Employees', link: '/employee', icon: 'users', isActive: false },
      { name: 'Acountant', link: '/acountant', icon: 'poll-h', isActive: false }
    ]
    }
  },
  methods: {

      addClass(index) {
      this.tabs.forEach(tab => tab.isActive = false)
      this.tabs[index].isActive = true
    },
    route(){
        if(this.$route.path== "/location"){
          return this.$store.state.headerSelect='appMainHeader';
        }else{
          return this.$store.state.headerSelect='appSecondryHeader';
        }
      }
  },
}
</script>

<style scoped>
.tabs{
     height: 80px;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 5px;
    background: #EDEDED;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #3C444C;
   -webkit-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -moz-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -o-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -ms-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
}
.tabs:hover{
    background: linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
     color: #fff;
     cursor: pointer;
}
.styling{
    height: 80px;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 5px;
    background: #EDEDED;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #3C444C;
   -webkit-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -moz-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -o-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    -ms-transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
    transition: background  0.3s ease-in-out, color 0.3s ease-in-out;
      background: linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
     color: #fff;
     cursor: pointer;
}
.styling a{
  color: #fff !important;
  text-decoration: none !important;
   font-family: Roboto !important;;
    font-style: normal !important;;
    font-weight: 500 !important;;
    font-size: 16px !important;;
    line-height: normal !important;;
    text-decoration: none !important;;
}
.tabs a{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    color: #3C444C;
    text-decoration: none;
}
.tabs:hover a{
    text-align: center;
    color: #fff;

}
.tabs p{
  width: 100%;
  height: 100%;
}
.container-fluid{
  padding-left: 0;
}
.col-12{
  padding-right: 0;
  /* position:absolute; bottom:0px;  left:0px; right:0px; overflow:hidden; z-index: 10; */
}
</style>
