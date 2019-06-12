<template>
  <div>
    <b-container fluid>
      <!-- main -->
      <b-row>
        <!-- head -->
         <b-col cols="12">
           <div class="head employee">
             <div class="top">
                <h5>Supllier name oreder</h5>
             </div>
             <div class="bottom employee">
               <form action="">
                  <b-form-input type="text"  placeholder="name" v-model.lazy="name"/>
                  <b-form-input type="text"  placeholder="Phone number" v-model.lazy="phoneNumber" />
                  <b-form-input type="text"  placeholder="E-mail" v-model.lazy="email" />
                  <b-form-input type="text"  placeholder="project" v-model.lazy="project" />
                  <b-form-input type="text"  placeholder="salary" v-model.lazy="salary" />
                  <b-form-input type="text"  placeholder="Atttenders & Absecnce" v-model.lazy="attendceAndAbcsence" />
                  <b-button @click="addEmp();addEmployeeOrder()"> <font-awesome-icon icon="plus"/> Add Order</b-button>
               </form>
             </div>
           </div>
        </b-col>
        <!-- tabel -->
        <b-col cols="12">
            <b-table
              :striped="striped"
              :bordered="bordered"
              :fixed="fixed"
              :items="items8"
              :fields="fields8"
              class="myTable"
            />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        z:1,
        name:'',
        phoneNumber:'',
        email:'',
        project:'',
        salary:'',
        attendceAndAbcsence:'',
        fields8: ['num','name', 'phoneNumber', 'email','project','salary','attendceAndAbcsence'],
        items8: [
          { num: 1, name: 'Ehab', phoneNumber: '01028317493',email:'ehabred04@gmail',salary:'2000$',project:'Edu',attendceAndAbcsence:'30' },
          ],
        striped: false,
        bordered: true,
        fixed: false
      }
    },
    methods: {
      addEmp(){
        return(this.$store.state.emps.name=this.name,this.$store.state.emps.mail=this.email,
               this.$store.state.emps.project=this.project,this.$store.state.emps.att=this.attendceAndAbcsence,
               this.$store.state.emps.phone=this.phoneNumber,this.$store.state.emps.salary=this.salary);
      },
      addEmployeeOrder(){
        if(this.attendceAndAbcsence==''||this.name==''||this.phoneNumber==''||this.email==''||this.project==''||this.salary==''){
          return alert('pleas fill the values');
        }
        this.items8.push({
          num:++this.z,
          name:this.$store.state.emps.name,
          phoneNumber:this.$store.state.emps.phone,
          email:this.$store.state.emps.mail,
          project:this.$store.state.emps.project,
          salary:this.$store.state.emps.salary,
          attendceAndAbcsence:this.$store.state.emps.att
        });
      }
  }
  }
</script>

<style>

.headeing h4{
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: normal;
text-transform: uppercase;
color: #3C444C;
}
.headeing h4 .svg-inline--fa{
margin-left: 20px
}
.head{
  width: 100% !important;
  /* margin: 0; */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}
.employee{
  margin-top: 60px;
}
.head .top{
height: 50px;
background: rgba(242, 122, 84, 0.3);
border-radius: 5px 5px 0px 0px;
    padding: 15px 20px;
}
.head .top h5{
  font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: normal;
text-transform: uppercase;
color: #3C444C;
}
.head .bottom{
margin: 0;
padding: 30px 10px;
background: #ffffff !important;
}
.head .bottom .form-control{
display: inline;
background: #EDEDED;
border-radius: 20px;
width: 200px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
height: 40px;
border: none;
    margin-bottom: 15px;
}

.employee .btn{
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
border-radius: 20px;
width: 120px;
height: 40px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: normal;
color: #FFFFFF;
border: none;
}
.b-table.table.b-table-fixed,.table-bordered,table{
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
}

.myTable thead {
   /* custom CSS styles here for <thead> element */
height: 50px;
background: rgba(242, 122, 84, 0.3);
}
.table-bordered th, .table-bordered td{
border: 1px solid rgba(242, 122, 84, 0.3);
}
.employee{
  margin: 60px 0 0 0;
}
</style>
