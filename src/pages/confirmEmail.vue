<template>
    <q-page class="absolute-center q-mt-xl q-pa-md">
        <div v-if="returnType == 'pending'">
            <div class="text-h6">Please verify your email <span class="text-orange-7">{{email}}</span>.</div>
            <div>We have sent an verification email to your email.</div>
            <div class="q-mt-md q-gutter-md">
                <q-btn color="grey-10" icon-right="send" label="Resend" @click="resendEmail" />
                <q-btn flat color="grey-10" icon="check" label="click here if you already verified your email" @click="clickThis" />
            </div>
        </div>
        <div v-else>
            <div class="text-h6">Your email <span class="text-orange-7">{{email}} </span> has been verified.</div>
            <div>Go to our home page to start with your event reservation.</div>
            <div class="row q-mt-md">
                <q-btn color="grey-10" icon-right="house" label="home" @click="$router.push('/')" />
            </div>            
        </div>

    </q-page>
</template>
<script>
export default {
    data(){
        return {
            email: 'codeavor.online@gmail.com',
            type: '',
            userLogged: this.$firebase.auth().currentUser
        }
    },
    created(){

        let self = this
        this.$firebase.auth().onAuthStateChanged(function(user) {
            
            if(user){
                self.email = user.email
            } else {
                self.$router.push('/')
            }
                             //if mobile screen $q.screen.lt.sm 
        })
 
    },
    watch:{
        userLogged: function(news){
            console.log(news,'user logged new')
            if(news.emailVerified){
                this.type = 'verified'
            }
        }
    },
    computed:{
        returnType(){
            try {
                
                let user = this.userLogged
                if(user.emailVerified){
                    this.type = 'verified'
                } else {
                    this.type = 'pending'
                }     
                return this.type          
            } catch (error) {
                console.log(error,'returnType')
                return 'pending'
            }
        },
    },
    methods:{
        updateName(){
            var user = this.$firebase.auth().currentUser;


            user.updateProfile({
                displayName: "Jane Q. User",
            })
        },
        resendEmail(){
            var user = this.$firebase.auth().currentUser;
            user.sendEmailVerification().then(function() {
                  console.log('email sent')
            })
        },
        returnUser(){
            return ''
        },
        clickThis(){
            this.$firebase.auth().currentUser.reload()
            let user = this.$firebase.auth().currentUser
            console.log(user,'user reload')
            if(user.emailVerified == false){
              this.$q.dialog({
                  title: 'Email still not verified',
                  message: 'Try resending the verification email',
                  type: 'negative',
                  color: 'orange-7',
                  class: 'text-grey-8',
                  icon: 'warning',
                  ok: 'Ok',
                  persistent: true
                  
              }).onOk(()=>{
              })                  
            } else {
                this.userLogged = user
                this.type = 'verified'
            }
        }
    }
}
</script>
