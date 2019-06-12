<template>
  <div>
    <b-container fluid>
      <!-- main -->
      <b-row>
        <b-col>
         <div class="headeing">
            <h4>Location Edit  <font-awesome-icon icon="edit"/></h4>
         </div>
        </b-col>
        <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>Employees</h5>
             </div>
             <div class="bottom">
               <form action="">
                  <input class="form-control" type="text"  placeholder="Employee name" v-model.lazy="name"/>
                  <input class="form-control" type="text"  placeholder="Employee work" v-model.lazy="work"/>
                  <b-button @click="addEmp();addEmployees()"> <font-awesome-icon icon="plus"/> Add</b-button>
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
              :items="items"
              :fields="fields"
              class="myTable"
                            >
            </b-table>
        </b-col>
      </b-row>
     <!-- imports -->
      <b-row>
           <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>imports</h5>
             </div>
             <div class="bottom">
               <form action="" class="imports">
                  <input class="form-control" type="text"  placeholder="Employee name" v-model.lazy="name"/>
                  <input class="form-control" type="text"  placeholder="Quantitiy"     v-model.lazy="qunatity"/>
                  <input class="form-control" type="text"  placeholder="Reciepient"    v-model.lazy="recipiant"/>
                  <input class="form-control" type="text"  placeholder="suplliers"     v-model.lazy="suplliers"/>
                  <input class="form-control" type="text"  placeholder="date"          v-model.lazy="date"/>
                  <b-button @click="addImp();addImports()"> <font-awesome-icon icon="plus"/> Add</b-button>
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
              :items="items2"
              :fields="fields2"
              class="myTable"
            />
        </b-col>

      </b-row>
     <!-- expenses  -->
      <b-row>
           <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>Expenses</h5>
             </div>
             <div class="bottom">
               <form action="" class="expens">
                  <input class="form-control" type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <input class="form-control" type="text"  placeholder="Desription" v-model.lazy="descrpion" />
                  <input class="form-control" type="text"  placeholder="date"  v-model.lazy="date"/>
                  <b-button @click="addExp();addExpenses()"> <font-awesome-icon icon="plus"/> Add</b-button>
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
              :items="items3"
              :fields="fields3"
              class="myTable"
            />
        </b-col>

      </b-row>
     <!-- lost -->
        <b-row>
           <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>You'r Lost</h5>
             </div>
             <div class="bottom">
               <form action="" class="expens">
                  <input class="form-control" type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <input class="form-control" type="text"  placeholder="Desription" v-model.lazy="descrpion" />
                  <input class="form-control" type="text"  placeholder="date"  v-model.lazy="date"/>
                  <b-button @click="addLost()"> <font-awesome-icon icon="plus"/> Add</b-button>
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
              :items="items4"
              :fields="fields4"
              class="myTable"
            />
        </b-col>

      </b-row>
     <!-- abstract -->
     <b-row>
           <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>Abstract</h5>
             </div>
             <div class="bottom">
               <form action="" class="abstract">
                  <input class="form-control" type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <input class="form-control" type="text"  placeholder="Desription" v-model.lazy="descrpion" />
                  <input class="form-control" type="text"  placeholder="date"  v-model.lazy="date"/>
                  <input class="form-control" type="text"  placeholder="Abstarcts image" />
                   <b-button class="choose">Choose</b-button>
                  <b-button @click="addAbs();addImg()"> <font-awesome-icon icon="plus"/> Add</b-button>
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
              :items="items5"
              :fields="fields5"
              class="myTable"

              >
             <!-- <span slot="html" slot-scope="data" v-html="data.value"></span> -->
            </b-table>
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    // template:`<b-button>Edit</b-button>`,
    data() {
      return {
        //`<b-button>Edit</b-button>`
        //<span v-if="index+1 === items.length" v-html="items[items.length]">
        i:1,
        name:'',
        work:'',
        html:`<b-button>Edit</b-button>`,
        fields: ['num','name', 'Work'],
        items: [
          { num: 1, name: 'Ehab', Work: 'Engineer'},
        ],
        j:1,
        qunatity:'',
        suplliers:'',
        recipiant:'',
        date:'',
        fields2: ['num','name', 'qunatity', 'recipiant','suplliers','date'],
        items2: [
          { num: 1, name: 'Dickerson', qunatity: 2000,suplliers:'Minia',recipiant:500,date:'26 / 3 /2019' },
        ],
        k:1,
        amount:'',
        descrpion:'',
          fields3: ['num','TheAmount', 'Description','date'],
        items3: [
          { num: 1, TheAmount: 2000,Description:'High Qualty',date:'26 / 3 /2019' },
        ],
        l:1,
        fields4: ['num','TheAmount', 'Description','date'],
        items4: [
          { num: 1, TheAmount: 2000,Description:'High Qualty',date:'26 / 3 /2019' },
        ],
        n:1,
        fields5: ['num','TheAmount', 'Description','date','AbstractImage'],
        items5: [
          { num: 1, TheAmount: 2000,Description:'High Qualty',date:'26 / 3 /2019' },
        ],
        striped: false,
        bordered: true,
        fixed: true
      }
    },
    computed: {
      // addEmp(){
      //   this.$store.state.emp.name=this.name;
      //   this.$store.state.emp.work=this.work;
      // }
    },
    methods: {
       addEmp(){
       return(this.$store.state.emp.name=this.name,this.$store.state.emp.work=this.work)
      },
      addEmployees(){
         if(this.name ==''||this.work ==''){
          return alert('Please fill values');
        }
        this.items.push({
          num: ++this.i,
          name:this.$store.state.emp.name,
          Work:this.$store.state.emp.work
          });

      },addImp(){
        return(this.$store.state.imp.name=this.name,this.$store.state.imp.quant=this.qunatity,
               this.$store.state.imp.date=this.date,this.$store.state.imp.rec=this.recipiant,
               this.$store.state.imp.rec,this.$store.state.imp.sup=this.suplliers);
      },
      addImports(){
          if(this.name ==''||this.qunatity ==''||this.date==''||this.suplliers==''||this.recipiant==''){
          return alert('Please fill values');
        }

           this.items2.push({
          num: ++this.j,
          name:this.$store.state.imp.name,
          qunatity:this.$store.state.imp.quant,
          date:this.$store.state.imp.date,
          suplliers:this.$store.state.imp.sup,
          recipiant:this.$store.state.imp.rec
          });

      },addExp(){
        return(this.$store.state.exp.amn=this.amount,this.$store.state.exp.dec=this.descrpion,
               this.$store.state.exp.date=this.date);
      },
      addExpenses(){
          if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items3.push({
          num: ++this.k,
          Description:this.$store.state.exp.dec,
          TheAmount:this.$store.state.exp.amn,
          date:this.$store.state.exp.date,
          });
      },addLos(){
        return(this.$store.state.lost.amn=this.amount,this.$store.state.lost.dec=this.descrpion,
               this.$store.state.lost.date=this.date);
      },
      addLost(){
           if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items4.push({
          num: ++this.l,
          Description:this.$store.state.lost.dec,
          TheAmount:this.$store.state.lost.amn,
          date:this.$store.state.lost.date,
          });
        this.date='';
        this.descrpion='';
        this.amount=0;
      },
      addAbs(){
        return(this.$store.state.abs.amn=this.amount,this.$store.state.abs.dec=this.descrpion,
               this.$store.state.abs.date=this.date);

      },
     addImg(){
        if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items5.push({
          num: ++this.n,
          TheAmount:this.$store.state.abs.amn,
          Description:this.$store.state.abs.dec,
          // AbstractImage:this.abstract,
          date:this.$store.state.abs.date,
          });
      },

  }
  }
</script>

<style>
.headeing{
  margin: 60px 0 40px 0;
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
  margin: 0;
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
.head .bottom .imports .form-control{
display: inline;
height: 40px;
background: #EDEDED;
border-radius: 20px;
width: 170px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
border: none;
}
 .head .bottom .expens .form-control{
display: inline;
height: 40px;
background: #EDEDED;
border-radius: 20px;
width: 190px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #747D88;
border: none;
}
.btn{
background: linear-gradient(90deg, #F27A54 0%, #A154F2 100%);
border-radius: 20px;
width: 100px;
height: 40px;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: normal;
color: #FFFFFF;
border: none;
}
.b-table.table.b-table-fixed{
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
.head .bottom .abstract .choose{
left: -85px;
position: relative;
width: 100px;
height: 40px;;
background: #DDDDDD;
border-radius: 20px;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: normal;
color: #3C444C;
}
</style>
