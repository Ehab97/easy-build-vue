<template>
  <div>
      <b-container>
        <b-row class="text-center">
            <b-col>
              <h2 class="brand text-center">
               Easy Build
              </h2>
            </b-col>
        </b-row>
           <b-row class="text-center">
            <b-col>
             <form action="" class="">
                  <input type="text"     placeholder="Enter yourname"  class="form-control" v-model="name">
                  <input type="password" placeholder="Enter Password"  class="form-control" v-model="pass">
                  <b-form-checkbox
                    name="checkbox-1"
                    value="accepted"
                  >
                   Remeber Me
                  </b-form-checkbox>

                         <b-button @click="sendData">Login <font-awesome-icon icon="chevron-right"/></b-button>

                   <p class="text center">Don’t have an account? <router-link to="/signup">Create One</router-link></p>
             </form>
            </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>
export default {

  data () {
    return {
      // userDetails:{
      //   name:'',
      //   pass:''
      // }
      name:'',
      pass:''
    }
  },
  methods: {
    sendData(){
      if(this.name=='ehab'&&this.pass !='123'){
         return alert('wrong pass'),this.$store.state.app=true,console.log(this.$store.state.app),this.$router.push({name:'login'});

      }else if(this.pass==''){
        return alert('fill  pass'),this.$store.state.app=true,console.log(this.$store.state.app),this.$router.push({name:'login'});
      }
      else{
          this.$store.state.userDetails.name=this.name;
          return this.$store.state.app=false,console.log(this.$store.state.app),this.$router.push({name:'home'});
      }
    }
  },
}
</script>

<style scoped>
.brand {
   font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: normal;
  text-align: center;
  margin: 60px 0 0 0;
    background: -webkit-linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
-o-text-fill-color: transparent;
-ms-text-fill-color: transparent;
  text-transform: uppercase;

}
form{
background: #FFFFFF;
box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
border-radius: 5px;
width: 580px;
height: 348px;
margin: 40px auto;
}
form  .form-control{
border: none;
width: 500px;
height: 40px;
position: relative;
top: 40px;
background: #EDEDED;
border-radius: 5px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
margin: 20px auto;
}
.custom-control {
    position: relative;
    top: 65px;
    float: left;
    left: 40px;
    }
.btn-secondary{
border: none;
position: relative;
width: 190px;
height: 40px;
margin: 30px 0;
top: 120px;
margin: 0 auto;
right: 55px;
background: linear-gradient(90deg, #F27A54 -21.05%, #A154F2 121.05%);
border-radius: 20px;
}
/* .margin{
  margin:50px 0;
} */
p{
      top: 160px;
    position: relative;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
text-align: center;
color: #747D88;
}
p a{
text-decoration: none;
color:#F27A54;
}
</style>
