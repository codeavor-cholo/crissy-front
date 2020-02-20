<template>
  <q-layout view="hHh lpR fff">

    <q-header class="bg-grey-11 text-white row items-center" style="height:63px">
      <q-toolbar style="padding-left:100px">
        
         
        <img style="height:100%;width:70px" src="statics/pics/logo.png">
          
        
        <div class="row justify-between">

          <div class=" text-orange-4 q-pl-lg">
            <q-tabs v-model="tab">
            <q-route-tab name="ho"  to="/" ><b>Home</b></q-route-tab>
            <q-route-tab name="men" to="/menu"><b>Menu</b></q-route-tab>
            <q-route-tab name="gal" to=""><b>Gallery</b></q-route-tab>
            <q-route-tab name="pac" to="/packages"><b>Packages</b></q-route-tab>
            </q-tabs>
          </div>

          <div class="row items-center q-gutter-md" style="padding-right:30px;padding-left:260px">
          <q-btn-dropdown dense class="bg-orange-4" v-show="!show" text-color="white" label="Codeavor">
            <q-list>
              <q-item clickable v-close-popup @click="$router.push('/profile')">
                <q-item-section>
                  <q-item-label>My Account</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="show=!show, $router.push('/')">
                <q-item-section>
                  <q-item-label>Log OUt</q-item-label>
                </q-item-section>
              </q-item>

            </q-list>
          </q-btn-dropdown>  
          
            <q-btn flat text-color="black" label="Login" v-show="show" @click="show=!show"/>

              <q-input dense standout style="width:300px" v-model="search">
                  <template v-slot:append>
                  <q-icon name="search" color="orange" />
                  </template>
              </q-input>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view style="padding-left:100px;padding-right:100px;padding-top:50px;padding-bottom:50px" />
    </q-page-container>

    
    <q-footer class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="column items-center text-orange-4 q-pt-sm">
            <div style="font-size:20px;font-family: 'Josefin Sans', sans-serif;"><b>Crissy's Meal Magic Catering Services</b></div>
            <div style="font-size:17px"><b>Maricris Subia Vetores</b></div>
            <div class="row q-gutter-sm" style="font-size:13px">
              <q-icon name="perm_phone_msg" class="text-primary" style="font-size: 1.5rem;" />
              <div><b>0926 006 8364</b></div>
            </div>
            <div style="font-size:13px" class="row q-gutter-sm q-pb-sm">
              <q-icon name="place" class="text-primary" style="font-size: 1.5rem;" />
              <div><b>83 Pangasinan Street Brgy. Santo Cristo, 1105 Quezon City, Philippines</b></div>
            </div>  
          </div>  
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: 'ho',
      search: '',
      show: true
    }
  }
}
</script>
