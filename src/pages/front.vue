<template>
<q-page>
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
            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/food.jpeg">
                <q-card-section align="left" style="margin:3px;padding:1px">
                <div class="row">
                <div class="column">       
                <div class="q-pt-sm">     
                <b>Breakfast Food</b>
                </div>
                <div class="text-subtitle2">20 items</div>
                </div>
                </div>
                </q-card-section>
            </q-card>

            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/food.jpeg">
                <q-card-section align="left" style="margin:3px;padding:1px">
                <div class="row">
                <div class="column">       
                <div class="q-pt-sm">     
                <b>Breakfast Food</b>
                </div>
                <div class="text-subtitle2">20 items</div>
                </div>
                </div>
                </q-card-section>
            </q-card>

            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/food.jpeg">
                <q-card-section align="left" style="margin:3px;padding:1px">
                <div class="row">
                <div class="column">       
                <div class="q-pt-sm">     
                <b>Breakfast Food</b>
                </div>
                <div class="text-subtitle2">20 items</div>
                </div>
                </div>
                </q-card-section>
            </q-card>

            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/food.jpeg">
                <q-card-section align="left" style="margin:3px;padding:1px">
                <div class="row">
                <div class="column">       
                <div class="q-pt-sm">     
                <b>Breakfast Food</b>
                </div>
                <div class="text-subtitle2">20 items</div>
                </div>
                </div>
                </q-card-section>
            </q-card>

            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/food.jpeg">
                <q-card-section align="left" style="margin:3px;padding:1px">
                <div class="row">
                <div class="column">       
                <div class="q-pt-sm">     
                <b>Breakfast Food</b>
                </div>
                <div class="text-subtitle2">20 items</div>
                </div>
                </div>
                </q-card-section>
            </q-card>
       
        </div>    
        
        <div class="float-right">
          <q-btn flat text-color="black" label="See More..." @click="$router.push('/menu')"/>
        </div>
        
        <div class="q-pt-xl" style="font-size:30px;font-family: 'Bree Serif', serif;"><b>Avail our packages to get discounts.</b></div>
        <div class="q-pt-lg row justify-around">
            <q-card bordered class="bg-white my-card" style="max-width:500px">
            <q-card-section class="column items-center">
              <img style="height:100%;width:100px" src="statics/pics/logo.png">
              <div style="font-size:50px;font-family: 'Lobster', cursive;">The Paradise</div>
              <div style="font-size:13px"><b>170 per Head</b></div>
              <div style="font-size:15px"><b>MENU</b></div>
            </q-card-section>
            
            <div class="row items-center justify-center">
              <div class="col">
                <q-card-section class="column q-gutter-sm items-center">
                  <div class="" style="font-size:17px"><b>MAIN DISH</b></div>
                  <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                  <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                  <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
                </q-card-section>
              </div>
              <q-separator vertical color="black" />
              <div class="col">
                <q-card-section class="column q-gutter-sm items-center">
                  <div class="" style="font-size:17px"><b>SIDE DISH</b></div>
                  <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                  <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                  <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
                </q-card-section>
              </div>
            </div>
            
            <div class="q-py-md column items-center q-gutter-sm">
              <div style="font-size:17px"><b>Dessert</b></div>
                <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
            </div>    
          </q-card>

          <q-card bordered class="bg-white my-card" style="max-width:500px">
            <q-card-section class="column items-center">
              <img style="height:100%;width:100px" src="statics/pics/logo.png">
              <div style="font-size:50px;font-family: 'Lobster', cursive;">The Paradise</div>
              <div style="font-size:13px"><b>170 per Head</b></div>
              <div style="font-size:15px"><b>MENU</b></div>
            </q-card-section>
            
            <div class="row items-center justify-center">
              <div class="col">
                <q-card-section class="column q-gutter-sm items-center">
                  <div class="" style="font-size:17px"><b>MAIN DISH</b></div>
                  <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                  <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                  <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
                </q-card-section>
              </div>
              <q-separator vertical color="black" />
              <div class="col">
                <q-card-section class="column q-gutter-sm items-center">
                  <div class="" style="font-size:17px"><b>SIDE DISH</b></div>
                  <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                  <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                  <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
                </q-card-section>
              </div>
            </div>
            
            <div class="q-py-md column items-center q-gutter-sm">
              <div style="font-size:17px"><b>Dessert</b></div>
                <div class="q-pt-sm" style="font-size:12px">Lentif Salad with Cumin and Garlic</div>
                <div style="font-size:12px">Tabbouich with Mint and Parsier Puree</div>
                <div style="font-size:12px">Bobo Ghanoush with Pita Bread</div>
            </div>    
          </q-card>
            </div>

            <div class="float-right q-pt-sm">
              <q-btn flat text-color="black" label="See More..." @click="$router.push('/packages')"/>
            </div>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      eventType: '',
      Event: []
    }
  },
  mounted(){
      this.$binding('Event', this.$firestoreApp.collection('Event'))
      .then(Event => {
      console.log(Event, 'Event')
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
      }


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
  }
}
</script>