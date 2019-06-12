<template>
  <div>
      <!-- <b-container> -->
        <b-row class="text-center">
            <b-col>
              <h2 class="brand text-center">
               Easy Build
              </h2>
            </b-col>
        </b-row>
        <b-row class="text-center">
            <b-col cols="12">
             <form action="" class="">
                  <input type="text" placeholder="name" class="form-control" v-model.lazy="userDetails.name">
                  <input type="text" placeholder="user name" class="form-control" v-model.lazy="userDetails.username">
                  <input type="password" placeholder="Enter password" class="form-control" v-model.lazy="userDetails.pass">
                  <input type="password" placeholder="repeate passowrd" class="form-control" v-model.lazy="repass">
                  <b-form-select v-model="selected" :options="options"></b-form-select>
                  <b-button>Create <font-awesome-icon icon="chevron-right"/></b-button>
                  <p class="text center">Don’t have an account? <router-link to="/login">Login</router-link></p>
                  <!-- {{repass == userDetails.pass ? 'correct':'Wrong'}} -->
             </form>
            </b-col>
        </b-row>
      <!-- </b-container> -->
  </div>
</template>

<script>
export default {

  data () {
    return {
      repass:'',
      userDetails:{
        name:'',
        username:'',
        pass:'',
      },
      selected: null,
      options: [
          { value: null, text: 'Acount Type' },
          { value: 'admin', text: 'Admin' },
          { value: 'user', text: 'user' }]
    }
  }
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
height: 485px;;
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
.custom-select{
  width: 500px;
height: 40px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
background: #EDEDED;
border-radius: 5px;
position: relative;
top: 40px;
border: none
}
.btn-secondary{
border: none;
border: none;
position: relative;
width: 190px;
height: 40px;
top: 90px;
margin: 0 auto;
right: 5px;
background: linear-gradient(90deg, #F27A54 -21.05%, #A154F2 121.05%);
border-radius: 20px;
}

p{
top: 125px;
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
