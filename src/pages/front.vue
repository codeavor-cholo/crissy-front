<template>
<q-page>
<!-- START OF DESKTOP ONLY -->
    <div class="desktop-only">  
        <div>
            <q-img src="statics/pics/knife.jpg" style="height:400px">
            <q-card dark elevated class="my-card no-shadow text-white q-mx-xl q-mt-md" style="height:250px;padding-left:310px;background: rgba(0, 0, 0, 0)">
            <q-card-section class="q-pa-sm">
            <div class="column items-center">
            <div style="font-size:82px;font-family: 'Pacifico', serif;">The Art Of Food</div>
            
            </div>
            <div class="text-amber-9" style="font-size:30px;font-family: 'Arvo', serif;"><b>Great tastes at affordable prices.</b></div>
            </q-card-section>
            </q-card>
            </q-img>
        </div>

        <div class="row justify-between q-pt-lg">
            <q-img src="statics/pics/dinnerware.jpg" style="height:400px;" class="col-6" />    
            <div class="col q-ml-lg">
             <q-card flat class="my-card bg-grey-3 col" style="height:400px;">
                <q-card-section>
                    <div class="column items-center q-pa-sm q-pb-lg" style="font-size:30px;font-family: 'Arvo', serif;"><b>BOOK YOUR EVENT NOW</b></div>
                    <div class="column q-gutter-lg">
                    <div class="row ">
                      <span class="col-3 q-pl-md q-pt-md text-weight-bold text-grey-8">EVENT NAME</span>
                      <q-input filled v-model="name" color="orange-8" class="col q-mr-md q-ml-md" />
                    </div>
                    <div class="row ">
                      <span class="col-3 q-pl-md q-pt-md text-weight-bold text-grey-8">EVENT TYPE</span>
                      <q-select v-model="eventType" :options="mapEvent" :emit-value="true" filled color="orange-8" class="col q-mr-md q-ml-md" />
                    </div>
                    </div>
                    <div class="q-pa-sm q-pt-lg column items-center">
                    <q-btn dense style="width:250px;height:50px" color="orange-4" text-color="white" @click="proceedToReservations" label="PROCEED TO RESERVATION" />
                    </div>
                </q-card-section>
             </q-card>
        </div>
        </div>

        <div class="q-pt-lg" style="font-size:30px;font-family: 'Bree Serif', serif;"><b>Enjoy our tasty foods to your heart's content.</b></div>
        <div class="q-py-lg row q-gutter-lg">
            <q-table grid :data="Food" :columns="columns" :rows-per-page-options="[0]" hide-bottom :pagination.sync="pagination" :filter="filter">
                <template v-slot:item="props"> 
                    <div class="row q-pa-sm">
                        <q-card class="my-card" style="width:210px;height:200px">
                            <img :src="props.row.foodPic" class="full-width" style="width:200px;height:130px">
                            <q-card-section align="left" style="margin:3px;padding:1px;width: 200px">
                            <div class="row">
                            <div class="column">       
                            <div class="q-pt-sm">     
                            <b>{{props.row.foodName}}</b>
                            </div>
                            <div class="text-subtitle2">{{props.row.foodPrice}} php per head</div>
                            </div>
                            </div>
                            </q-card-section>
                        </q-card>
                    </div>           
                  </template>
            </q-table>
        </div>    
        <div class="float-right">
          <q-btn flat text-color="black" label="See More..." @click="$router.push('/menu')"/>
        </div>
        
        <div class="q-pt-xl" style="font-size:30px;font-family: 'Bree Serif', serif;"><b>Avail our packages to get discounts.</b></div>
        <div class="q-pt-lg row justify-around">
            <q-table grid :data="Packages" :columns="columnss" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
            <template v-slot:item="props">
              <div class="q-pa-md">
                  <q-card bordered style="width:542px;height:500px;border-radius:20px" class="bg-white my-card col-6 q-pa-md">
                  <q-card-section class="column items-center">
                    <img style="height:100%;width:100px" src="statics/pics/logo.png">
                    <div style="font-size:47px;font-family: 'Lobster', cursive;">{{props.row.name}}</div>
                    <div style="font-size:13px"><b>{{props.row.price}} per Head</b></div>
                    <div style="font-size:15px"><b>MENU</b></div>
                  </q-card-section>
                  
                  <div class="row items-center justify-center">
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Food Choice</b></div>
                        <div v-for="(price, index) in props.row.category" :key="index" >
                          <div class="q-pt-sm" style="font-size:12px"><i>{{ price.viandsQty }} viand<span v-show="price.viandsQty != '1'">s</span> of {{ price.category }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                    <q-separator vertical color="black" />
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Inclusion</b></div>
                        <div v-for="(s, indexs) in props.row.inclusions" :key="indexs">
                          <div style="font-size:12px"><i>{{ s.inclusion }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                  </div>
                </q-card>
              </div>
            </template>
        </q-table>
            </div>

            <div class="q-pt-sm text-right">
              <q-btn flat text-color="black" label="See More..." @click="$router.push('/packages')"/>
            </div>
    </div>
<!-- END OF DESKTOP ONLY -->

<!-- START OF MOBILE ONLY -->
    <div class="mobile-only">  
        <div>
            <q-img src="statics/pics/knife.jpg" style="height:400px">
            <q-card dark elevated class="my-card no-shadow text-white q-mx-sm q-mt-sm" style="height:250px;background: rgba(0, 0, 0, 0)">
            <q-card-section class="q-pa-sm">
            <div class="column items-center q-pb-md">
              <div style="font-size:52px;font-family: 'Pacifico', serif;">The Art Of</div>
              <div style="font-size:52px;font-family: 'Pacifico', serif;">Food</div>
            </div>
            <div class="text-amber-9 q-pt-xl text-center" style="font-size:25px;font-family: 'Arvo', serif;"><b>Great tastes at affordable prices.</b></div>
            </q-card-section>
            </q-card>
            </q-img>
        </div>

        <div>    
            <div>
             <q-card flat class="my-card bg-grey-3 col" style="height:330px;">
                <q-card-section>
                    <div class="column items-center q-pa-sm q-pb-lg" style="font-size:24px;font-family: 'Arvo', serif;"><b>BOOK YOUR EVENT NOW</b></div>
                    <div class="column q-gutter-lg">
                    <div class="row ">
                      <span class="col-3 q-pl-md q-pt-md text-weight-bold text-grey-8">EVENT NAME</span>
                      <q-input filled v-model="name" color="orange-8" class="col q-mr-md q-ml-md" />
                    </div>
                    <div class="row ">
                      <span class="col-3 q-pl-md q-pt-md text-weight-bold text-grey-8">EVENT TYPE</span>
                      <q-select v-model="eventType" :options="mapEvent" :emit-value="true" filled color="orange-8" class="col q-mr-md q-ml-md" />
                    </div>
                    </div>
                    <div class="q-pa-sm q-pt-lg column items-center">
                    <q-btn dense style="width:250px;height:50px" color="orange-4" text-color="white" @click="proceedToMobReservations" label="PROCEED TO RESERVATION" />
                    </div>
                </q-card-section>
             </q-card>
            </div>
            <q-img src="statics/pics/dinnerware.jpg" style="height:350px;" class="col-6" />
        </div>

        <div class="q-pt-lg q-pl-md" style="font-size:20px;font-family: 'Bree Serif', serif;"><b>Enjoy our tasty foods to your heart's content.</b></div>
        <div class="q-pl-sm q-py-lg row q-gutter-lg">
            <q-table grid :data="Food" :columns="columns" :rows-per-page-options="[0]" hide-bottom :pagination.sync="pagination" :filter="filter">
                <template v-slot:item="props"> 
                    <div class="row q-pa-sm">
                        <q-card class="my-card" style="width:325px;height:270px">
                            <img :src="props.row.foodPic" class="full-width" style="width:250px;height:200px">
                            <q-card-section align="left" style="margin:3px;padding:1px;width: 200px">
                            <div class="row">
                            <div class="column">       
                            <div class="q-pt-sm q-pl-sm">     
                            <b>{{props.row.foodName}}</b>
                            </div>
                            <div class="text-subtitle2 q-pl-sm">{{props.row.foodPrice}} php per head</div>
                            </div>
                            </div>
                            </q-card-section>
                        </q-card>
                    </div>           
                  </template>
            </q-table>
        </div>    
        
        <div class="float-right">
          <q-btn flat text-color="black" label="See More..." @click="$router.push('/menu')"/>
        </div>
        
        <div class="q-pt-xl q-pl-md" style="font-size:20px;font-family: 'Bree Serif', serif;"><b>Avail our packages to get discounts.</b></div>
        <div class="q-pt-lg q-px-sm row justify-around">
            <q-table grid :data="Packages" :columns="columnss" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
            <template v-slot:item="props">
              <div class="q-pa-md">
                  <q-card bordered style="width:350px;height:500px;border-radius:20px" class="bg-white my-card col-6 q-pa-md">
                  <q-card-section class="column items-center">
                    <img style="height:100%;width:100px" src="statics/pics/logo.png">
                    <div style="font-size:27px;font-family: 'Lobster', cursive;">{{props.row.name}}</div>
                    <div style="font-size:13px"><b>{{props.row.price}} per Head</b></div>
                    <div style="font-size:15px"><b>MENU</b></div>
                  </q-card-section>
                  
                  <div class="row items-center justify-center">
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Food Choice</b></div>
                        <div v-for="(price, index) in props.row.category" :key="index" >
                          <div class="q-pt-sm" style="font-size:12px"><i>{{ price.viandsQty }} viand<span v-show="price.viandsQty != '1'">s</span> of {{ price.category }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                    <q-separator vertical color="black" />
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Inclusion</b></div>
                        <div v-for="(s, indexs) in props.row.inclusions" :key="indexs">
                          <div style="font-size:12px"><i>{{ s.inclusion }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                  </div>
                </q-card>
              </div>
            </template>
        </q-table>
            </div>

            <div class="float-right q-pt-sm">
              <q-btn flat text-color="black" label="See More..." @click="$router.push('/packages')"/>
            </div>
    </div>
<!-- END OF MOBILE ONLY -->
</q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      eventType: '',
      Event: [],
      Food: [],
      Packages: [],
      pagination: { sortBy: 'Category', descending: false, page: 1, rowsPerPage: 5},
      paginations: { sortBy: 'Category', descending: false, page: 2, rowsPerPage: 2},
      columns: [
            { name: 'category', required: true, label: 'Food Category', align: 'center', field: 'category', sortable: true },
            { name: 'foodName', align: 'center', label: 'Food Name', field: 'foodName', sortable: true },
            // { name: 'foodPrice', align: 'center', label: 'Package Price', field: 'foodPrice', sortable: true },
        ],
      columnss: [
            { name: 'name', required: true, label: 'Package name', align: 'center', field: 'name', sortable: true },
            { name: 'price', align: 'center', label: 'Package Per Head Price', field: 'price', sortable: true },
        ],
      displayName: '',
      uid: ''
    }
  },
  created() {
    let self = this
    this.$firebase.auth().onAuthStateChanged(function(user) {
        
        if (user) {
          let gg = {...user}
          console.log('createdUser',user)
          console.log('createdUser',user.uid)
          console.log('user',gg.displayName)
          self.uid = gg.uid
          self.displayName = gg.displayName
        }
    })
  },
  mounted(){
      this.$binding('Event', this.$firestoreApp.collection('Event'))
      .then(Event => {
      console.log(Event, 'Event')
      }),
      this.$binding('Food', this.$firestoreApp.collection('Food'))
        .then(Food => {
        console.log(Food, 'Food')
        }),
      this.$binding('Packages', this.$firestoreApp.collection('Packages'))
        .then(Packages => {
        console.log(Packages, 'Packages')
        })
  },
  computed:{
    mapEvent(){
      let map = this.Event.map(a=>{
        return {
          label:a.event,
          value:a.event
        }
      })
      return map
    }
  },
  methods:{
    proceedToReservations(){
      //local storage code

        if(this.name == '' || this.eventType == ''){
            this.$q.dialog({
              title: `Unable To Continue`,
              message: 'Please Fill Up Required Fields',
              type: 'negative',
              color: 'orange-6',
              textColor: 'grey',
              icon: 'warning',
              ok: 'Ok'
          })
        } else {
          let saveLocally = {
            clientEvent: this.name,
            clientEventType: this.eventType
          }


          this.$q.localStorage.clear()
          console.log(saveLocally,'save')
          let sri = require('simple-random-id')
          let random = sri(9)
          this.$q.localStorage.set(random, saveLocally)
          console.log(this.$q.localStorage.getItem(random),'data locally')
          //push to reservation with key

          this.$router.push('/reservation/'+random)
        }

    },
    proceedToMobReservations(){
      //local storage code

        if(this.name == '' || this.eventType == ''){
            this.$q.dialog({
              title: `Unable To Continue`,
              message: 'Please Fill Up Required Fields',
              type: 'negative',
              color: 'orange-6',
              textColor: 'grey',
              icon: 'warning',
              ok: 'Ok'
          })
        } else {
          let saveLocally = {
            clientEvent: this.name,
            clientEventType: this.eventType
          }


          this.$q.localStorage.clear()
          console.log(saveLocally,'save')
          let sri = require('simple-random-id')
          let random = sri(9)
          this.$q.localStorage.set(random, saveLocally)
          console.log(this.$q.localStorage.getItem(random),'data locally')
          //push to reservation with key

          this.$router.push('/mobres/'+random)
        }

    }
  }
}
</script>