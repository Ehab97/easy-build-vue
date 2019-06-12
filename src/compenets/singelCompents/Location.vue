<template>
  <div>
       <b-container fluid>
         <b-row class="input">
           <b-col  lg="6" md="8" sm="10">
                <div class="search bg-green">
                    <input class="form-control" type="text" placeholder="Enter your Location name" v-model.lazy="temp"/>
                    <b-button @click="addLoctaion()">Create</b-button>
              </div>
           </b-col>
         </b-row>
         <b-row>
              <b-col v-for="(loaction,index) in locations" :key="loaction" >
                <div class="cards1">
                  <div class="overlay">
                        <font-awesome-icon icon="map-marker-alt" size="4x"/>
                        <span>{{loaction}}</span>
                        <div class="buttons">
                            <router-link to="locationedit"> <b-button>Show/Edit</b-button></router-link>
                            <b-button  @click="deleteCard()" class="two">Delete</b-button>
                        </div>
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
      temp:'',
      isSubmitted:false
      }
    },
    methods: {
      addLoctaion(){
        if(this.temp ==''){
          alert('Please Enter Locatio name');
        }else{
          return (this.$store.state.locations.push(this.temp),console.log(this.$store.state.key));
        }
      },
      submitted(){
          this.isSubmitted=true;
        },
      deleteCard(){
        this.$store.state.locations.shift();
        }
    },
    computed: {
      locations:function() {
        return this.$store.state.locations.filter((loc) => {
          // return ();
          return this.$store.state.key.match(this.loc);
          //  return this.loc.match(this.$store.state.key);
          // return this.loc.toLowerCase().includes(this.$store.state.key.toLowerCase());
        });
      }
    },
}
</script>

<style scoped>
.search{
  margin: 25px 0;
}
.search .form-control
{
width: 300px;
height: 40px;
background: #EDEDED;
border-radius: 20px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
}
 .search .btn-secondary{
width: 150px;
height: 40px;
border: none;
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
border-radius: 20px;
float: right;
position: relative;
bottom: 40px;
right: 190px;
line-height:2;
}
.input .col-sm-12{
  padding: 0;
}

.cards1{
    background: url('../../assets/images/map.jpg') center center no-repeat;
    background-size: cover;
       border-radius: 6px;
    margin: 30px 0;
    width: 330px;
  height: 300px;
  text-align: center;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
}
.cards1 .overlay{
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
.cards1 .overlay .svg-inline--fa{
  display: block;
  width: 100%;
  margin: 0;
  color: #F27A54;
text-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);

}
.cards1 .overlay .buttons .btn-secondary{
width: 130px;
height: 40px;
border: none;
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
/* border-radius: 20px; */
border-radius: 0;
}
.cards1 .overlay .buttons .two{
border: 1px solid;
border-image-source: linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
border-image-slice: 1;
/* border-radius: 20px; */
background: -webkit-linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
background-image: -webkit-linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
background-origin: border-box;
background-clip: content-box, border-box;
-webkit-background-clip: text;
-moz-background-clip: text;
-o-background-clip: text;
-ms-background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
-o-text-fill-color: transparent;
-ms-text-fill-color: transparent;
}
.cards1 .overlay span{

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: normal;
display: block;
color: #747D88;
margin: 20px 0;
}
/* Large desktop */
@media (min-width: 1200px) {

 }
/* iPads (landscape) ----------- */
/* @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    .search .btn-secondary {
          right: 110px;
    }
    line-height: 1;
} */
/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {
    .search .btn-secondary {
          right: 110px;
    }
    line-height: 1;
 }

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {  }

/* Landscape phones and down */
@media (max-width: 480px) {  }
</style>
