<template>
  <q-layout view="hHh lpR fff">

<!-- START OF DESKTOP HEADER -->
    <div class="desktop-only">
    <q-header class="bg-grey-11 text-white row items-center" style="height:63px">
      <q-toolbar style="padding-left:100px">
                
        <img style="height:100%;width:70px" src="statics/pics/logo.png">
                 
        <div class="row justify-between">
          <div class=" text-orange-4 q-pl-lg">
            <q-tabs v-model="tab">
            <q-route-tab name="ho"  to="/" ><b>Home</b></q-route-tab>
            <q-route-tab name="men" to="/menu"><b>Menu</b></q-route-tab>
            <q-route-tab name="gal" to="/"><b>Gallery</b></q-route-tab>
            <q-route-tab name="pac" to="/packages"><b>Packages</b></q-route-tab>
            </q-tabs>
          </div>

          <div class="row items-center q-gutter-md" style="padding-right:30px;padding-left:260px">
          <q-btn-dropdown dense  v-show="!show" text-color="orange-8" :label="displayName" flat="">
            <q-list>
              <q-item clickable v-close-popup @click="$router.push('/profile')">
                <q-item-section>
                  <q-item-label>My Account</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable v-close-popup @click="tempLogout">
                <q-item-section>
                  <q-item-label>Log Out</q-item-label>
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
    </div>
<!-- END OF DESKTOP HEADER -->

<!-- START OF MOBILE HEADER -->
    <div class="mobile-only">
    <q-header class="bg-grey-11 text-white">
      <q-toolbar>
        <div class="row q-py-sm items-center">        
        <div class="q-pr-lg"><img style="height:100%;width:60px" src="statics/pics/logo.png"></div>
        <div class="q-pl-xl row items-center">
          
          <q-input dense standout style="width:120px" v-model="search">
            <template v-slot:append>
              <q-icon name="search" color="orange" />
            </template>
          </q-input>
          
          <q-btn flat text-color="orange-7" style="font-size: 1.3em;" icon="account_circle" v-show="show" @click="show=!show"/>
          
          <q-btn-dropdown dense style="font-size: 1.3em;" icon="account_circle" v-show="!show" text-color="orange-8" flat="">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label :label="displayName"></q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="$router.push('/profile')">
                <q-item-section>
                  <q-item-label>My Account</q-item-label>
                </q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="tempLogout">
                <q-item-section>
                  <q-item-label>Log Out</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
          </div>
          
      </q-toolbar>

      <div class="bg-grey-3  text-orange-4">
            <q-tabs v-model="tab">
            <q-route-tab name="ho"  to="/" ><b>Home</b></q-route-tab>
            <q-route-tab name="men" to="/menu"><b>Menu</b></q-route-tab>
            <q-route-tab name="gal" to="/"><b>Gallery</b></q-route-tab>
            <q-route-tab name="pac" to="/packages"><b>Packages</b></q-route-tab>
            </q-tabs>
      </div>
    </q-header>
    </div>
<!-- END OF MOBILE HEADER -->

<!-- START OF DESKTOP PAGE -->
    <div class="desktop-only">
    <q-page-container>
      <router-view style="padding-left:100px;padding-right:100px;padding-top:50px;padding-bottom:50px" />
    </q-page-container>
    </div>
<!-- END OF DESKTOP PAGE -->

<!-- START OF MOBILE PAGE -->
    <div class="mobile-only">
    <q-page-container>
      <router-view style="padding-bottom:50px" />
    </q-page-container>
    </div>
<!-- END OF MOBILE PAGE -->

<!-- START OF DESKTOP FOOTER -->
    <div class="desktop-only">
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
    </div>
<!-- END OF DESKTOP FOOTER -->

<!-- START OF MOBILE FOOTER -->
    <div class="mobile-only">
    <q-footer class="bg-black text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="column items-center text-orange-4 q-pt-sm">
            <div style="font-size:16px;font-family: 'Josefin Sans', sans-serif;"><b>Crissy's Meal Magic Catering Services</b></div>
            <div style="font-size:14px"><b>Maricris Subia Vetores</b></div>
            <div class="row q-gutter-sm" style="font-size:13px">
              <q-icon name="perm_phone_msg" class="text-primary" style="font-size: 1rem;" />
              <div><b>0926 006 8364</b></div>
            </div>
            <div style="font-size:13px" class="row q-gutter-sm q-pb-sm">
              <q-icon name="place" class="text-primary" style="font-size: 1rem;" />
              <div class="column items-center">
                <div><b>83 Pangasinan Street Brgy. Santo Cristo,</b></div>
                <div><b>1105 Quezon City, Philippines</b></div>
              </div>
            </div>  
          </div>  
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
    </div>
<!-- END OF MOBILE FOOTER -->
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: 'ho',
      search: '',
      show: true,
      displayName: ''
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
                self.show = false
                self.displayName = gg.displayName
                
              } else {
                self.show = true
              }
          })
  },
  methods:{
        tempLogout(){
            this.$q.dialog({
                title: `Are you sure you want to logout?`,
                type: 'negative',
                color: 'pink-3',
                class: 'text-grey-8',
                icon: 'warning',
                ok: 'Ok',
                cancel: 'Cancel',
                persistent: true
                
            }).onOk(()=>{
              this.$firebase.auth().signOut()
              .then(()=>{
                console.log('no user')
                this.show = false
                this.displayName = ''
                this.$router.push('/')
                location.reload()
              })
              // 
              // remove this comment if you are done with the testing
            })
    },
  }
}
</script>
