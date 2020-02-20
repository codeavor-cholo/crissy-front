<template>
<q-page>
        <div>
            <q-img src="statics/pics/foo.jpeg" style="height:400px">
            <q-card dark elevated class="my-card no-shadow text-white q-mx-xl q-mt-xl" style="height:250px;padding-left:400px;background: rgba(0, 0, 0, 0)">
            <q-card-section class="q-pa-sm">
            <div class="column items-center">
            <div style="font-size:75px;font-family: 'Arvo', serif;">The Art Of Food</div>
            
            </div>
            <div style="font-size:30px;font-family: 'Arvo', serif;">Great tastes at affordable prices.</div>
            </q-card-section>
            </q-card>
            </q-img>
        </div>

        <div class="row justify-between q-pt-lg">
            <q-img src="statics/pics/food.jpeg" style="height:400px;width:550px" />    
            <div>
             <q-card flat class="my-card bg-grey-2 column justify-center" style="height:400px;width:550px">
                <q-card-section>
                    <div class="column items-center q-pa-sm q-pb-lg" style="font-size:30px;font-family: 'Arvo', serif;"><b>BOOK YOUR EVENT NOW</b></div>
                    <div class="column q-gutter-lg">
                    <q-input dense filled v-model="name" label="Event Name" />
                    <q-input dense filled v-model="pax" label="Number of Attendees" />
                    </div>
                    <div class="q-pa-sm q-pt-lg column items-center">
                    <q-btn dense style="width:250px;height:50px" color="orange-4" text-color="white" @click="$router.push('/reservation')" label="PROCEED TO RESERVATION" />
                    </div>
                </q-card-section>
             </q-card>
        </div>
        </div>

        <div class="q-pt-lg" style="font-size:30px;font-family: 'Bree Serif', serif;"><b>Enjoy our tasty foods to your heart's content.</b></div>
        <div class="q-py-lg row q-gutter-lg">
            <q-card class="my-card" style="width:200px;height:200px">
                <img src="statics/pics/foo.jpeg">
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
                <img src="statics/pics/foo.jpeg">
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
                <img src="statics/pics/foo.jpeg">
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
                <img src="statics/pics/foo.jpeg">
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
                <img src="statics/pics/foo.jpeg">
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
        <div class="q-pt-lg row q-gutter-lg">
            <q-card class="my-card" style="width:350px">
                <q-card-section class="column items-center">
                  <img style="height:100%;width:100px" src="statics/pics/logo.png">
                  <div style="font-size:50px;font-family: 'Lobster', cursive;">The Paradise</div>
                  <div style="font-size:15px"><b>CATERING MENU</b></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>STARTER</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Lentif Salad with Cumin and Garlic</i></div>
                  <div style="font-size:12px"><i>Tabbouich with Mint and Parsier Puree</i></div>
                  <div style="font-size:12px"><i>Bobo Ghanoush with Pita Bread</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>ENTREE</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Chicken Souviaki with Tzatziki Sauce</i></div>
                  <div style="font-size:12px"><i>Beef Falafel with Walnuts and Red Pepper</i></div>
                  <div style="font-size:12px"><i>Chickpea Stew with Saffron and Roasted Onions</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>DESSERT</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Turkish Delight Cheesecake</i></div>
                  <div style="font-size:12px"><i>Semolina Almond-Anis Tea Cake</i></div>
                  <div style="font-size:12px"><i>Knafeh with Orange Blossom Syrup</i></div>
                </q-card-section>
              </q-card>

              <q-card class="my-card" style="width:350px">
                <q-card-section class="column items-center">
                  <img style="height:100%;width:100px" src="statics/pics/logo.png">
                  <div style="font-size:50px;font-family: 'Lobster', cursive;">The Paradise</div>
                  <div style="font-size:15px"><b>CATERING MENU</b></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>STARTER</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Lentif Salad with Cumin and Garlic</i></div>
                  <div style="font-size:12px"><i>Tabbouich with Mint and Parsier Puree</i></div>
                  <div style="font-size:12px"><i>Bobo Ghanoush with Pita Bread</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>ENTREE</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Chicken Souviaki with Tzatziki Sauce</i></div>
                  <div style="font-size:12px"><i>Beef Falafel with Walnuts and Red Pepper</i></div>
                  <div style="font-size:12px"><i>Chickpea Stew with Saffron and Roasted Onions</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>DESSERT</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Turkish Delight Cheesecake</i></div>
                  <div style="font-size:12px"><i>Semolina Almond-Anis Tea Cake</i></div>
                  <div style="font-size:12px"><i>Knafeh with Orange Blossom Syrup</i></div>
                </q-card-section>
              </q-card>

              <q-card class="my-card" style="width:350px">
                <q-card-section class="column items-center">
                  <img style="height:100%;width:100px" src="statics/pics/logo.png">
                  <div style="font-size:50px;font-family: 'Lobster', cursive;">The Paradise</div>
                  <div style="font-size:15px"><b>CATERING MENU</b></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>STARTER</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Lentif Salad with Cumin and Garlic</i></div>
                  <div style="font-size:12px"><i>Tabbouich with Mint and Parsier Puree</i></div>
                  <div style="font-size:12px"><i>Bobo Ghanoush with Pita Bread</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>ENTREE</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Chicken Souviaki with Tzatziki Sauce</i></div>
                  <div style="font-size:12px"><i>Beef Falafel with Walnuts and Red Pepper</i></div>
                  <div style="font-size:12px"><i>Chickpea Stew with Saffron and Roasted Onions</i></div>
                  <div class="q-pt-lg" style="color:#E4ACBF;font-size:15px"><b>DESSERT</b></div>
                  <div class="q-pt-sm" style="font-size:12px"><i>Turkish Delight Cheesecake</i></div>
                  <div style="font-size:12px"><i>Semolina Almond-Anis Tea Cake</i></div>
                  <div style="font-size:12px"><i>Knafeh with Orange Blossom Syrup</i></div>
                </q-card-section>
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
      pax: ''
    }
  }
}
</script>