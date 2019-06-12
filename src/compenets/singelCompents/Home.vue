<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <div class="cards">
             <div class="overlay">
                  <font-awesome-icon icon="map-marker-alt" size="4x"/>
                  <router-link to='/location'>
                      <b-button  href="../singelCompents/Location.vue">Loctaion  <font-awesome-icon icon="chevron-right"/></b-button>
                  </router-link>
             </div>
          </div>
        </b-col>
        <b-col >
          <div class="cards">
             <div class="overlay">
                  <font-awesome-icon icon="poll-h" size="4x"/>
                   <router-link to="/acountant"><b-button  href="../singelCompents/Employees.vue">Acountat  <font-awesome-icon icon="chevron-right"/></b-button></router-link>
             </div>
          </div>
        </b-col>
          <b-col >
          <div class="cards">
             <div class="overlay">
                  <font-awesome-icon icon="truck-moving"  size="4x"/>
                  <router-link to="/editsuplliers"> <b-button  href="../singelCompents/Suplliers.vue">Suplliers <font-awesome-icon icon="chevron-right"/></b-button></router-link>
             </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col >
          <div class="cards">
             <div class="overlay">
                  <font-awesome-icon icon="users" size="4x"/>
                  <router-link to="/employee"> <b-button  href="../singelCompents/Employees.vue">Employees  <font-awesome-icon icon="chevron-right"/></b-button></router-link>
             </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}
</script>

<style scoped>
.cards{
  background: url('../../assets/images/map.jpg') center center no-repeat;
  background-size: cover;
  border-radius: 6px;
  margin: 30px 0;
  width: 330px;
  height: 300px;
  text-align: center;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
}
.cards .overlay{
  border-radius: 6px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) 0%, #FFFFFF 72.27%);
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30% 0;
}
.cards .overlay .svg-inline--fa{
  display: block;
  width: 100%;
  margin: 20px 0;
  color: #F27A54;
  text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

}
.cards .overlay .btn-secondary{
padding: 3% 0;
width: 270px !important;
height: 40px;
left: 249px;
top: 360px;
border: none;
border-radius: 20px;
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
}
.cards .overlay .btn-secondary .svg-inline--fa{
position: relative;
left: 75px;
bottom: 35px;
color: #FFFFFF;
}
</style>
