<template>
  <div>
    <b-container fluid>
      <!-- main -->
      <b-row>
        <!-- head -->
         <b-col cols="12">
           <div class="head suplliers">
             <div class="top">
                <h5>Suplliers</h5>
             </div>
             <div class="bottom suplliers">
               <form action="">
                  <b-form-input type="text"  placeholder="Supllier name" v-model.lazy="name"/>
                  <b-form-input type="text"  placeholder="Supllier Phone number" v-model.lazy="PhoneNumber"/>
                  <b-button @click="addSub();addSupllier()"> <font-awesome-icon icon="plus"/> Add Supllier</b-button>
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
              :items="items6"
              :fields="fields6"
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
        m:1,
        name:'',
        PhoneNumber:'',
        TotalAmount:'',
        PaidUp:'',
        orders:'',
        fields6: ['num','name', 'PhoneNumber', 'TotalAmount','PaidUp','residual','orders'],
        items6: [
          { num: 1, name: 'Dickerson', PhoneNumber: '01028317493',PaidUp:'2000$',TotalAmount:'500K',residual:'200K',orders:5 },
        ],
        striped: false,
        bordered: true,
        fixed: false
      }
    },
    methods: {
      addSub(){
        return(this.$store.state.suppllier.name=this.name,this.$store.state.suppllier.phone=this.PhoneNumber);
      },
      addSupllier(){
        if(this.name ==''||this.PhoneNumber ==''){
          return alert('Please fill all values');
        }
        this.items6.push({
          num:++this.m,
          name:this.$store.state.suppllier.name,
          PhoneNumber:this.$store.state.suppllier.phone,
          TotalAmount:this.$store.state.counterAmnount,
          PaidUp:this.$store.state.counterPaid,
          residual:this.$store.state.counterRes,
          orders:this.$store.state.counterOrder
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

.suplliers .btn{
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
border-radius: 20px;
width: 200px;
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
.suplliers{
  margin: 60px 0 0 0;
}
</style>
