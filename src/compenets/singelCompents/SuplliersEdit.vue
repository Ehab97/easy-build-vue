<template>
  <div>
    <b-container fluid>
      <!-- main -->
      <b-row>
        <!-- head -->
         <b-col cols="12">
           <div class="head suplliers">
             <div class="top">
                <h5>Supllier Name oreder</h5>
             </div>
             <div class="bottom suplliers">
               <form action="">
                    <b-form-input type="text"     placeholder="Type" v-model.lazy="type"/>
                    <b-form-input type="numer"    placeholder="Quantitiy" v-model.lazy="quantity" />
                    <b-form-input type="date"     placeholder="Date" v-model.lazy="date" />
                    <b-form-input type="number"   placeholder="Total Amount" v-model.lazy="totalAmount" />
                    <b-form-input type="number"   placeholder="Paid Up" v-model.lazy="paidUp" />
                    <b-form-input type="number"   placeholder="Resdual" v-model.lazy="residual" />
                    <b-form-input type="number"   placeholder="orders" v-model.lazy="orders" />
                    <b-button @click="addSub();addOrder()"> <font-awesome-icon icon="plus"/> Add Order</b-button>
                    <router-link to="/suplliers"><b-button> <font-awesome-icon icon="plus"/> add supllier</b-button></router-link>
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
              :items="items7"
              :fields="fields7"
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
        type:'',
        date:'',
        quantity:'',
        totalAmount:'',
        paidUp:'',
        residual:'',
        orders:'',
        x:1,
        fields7: ['num','type', 'quantity', 'date','totalAmount','paidUp','residual','orders'],
        items7: [
          { num: 1, type: 'BMW', quantity: '800K',date:'28/3/2019',paidUp:'2000$',totalAmount:'500K',residual:'200K',orders:5 },
        ],
        striped: false,
        bordered: true,
        fixed: false
      }
    },
    methods: {
      addSub(){
        return( this.$store.state.suppllier.type  =this.type,
                this.$store.state.suppllier.date  =this.date,
                this.$store.state.suppllier.quant =this.quantity,
                this.$store.state.suppllier.amn   =this.totalAmount,
                this.$store.state.suppllier.paid  =this.paidUp,
                this.$store.state.suppllier.res   =this.residual,
                this.$store.state.suppllier.orders=this.orders,
                this.$store.state.counterAmnount +=parseInt(this.totalAmount),
                this.$store.state.counterPaid    +=parseInt(this.paidUp),
                this.$store.state.counterRes     +=parseInt(this.residual),
                this.$store.state.counterOrder   +=parseInt(this.orders)
              );
      },
      addOrder(){
        if(this.type==''||this.date==''||this.residual==''||this.quantity==''||this.orders==''){
          return alert('please Fill all values');
        }
        this.items7.push({
          num:++this.x,
          type:this.$store.state.suppllier.type,
          quantity:this.$store.state.suppllier.quant,
          date:this.$store.state.suppllier.date,
          paidUp:this.$store.state.suppllier.paid,
          residual:this.$store.state.suppllier.res,
          totalAmount:this.$store.state.suppllier.amn,
          orders:this.$store.state.suppllier.orders
        });


      }
  }
  }
</script>

<style>

.suplliers{
  margin: 60px 0 0 0;
}
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
</style>
