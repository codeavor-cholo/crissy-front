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
            <q-route-tab name="gal" to="/gallery"><b>Gallery</b></q-route-tab>
            <q-route-tab name="pac" to="/packages"><b>Packages</b></q-route-tab>
            </q-tabs>
          </div>

          <div class="row items-center q-gutter-md" style="padding-right:30px;padding-left:260px">
          <div>
              <q-btn dense flat style="font-size: 1.3em;" round icon="notifications" text-color="orange-4" color="white" @click="$router.push('/notification')">
                <q-badge color="black" text-color="white" :label="returnLengthForToday.length" floating v-show="returnLengthForToday !=0"/>
              </q-btn>
          </div>  
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
    <div class="mobile-only">
    <q-header class="bg-grey-11 text-white">
      <q-toolbar class="q-py-sm">                
        <img style="height:100%;width:60px" src="statics/pics/logo.png">
                 <q-space />
                 <q-space />
          <q-input dense standout style="width:180px" v-model="search">
            <template v-slot:append>
              <q-icon name="search" color="orange" />
            </template>
          </q-input>
          
          <div>
              <q-btn dense flat style="font-size: 1.3em;" round icon="notifications" text-color="orange-4" color="white" @click="$router.push('/notification')">
                <q-badge color="black" text-color="white" :label="returnLengthForToday.length" floating v-show="returnLengthForToday !=0"/>
              </q-btn>
          </div> 

          <q-btn flat dense text-color="orange-7" style="font-size: 1.3em;" icon="account_circle" v-show="show" @click="loginmob = true"/>
          
          <q-btn dense style="font-size: 1.3em;" icon="account_circle" v-show="!show" @click="$router.push('/profilemob')" text-color="orange-8" flat="" />          
      </q-toolbar>

      <div class="bg-grey-3  text-orange-4">
            <q-tabs v-model="tab">
            <q-route-tab name="ho"  to="/" ><b>Home</b></q-route-tab>
            <q-route-tab name="men" to="/menu"><b>Menu</b></q-route-tab>
            <q-route-tab name="gal" to="/gallery"><b>Gallery</b></q-route-tab>
            <q-route-tab name="pac" to="/packages"><b>Packages</b></q-route-tab>
            </q-tabs>
      </div>
    </q-header>
    </div>
<!-- END OF MOBILE HEADER -->

<!-- START OF DESKTOP PAGE -->
    <div class="desktop-only">
    <q-page-container>
      <router-view style="padding-left:100px;padding-right:100px;padding-top:50px;padding-bottom:130px" />
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
          <q-btn color="grey" label="LOGIN account" class="col" @click="loginUserSignIn"/>

          </div>
          
        </q-card-section>

        <q-card-section class="q-pt-none q-mb-sm text-center">
          <div class="">Don't have a account ? <q-btn color="orange-7" flat v-close-popup label="create one here"  dense @click="registerDialog = true" /></div>
          
        </q-card-section>
      </q-card>
    </q-dialog>

    </div>
<!-- END OF LOGIN DIALOG DESKTOP -->

<!-- START OF LOGIN DIALOG MOBILE -->
    <div class="mobile-only">
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
          <q-btn color="grey" label="LOGIN account" class="col" @click="loginUserSignIn"/>

          </div>
          <div class="">Don't have a account ? <q-btn color="orange-7" flat v-close-popup label="create one here"  dense @click="registerDialog = true" /></div>
          
        </q-card-section>

        <q-card-section class="q-pt-none q-mb-md text-center">
          
          
        </q-card-section>
      </q-card>
    </q-dialog>
    </div>
<!-- END OF LOGIN DIALOG MOBILE -->v
    <q-dialog v-model="registerDialog" persistent>
      <q-card style="width:80vw">
        <q-card-section class="row items-center">
          <div class="text-h6 text-center col text-orange-7 text-weight-bold">Register for an Account</div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="registerName" type="text" label="Enter Full Name" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <q-input v-model="registerEmail" type="email" label="Enter Email Address" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <q-input v-model="registerPassword" type="password" label="Enter Password" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
          <q-input v-model="registerConfirmPassword" type="password" label="Confirm Password" class="q-pa-sm q-px-md" outlined="" color="orange-7" dense/>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="cancel" color="grey" v-close-popup />
          <q-btn flat label="Register" color="orange-7" v-close-popup @click="registerUser"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import { date, QDialog } from 'quasar'
