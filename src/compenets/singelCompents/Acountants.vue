<template>
  <div>
    <b-container fluid>
         <!-- main -->
      <b-row>
        <!-- head -->
         <b-col cols="12">
           <div class="head acc">
             <div class="top">
                <h5>imports</h5>
             </div>
             <div class="bottom">
               <form action="">
                  <b-form-input type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <b-form-input type="text"  placeholder="Descrption" v-model.lazy="descrpion" />
                  <b-form-input type="text"  placeholder="date" v-model.lazy="date" />
                  <b-button @click="addImports()"> <font-awesome-icon icon="plus"/> Add import</b-button>
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
              :items="items9"
              :fields="fields9"
              class="myTable"
            />
        </b-col>
      </b-row>

 <!-- main -->
      <b-row>
        <!-- head -->
         <b-col cols="12">
           <div class="head">
             <div class="top">
                <h5>expenses</h5>
             </div>
             <div class="bottom">
               <form action="">
                  <b-form-input type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <b-form-input type="text"  placeholder="Descrption" v-model.lazy="descrpion" />
                  <b-form-input type="text"  placeholder="date"       v-model.lazy="date" />
                  <b-button @click="addExpen()"> <font-awesome-icon icon="plus"/> Add import</b-button>
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
              :items="items10"
              :fields="fields10"
              class="myTable"
            />
        </b-col>
      </b-row>

        <!-- Lost  -->
          <b-row>
              <!-- head -->
            <b-col cols="12">
              <div class="head">
                <div class="top">
                    <h5>You'r Lost</h5>
                </div>
                <div class="bottom">
                  <form action="">
                  <b-form-input type="text"  placeholder="The Amount" v-model.lazy="amount"/>
                  <b-form-input type="text"  placeholder="Descrption" v-model.lazy="descrpion" />
                  <b-form-input type="text"  placeholder="date"       v-model.lazy="date" />
                  <b-button @click="addLost()"> <font-awesome-icon icon="plus"/> Add import</b-button>
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
                  :items="items11"
                  :fields="fields11"
                  class="myTable"
                />
            </b-col>

          </b-row>
          <!-- net profits -->
        <!-- <b-row> -->
          <!-- head -->
            <!-- <b-col cols="12">
              <div class="head">
                <div class="top">
                    <h5>Net Profits</h5>
                </div>
                <div class="bottom">
                  <form action="" class="expens">
                      <b-form-input type="text"  placeholder="From" />
                      <b-form-input type="text"  placeholder="To" />

                  </form>
                </div>
              </div>
            </b-col> -->
          <!-- tabel -->
            <!-- <b-col cols="12">
                <b-table
                  :striped="striped"
                  :bordered="bordered"
                  :fixed="fixed"
                  :items="items12"
                  :fields="fields12"
                  class="myTable"
                />
            </b-col> -->

   <!-- </b-row> -->

    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        descrpion:'',date:'',amount:'',t:1,b:1,c:1,
        fields9: ['num','theAmount', 'description','date'],
        items9: [
          { num: 1, theAmount: 2000,description:'High Qualty',date:'26 / 3 /2019' },
        ],
        fields10: ['num','theAmount', 'description','date'],
        items10: [
          {num: 1, theAmount: 2000,description:'High Qualty',date:'26 / 3 /2019'  },
        ],
          fields11: ['num','theAmount', 'description','date'],
        items11: [
          { num: 1, theAmount: 2000,description:'High Qualty',date:'26 / 3 /2019' },
        ],
        fields12: ['num','imports', 'expenses','youAreLost','netProfits'],
        items12: [
          { num: 1, imports: 2000,expenses:'High Qualty',youAreLost:'True',netProfits:'25000$' },
        ],
        striped: false,
        bordered: true,
        fixed: true
      }
    },
    methods: {
      addImports(){
          if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items9.push({
          num: ++this.t,
          description:this.descrpion,
          theAmount:this.amount,
          date:this.date,
          });
      },
      addExpen(){
          if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items10.push({
          num: ++this.b,
          description:this.descrpion,
          theAmount:this.amount,
          date:this.date,
          });
      },
      addLost(){
          if(this.descrpion ==''||this.date ==''||this.amount ==''){
          return alert('Please fill values');
        }
        this.items11.push({
          num: ++this.c,
          description:this.descrpion,
          theAmount:this.amount,
          date:this.date,
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
.acc{
  margin-top: 60px;
}
.head{
  width: 100% !important;
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
width: 150px !important;
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
