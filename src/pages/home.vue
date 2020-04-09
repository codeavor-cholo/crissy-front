<template>
  <q-layout view="hHh lpR fff">

    <div class="fixed-center mobile-only" v-show="splashscreen">
      <div class="q-pa-sm" >
          <img class="col" style="width:250px;height:100%" src="statics/pics/logo.png">
      </div>

      <div class="row justify-center">
      <q-spinner-pie
        color="orange-7"
        size="5em"
      />
      <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
      </div>
    </div>

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
          
            <q-btn flat text-color="black" label="Login" v-show="show" @click="login = true"/>

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
    <div class="mobile-only" v-show="!splashscreen">
    <q-header class="bg-grey-11 text-white">
      <q-toolbar class="q-py-sm">                
        <img style="height:100%;width:60px" src="statics/pics/logo.png">
                 <q-space />
                 <q-space />
          <q-input dense standout style="width:200px" v-model="search">
            <template v-slot:append>
              <q-icon name="search" color="orange" />
            </template>
          </q-input>
          
          <q-btn flat text-color="orange-7" style="font-size: 1.3em;" icon="account_circle" v-show="show" @click="loginmob = true"/>
          
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
    <div class="mobile-only" v-show="!splashscreen">
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
    <div class="mobile-only" v-show="!splashscreen">
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

<!-- START OF LOGIN DIALOG DESKTOP -->
    <div class="desktop-only">
    <q-dialog v-model="login">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Login Account</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <q-input v-model="clientEmail" type="email" label="Enter Email Address" style="width:420px;" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <q-input v-model="clientPassword" type="password" label="Enter Password" style="width:420px;" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <div class="row q-px-md q-mt-md">
                                
          <q-btn color="orange-7"  label="LOGIN VIA GOOGLE" @click="loginGoogle" class="col-5"/>
          <div class="text-overline text-center col-2">OR</div>
          <q-btn color="grey" label="LOGIN account" class="col"/>

          </div>
          
        </q-card-section>

        <q-card-section class="q-pt-none q-mb-md text-center">
          
          
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
<!-- END OF LOGIN DIALOG DESKTOP -->

<!-- START OF LOGIN DIALOG MOBILE -->
    <div class="mobile-only" v-show="!splashscreen">
    <q-dialog v-model="loginmob">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-center">Login Account</div>
        </q-card-section>

        <q-card-section class="q-pt-none text-center">
          <q-input v-model="clientEmail" type="email" label="Enter Email Address" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <q-input v-model="clientPassword" type="password" label="Enter Password" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          
          <div class="row q-px-md items-center q-mt-md">                     
          <q-btn color="orange-7"  label="LOGIN VIA GOOGLE" @click="loginGoogle" class="col-5"/>
          <div class="text-overline text-center col-2">OR</div>
          <q-btn color="grey" label="LOGIN account" class="col"/>

          </div>
          
        </q-card-section>

        <q-card-section class="q-pt-none q-mb-md text-center">
          
          
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
<!-- END OF LOGIN DIALOG MOBILE -->

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      tab: 'ho',
      login: false,
      splashscreen: true,
      loginmob: false,
      clientEmail: '',
      clientPassword: '',
      search: '',
      show: true,
      displayName: ''
    }
  },
  created() {
          setTimeout(() => {
          this.splashscreen=false;
          // console.log('sdf')
          }, 7000)

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
        loginGoogle(){
        var provider = new this.$firebase.auth.GoogleAuthProvider();
        this.$firebase.auth().signInWithPopup(provider)
        .then((result)=>{
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log('token',token)
          console.log('user',user)

          var uid = user.uid

          //save user details in database with token / set to update always when login in
          let newUser = {
            gAccessToken: token,
            displayName: user.displayName,
            email: user.email,
            emailVerified: user.emailVerified,
            refreshToken: user.refreshToken
          }

          this.$firestoreApp.collection('Customers').doc(uid).set(newUser)
          .then(()=>{
            console.log('saved user')
            //save progress for future reference
            // console.log('progress', this.returnProgress)

          })

          console.log('newUser',newUser)

        }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        console.log('error',errorCode)
        console.log('error',errorMessage)
        this.$q.dialog({
            title: errorCode,
            message: errorMessage,
            color: 'pink-6',
            textColor: 'grey',
            icon: 'negative',
            ok: 'Ok'
        })
        // ...
        });
                  
    },
        tempLogout(){
            this.$q.dialog({
                title: `Are you sure you want to logout?`,
                type: 'negative',
                color: 'orange-7',
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