export default {
  data () {
    return {
      tab: 'ho',
      login: false,
      loginmob: false,
      clientEmail: '',
      registerName: '',
      registerEmail:'',
      registerPassword: '123456',
      registerConfirmPassword: '123456',
      clientPassword: '',
      search: '',
      show: true,
      displayName: '',
      ClientNotifications: [],
      Reservation: [],
      AdminNotifications: [],
      registerDialog: false,

    }
  },
  mounted(){
      this.$binding('ClientNotifications', this.$firestoreApp.collection('ClientNotifications'))
      .then(ClientNotifications => {
      console.log(ClientNotifications, 'ClientNotifications')
      }),
      this.$binding('Reservation', this.$firestoreApp.collection('Reservation'))
      .then(Reservation => {
      console.log(Reservation, 'Reservation')
      }),
      this.$binding('AdminNotifications', this.$firestoreApp.collection('AdminNotifications'))
      .then(AdminNotifications => {
      console.log(AdminNotifications, 'AdminNotifications')
      })
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
                self.displayName = gg.displayName
                //if mobile screen $q.screen.lt.sm
                if(self.$q.platform.is.cordova){
                  self.$router.push('/login')
                } else {
                  // self.$router.push('/')
                  self.$router.push('/')
                  self.show = true
                }
              }
          })
  },
  computed:{
        returnWithUserUID(){
            try {
                let user = this.$firebase.auth().currentUser
                console.log(user,'user')
                let reserve = this.Reservation.filter(a=>{
                    a.typeOf = 'reserve'
                    return a.clientUID == user.uid
                })


                let keys = this.$lodash.map(reserve,a=>{
                    return {
                        key: a['.key'],
                        data: a,
                        typeOf: a.typeOf
                    }
                })
                
                console.log('keys',keys)
                console.log(this.ClientNotifications,'ClientNotifications')

                let myNotifs = []
                this.ClientNotifications.forEach(b=>{
                    let status = b.status
                    let data = this.getDataOfReservations(keys,b.reservationKey)
                    console.log(status,'status')
                    let notif
                    if(data == null){
                    notif = null
                    } else {
                    notif = data.data
                    notif.dateTime = b.dateTime
                    notif.notifStatus = b.status
                    }
                    return notif !== null
                    console.log(notif,'notif')
                    myNotifs.push(notif)
                })
    
                let join = myNotifs.concat(this.getPaymentNotifs)
                console.log(this.$lodash.orderBy(join,'dateTime','desc'),'ordersss')

                return this.$lodash.orderBy(join,'dateTime','desc')
            } catch (error) {
                return []
            }
        },
        getPaymentNotifs(){
            try {
                let user = this.$firebase.auth().currentUser

                let filter = this.AdminNotifications.filter(a=>{
                    a.typeOf = 'payment'
                    return a.userID == user.uid && a.message == "Payment Recieved!"
                })

                return filter
            } catch (error) {
                return []
            }
        },
        returnLengthForToday(){
            try {
                return this.returnWithUserUID.filter(a=>{
                    return date.formatDate(a.dateTime,'MM-DD-YYYY') == date.formatDate(new Date(),'MM-DD-YYYY')
                })
            } catch (error) {
              console.log(error,'error')
                return 0
            }
        }
  },
  methods:{
        getDataOfReservations(array,key){
            try {
                return this.$lodash.filter(array,a=>{
                        return key == a.key
                    })[0]
            } catch (error) {
                return null
            }
        },
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
          this.login = false
          this.loginmob = false

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
    registerUser(){
      try {
        if(this.registerEmail == '' || this.registerName == '' || this.registerPassword == '' || this.registerConfirmPassword == ''){
          this.$q.dialog({
              title: `Fill up all required fields`,
              type: 'negative',
              color: 'orange-7',
              class: 'text-grey-8',
              icon: 'warning',
              ok: 'Ok',
              persistent: true
              
          }).onOk(()=>{
            this.registerDialog = true
          })
        } else {

          if(this.registerPassword !== this.registerConfirmPassword){
            this.$q.dialog({
                title: `Password does not match`,
                type: 'negative',
                color: 'orange-7',
                class: 'text-grey-8',
                icon: 'warning',
                ok: 'Ok',
                persistent: true
                
            }).onOk(()=>{
              this.registerPassword = ''
              this.registerConfirmPassword = ''
              this.registerDialog = true
            })
          } else {
            let vm = this
            this.$firebase.auth().createUserWithEmailAndPassword(this.registerEmail, this.registerPassword)
            .then((res)=>{
              console.log(res,'result')
              let user = this.$firebase.auth().currentUser
              user.sendEmailVerification().then(function() {
                  console.log('email sent')
                  
                  let newUser = {
                      gAccessToken: '',
                      displayName: vm.registerName,
                      email: vm.registerEmail,
                      emailVerified: user.emailVerified,
                      refreshToken: user.refreshToken
                  }     

                  vm.$firestoreApp.collection('Customers').doc(user.uid).set(newUser)
                  .then(()=>{
                    user.updateProfile({
                        displayName: vm.registerName,
                    })
                    vm.$router.push('confirmEmail/pending')                    
                    console.log('saved user')
                    console.log('newUser',newUser)  
                  })
                  .catch((error)=>{
                  console.log(error,'error saving registrants')
                  })

              }).catch(function(error) {
                  console.log(error,'error email')
              });
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode,'error')
              console.log(errorMessage,'error')
              self.$q.dialog({
                  title: errorCode,
                  message: errorMessage,
                  type: 'negative',
                  color: 'orange-7',
                  class: 'text-grey-8',
                  icon: 'warning',
                  ok: 'Ok',
                  persistent: true
                  
              }).onOk(()=>{
                self.registerDialog = true
              })                
              // ...
            });


          }

        }
   
      } catch (error) {
        console.log(error,'registerUser')
      }
    },
    loginUserSignIn(){
      let self = this
      this.$firebase.auth().signInWithEmailAndPassword(this.clientEmail, this.clientPassword)
      .then(()=>{
        self.login = false
        self.loginmob = false
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        self.$q.dialog({
            title: errorCode,
            message: errorMessage,
            type: 'negative',
            color: 'orange-7',
            class: 'text-grey-8',
            icon: 'warning',
            ok: 'Ok',
            persistent: true
            
        }).onOk(()=>{
          self.login = true
          self.loginmob = true
        })        
        // ...
      });      
    }
  }
}
</script>
