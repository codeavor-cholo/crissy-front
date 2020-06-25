<template>
    <q-page class="absolute-center q-mt-xl q-pa-md">
        <div v-if="returnType == 'pending'">
            <div class="text-h6">Please verify your email <span class="text-orange-7">{{email}}</span>.</div>
            <div>We have sent an verification email to your email.</div>
            <q-banner class="bg-warning text-white q-mt-md">Note: After verifying please refresh this page to confirm your verification.</q-banner>
            <div class="row q-mt-md">
                <q-btn color="grey-10" icon-right="send" label="Resend" @click="resendEmail" />
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
            
            if(user.emailVerified){
                self.userLogged = {...user}
                self.email = user.email
            } else {
                self.userLogged = {...user}
                self.type = 'pending'
                self.email = user.email
            }                                //if mobile screen $q.screen.lt.sm 
        })

    },
    watch:{
        userLogged: function(news){
            console.log(news,'news')
            if(news.emailVerified){
                self.type = 'verified'
            }
        }
    },
    computed:{
        returnType(){
            try {
                let user = this.$firebase.auth().currentUser
                this.userLogged = {...user}
                console.log(this.userLogged,'user')
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
        }
    }
}
</script>
