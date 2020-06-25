<template>
    <q-page id="page">
        <div id="noti" class="text-weight-bold">
           <span v-if="returnLengthForToday == 0">No </span><span v-else>{{returnLengthForToday.length}}</span> New Notifications
        </div>

        <div id="list">
            <q-list bordered separator>
                <div v-for="(notif,i) in returnWithUserUID" :key="i">
                <q-item clickable v-ripple  v-show="notif.typeOf == 'reserve'">
                    <q-item-section>         
                        
                        <div id="eve">{{notif.clientEvent}}</div>
                        <div class="q-pl-md q-py-sm">{{notif.notifStatus}}</div>
                        <q-item-label class="text-blue q-pr-lg" caption align="right">{{$moment(notif.dateTime).fromNow()}}</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable v-ripple  v-show="notif.typeOf == 'payment'">
                    <q-item-section>         
                        
                        <div id="eve">{{notif.message}}</div>
                        <div class="q-pl-md q-py-sm text-uppercase"># {{notif.paymentKey}}</div>
                        <div class="q-pl-md ">₱ {{formatNumber(notif.amount)}}.00</div>
                        <q-item-label class="text-blue q-pr-lg" caption align="right">{{$moment(notif.dateTime).fromNow()}}</q-item-label>
                    </q-item-section>
                </q-item>
                </div>
            </q-list>
        </div>
    </q-page>
</template>
<script>
import { date } from 'quasar'
export default {
    data(){
        return {
            ClientNotifications: [],
            Reservation: [],
            AdminNotifications: []
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
    created(){

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

                return this.$lodash.orderBy(join,b=>{
                    return new Date(b.dateTime)
                },'desc')
            } catch (error) {
                console.log(error,'returnWithUserUID')
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
        formatNumber(num) {
            return parseInt(num).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
        },
    }
}
</script>


<style type = "text/css">
    /* #page {
        padding-top:50px;
    } */
    #noti {
        font-size:30px;
        padding-left:10px;
        padding-bottom:10px;
        padding-top:25px;
    }
    #eve {
        font-size:20px;
        font-weight: bold;
    }
    #row {
        padding-right:25px;
    }

@media only screen and (min-width: 1200px) {
  #noti {
      padding-top:45px;
      padding-bottom:20px;
      font-size:30px;
      padding-left:370px;
  }
  #list{
      padding-left:370px;
      padding-right:370px;
  }
}

</style>