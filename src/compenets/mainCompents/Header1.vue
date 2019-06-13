<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
        <b-container fluid>
          <b-navbar-brand href="#">Easy Build</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse" />

          <b-collapse is-nav id="nav_collapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                      <label for="input_Search" @click="search()">Search</label>
                      <b-form-input id="input_Search" size="sm"
                                    class="mr-sm-2" type="text"
                                    placeholder="Search by Location Name"
                                    v-model.lazy="key"
                                    />

                    </b-nav-form>

                  <b-navbar-nav right>
                    <b-nav-item><router-link to="/">{{ name }}</router-link></b-nav-item>
                   <a   @click="logout()" class="nav-link">Logout
                        <font-awesome-icon icon="power-off" />
                   </a>
                  </b-navbar-nav>
                </b-navbar-nav>
          </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {

  data () {
    return {
      key:'',
    }
  },
  computed:{
    name(){
      return this.$store.state.userDetails.name;
    },
  },
  methods: {
     search(){
      return (this.$store.state.key=this.key)
    },
      logout(){
            return this.$store.state.app=true,this.$store.state.userDetails.name='',this.$router.push({name:'login'});
      //     if(this.$route.path== "/login"){
      //     return (this.$store.state.app=true,this.$store.state.userDetails.name='');
      //         }
      // return this.$store.state.userDetails.name='';
    }
  },
}
</script>

<style scoped>
.bg-light {
    background-color: #fff !important;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
    /* position:absolute; top:0px; left:0px; right:0px;overflow:hidden; */
    /* z-index: 100; */
}
a{
 font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: normal;
    margin-right: 30px;
    color: #3C444C;
    text-decoration: none;
    cursor: pointer;
}
.navbar-light .navbar-brand {
   font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
    background: -webkit-linear-gradient(90deg, #F27A54 -29.14%, #A154F2 150.36%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -o-background-clip: text;
  -ms-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
-o-text-fill-color: transparent;
-ms-text-fill-color: transparent;

}
.form-inline{
  margin-right: 70px;
}
.form-inline .form-control{
  background: #EDEDED;
border-radius: 20px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
text-align: center;
padding: 15px 20px;
color: #747D88;
}
label{
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: normal;
margin-right: 10px;
color: #3C444C;
cursor: pointer;
}
.navbar-light .navbar-nav .nav-link
{
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: normal;
margin-right: 30px;
color: #3C444C;
}
@media screen and (max-width: 480px){
  .form-inline{
    margin: 20px 0;
  }
  .nav-item{
    margin-bottom: 20px;
  }
}
/* .mobile{
  .form-inline{
    margin: 20px 0;
  }
  .nav-item{
    margin-bottom: 20px;
  }
} */
</style>
