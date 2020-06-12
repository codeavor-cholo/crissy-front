<template>
    <q-page>
        <div>
        
                <div>
                <q-tabs v-model="tab" indicator-color="transparent" active-color="orange-4" class="text-grey full-height relative-position" >
                <q-tab name="account" label="Account Details" />
                <q-tab name="reserve" label="Reservation Details" />
                <q-tab name="cancel" label="Cancelled Details" />
                <q-tab name="out" label="Logout" @click="tempLogout" />
                </q-tabs>
                </div>
           
                <q-tab-panels v-model="tab" animated class="transparent" transition-prev="jump-up" transition-next="jump-up" >
<!-- ACCOUNT AREA -->
                <q-tab-panel name="account">
                    <div style="font-size:30px;font-family: 'Montserrat', sans-serif;" class="q-pl-sm q-pb-sm">Account Details</div>
                    <q-card class="my-card">
                    <q-card-section>
                        <div class="text-right q-pb-sm">
                        <q-btn flat text-color="orange-7" label="Edit Profile" icon="settings" />
                        </div>
                        
                        <div>
                        
                        <q-img style="height:100%;width:300px" :src="userDetails.photoURL" />
                        
                        <div class="column justify-center q-pt-lg q-gutter-md">
                        <div class="q-pl-sm" style="font-family: 'Montserrat', sans-serif;">Name: {{userDetails.displayName}}</div>
                        <div class="q-pl-sm" style="font-family: 'Montserrat', sans-serif;">Contact Number: {{userDetails.phoneNumber}} <q-btn size="sm" color="orange-8" icon="add" label="add" rounded class="q-ml-md" v-show="userDetails.phoneNumber == null" /></div>
                        <div class="q-pl-sm" style="font-family: 'Montserrat', sans-serif;">Email Address: {{userDetails.email}}</div>
                        </div>
                        
                        </div>
                    </q-card-section>
                    </q-card>
                </q-tab-panel>
<!-- END OF ACCOUNT AREA -->
<!-- RESERVATION AREA -->
                <q-tab-panel name="reserve">
                    <div>
                        <div style="font-size:30px;font-family: 'Montserrat', sans-serif;" class="q-pl-sm">Reservation</div>
                        <q-input dense filled v-model="search_reserve" label="Search">
                                <template v-slot:prepend>
                                <q-icon name="search" color="orange"/>
                                </template>
                        </q-input>
                    </div>

                    <div class="q-pt-sm">
                    <q-tabs v-model="reservationtab" dense class="text-grey" active-color="orange-4" indicator-color="orange-4" align="justify" narrow-indicator >
                        <q-tab name="pending_res" label="Pending" />
                        <q-tab name="complete_res" label="Completed" />
                    </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="reservationtab" animated>
                        <q-tab-panel name="pending_res">
                            <div class="row q-gutter-md">
                              <q-table grid :data="returnClientReservations" :filter="search_reserve" :columns="columnss" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
                                <template v-slot:item="props">
                                <div>
                                    <q-card class="my-card rounded-borders" style="width:300px">
                                        <q-card-section>
                                                <div class="column items-center">
                                                <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                                </div>
                                                <div class="column items-center" style="font-size:25px;font-family: 'Lobster', cursive; "><b>{{props.row.clientFName}} {{props.row.clientLName}}</b></div>
                                                <div class="column q-gutter-sm q-pt-sm" style="font-family: 'Montserrat', sans-serif;">
                                                    
                                                        <div class="text-weight-bold">Package Name:</div>
                                                        <div class="text-right" v-if="props.row.clientSelectPackage === 'CUSTOMIZE'">{{props.row.clientSelectPackage}}</div>
                                                        <div class="text-right" v-else>{{props.row.clientSelectPackage.name}}</div>
                                                        
                                                    
                                                        <div class="text-weight-bold">Date:</div> 
                                                        <div class="text-right">{{$moment(props.row.clientReserveDate).format('LL')}}</div>
                                                   
                                                        <div class="text-weight-bold">Time:</div>
                                                        <div class="text-right">{{props.row.clientStartTime}} - {{props.row.clientEndTime}}</div>
                                                   
                                                        <div class="text-weight-bold">Number of Pax:</div>
                                                        <div class="text-right" v-show="props.row.clientPackageType != 'FIXED'">{{props.row.clientPax}} Guest</div><div><span v-show="props.row.clientPackageType === 'FIXED'">{{props.row.clientPaxDetails}}</span></div>                                 
                                                   
                                                    <div class="row justify-between q-px-md q-pt-sm q-gutter-md">
                                                    <q-btn dense class="bg-orange-4" @click="geteditNew(props.row)" text-color="white" label="View Details" />
                                                    <q-btn dense class="bg-orange-4" style="width:110px" @click="getedit(props.row)" text-color="white" label="Payment" />
                                                    </div>
                                                </div>
                                            
                                        </q-card-section>
                                    </q-card>
                                </div>
                                </template>
                              </q-table>
                            </div>

                        </q-tab-panel>

                        <q-tab-panel name="complete_res">
                           <div class="row q-gutter-md">
                              <q-table grid :data="returnClientFinishReservations" :columns="columnss" :filter="search_reserve" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
                                <template v-slot:item="props">
                                <div>
                                    <q-card style="width: 300px" class="my-card rounded-borders">
                                        <q-card-section>
                                                <div class="column items-center">
                                                <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                                </div>
                                                <div class="column items-center" style="font-size:25px;font-family: 'Lobster', cursive; "><b>{{props.row.clientFName}} {{props.row.clientLName}}</b></div>
                                                <div class="column q-gutter-sm q-pt-sm" style="font-family: 'Montserrat', sans-serif;">
                                                    
                                                        <div class="text-weight-bold">Package Name:</div>
                                                        <div class="text-right" v-if="props.row.clientSelectPackage === 'CUSTOMIZE'">{{props.row.clientSelectPackage}}</div>
                                                        <div class="text-right" v-else>{{props.row.clientSelectPackage.name}}</div>
                                                    
                                                        <div class="text-weight-bold">Date:</div> 
                                                        <div class="text-right">{{$moment(props.row.clientReserveDate).format('LL')}}</div>
                                                    
                                                        <div class="text-weight-bold">Time:</div>
                                                        <div class="text-right">{{props.row.clientStartTime}} - {{props.row.clientEndTime}}</div>
                                                    
                                                        <div class="text-weight-bold">Number of Pax:</div>
                                                        <div class="text-right" v-show="props.row.clientPackageType != 'FIXED'">{{props.row.clientPax}} Guest</div><div><span v-show="props.row.clientPackageType === 'FIXED'">{{props.row.clientPaxDetails}}</span></div>                                 
                                                    
                                                    <div class="row justify-between q-px-md q-pt-sm q-gutter-md">
                                                    <q-btn dense class="bg-orange-4" @click="geteditNew(props.row)" text-color="white" label="View Details" />
                                                    <q-btn style="width:110px" dense class="bg-orange-4" @click="getedit(props.row)" text-color="white" label="Payment" />
                                                    </div>
                                                </div>
                                            
                                        </q-card-section>
                                    </q-card>
                                </div>
                                </template>
                              </q-table>
                            </div>
                        </q-tab-panel>
                        </q-tab-panels>
                        </div>
                </q-tab-panel>
<!-- END OF RESERVATION AREA -->

                <q-tab-panel name="cancel">
                    <div>
                        <div style="font-size:30px;font-family: 'Montserrat', sans-serif;">Cancelled Events</div>
                        <q-input dense filled v-model="search_cancel" label="Search">
                                <template v-slot:prepend>
                                <q-icon name="search" color="orange"/>
                                </template>
                        </q-input>
                    </div>
                    <div class="column q-gutter-md">
                        <q-table grid :data="returnClientCancelled" :columns="columnss" :filter="search_cancel" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
                        <template v-slot:item="props">
                        <div class="q-pa-sm">
                            <q-card class="my-card rounded-borders" style="width:320px">
                                <q-card-section>
                                        <div class="column items-center">
                                        <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                        </div>
                                        <div class="column items-center" style="font-size:25px;font-family: 'Lobster', cursive; "><b>{{props.row.clientFName}} {{props.row.clientLName}}</b></div>
                                        <div class="column q-pt-sm" style="font-family: 'Montserrat', sans-serif;">
                                            
                                                <div class="text-weight-bold">Package Name:</div>
                                                <div class="text-right" v-if="props.row.clientSelectPackage === 'CUSTOMIZE'">{{props.row.clientSelectPackage}}</div>
                                                <div class="text-right" v-else>{{props.row.clientSelectPackage.name}}</div>
                                                
                                           
                                                <div class="text-weight-bold">Date:</div> 
                                                <div class="text-right">{{$moment(props.row.clientReserveDate).format('LL')}}</div>
                                           
                                                <div class="text-weight-bold">Time:</div>
                                                <div class="text-right">{{props.row.clientStartTime}} - {{props.row.clientEndTime}}</div>
                                            
                                                <div class="text-weight-bold">Number of Pax:</div>
                                                <div class="text-right"     v-show="props.row.clientPackageType != 'FIXED'">{{props.row.clientPax}} Guest</div><div><span v-show="props.row.clientPackageType === 'FIXED'">{{props.row.clientPaxDetails}}</span></div>                                 
                                            
                                            <div class="row q-px-md q-pt-sm justify-between">
                                            <q-btn dense class="bg-orange-4" @click="geteditNew(props.row)" text-color="white" label="View Details" />
                                            <q-btn dense class="bg-orange-4" style="width:110px" @click="getedit(props.row)" text-color="white" label="Payment" />
                                            </div>
                                        </div>
                                    
                                </q-card-section>
                            </q-card>
                        </div>
                        </template>
                        </q-table>
                    </div>
                </q-tab-panel>
                </q-tab-panels>
            
            </div>  

            <q-dialog v-model="detailsAndPayment" style="height:550px" full-width >
            <q-card class="my-card">
                <q-card-section>
                <div class="text-h6"></div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                <div class="column flex flex-center">
                    <q-img src="statics/pics/logo.png" :ratio="1" style="width:3.5em;" class="q-ml-sm"/>
                    <q-toolbar-title class="column items-center">
                        <strong style="font-size:19px">Crissy's Meal Magic Catering</strong>
                        <strong style="font-size:19px">Services</strong>
                    </q-toolbar-title>
                </div>
                <div class="column q-gutter-sm q-pt-sm">
                    
                        <b>FULLNAME: <i>{{this.selectedReservation.clientFName}} {{this.selectedReservation.clientLName}}</i></b> 
                        <b>PLACE OF EVENTS: <i>{{this.selectedReservation.clientPlace}} {{this.selectedReservation.clientCity}}</i></b>
                        <b v-if="this.selectedReservation.clientPackageType != 'FIXED'">PLACE OF EVENTS: <i>{{this.selectedReservation.clientPax}}Guest</i></b>
                        <b v-else>PAX: <i>{{this.selectedReservation.clientSelectPackage.adultPax}} Adults & {{this.selectedReservation.clientSelectPackage.kidPax}} Kids</i></b> 
                        <b>Motif: <i>{{this.selectedReservation.clientMotif}}</i></b>
                        <div v-if="this.selectedReservation.clientSelectTheme != ''">
                        <b v-for="(price, index) in this.selectedReservation.clientSelectTheme" :key="index">Theme: <i>{{price.themeName}}</i></b>
                        </div>
                        <div v-else>
                        <b>Theme: <i>NONE</i></b>
                        </div>
                    
                        <b>DATE OF EVENTS: <i>{{this.selectedReservation.clientReserveDate}}</i></b> 
                        <b>TIME: <i>{{this.selectedReservation.clientStartTime}} - {{this.selectedReservation.clientEndTime}}</i></b>
                        <b>EVENT: <i>{{this.selectedReservation.clientEvent}}</i></b>
                        <b>Email: <i>{{this.selectedReservation.clientEmail}}</i></b>
                        <b>Package Type: <i>{{this.selectedReservation.clientPackageType}} PACKAGE</i></b>
                    
                </div>
                <div class="q-py-md">
                    <q-separator inset />   
                </div>
                <div>   
                    <div>
                        <div>
                                <div class="column q-gutter-sm">                        
                                    <b>Total Payment: <i>P</i> {{this.selectedReservation.clientTotalPayment}}</b>
                                    <b>Paid Amount: <i>P</i> {{this.selectedReservation.clientPaidAmount}}</b>
                                    <b>Current Balance: <q-btn flat dense @click="payamount" color="orange-8"><i v-show="this.currentBalance != 0">P&nbsp;</i> {{this.currentBalance === 0 ? 'NO BALANCE' : this.currentBalance,}}</q-btn></b>
                                </div>
                                <div v-show="this.currentBalance != 0" class="q-pa-sm">
                                    <q-input dense type="number" class="col" color="orange-8" outlined v-model="enterAmount" label="Enter Amount To Pay"/>
                                </div>
                                <div class="q-py-md">
                                    <q-separator inset/>
                                </div>
                                <div v-show="this.currentBalance != 0" class="column items-center">
                                    <div class="column items-center text-weight-bold">Pay via Card</div>
                                </div>
                                <div v-show="this.currentBalance != 0" class="container q-pa-sm">
                                    <stripe-elements ref="elementsRef" color="orange-8" :pk="publishableKey" :amount="amount" @token="tokenCreated" @loading="loading = $event" outline class="col q-mr-md">
                                    </stripe-elements>
                                    <q-btn outlined color="orange-8" class="col full-width" @click="submit">PAY&nbsp;&nbsp;&nbsp;<b>PHP&nbsp;{{amountOnCard}}</b></q-btn>
                                    <!-- <button @click="submit">Pay ${{amount / 100}}</button> -->
                                </div>
                                <!-- <div v-show="this.currentBalance != 0" class="column items-center">
                                    <div class="column items-center text-weight-bold">Pay via Cash</div>
                                </div>
                                <div v-show="this.currentBalance != 0" class="q-pa-sm">
                                    <q-input type="number" readonly class="q-pa-sm full-width col" color="orange-8" outlined v-model="enterAmount" label="Amount To Pay on Cash"/>
                                    <q-btn outlined color="orange-8" class="col full-width" @click="updatePaymentCash">PAY&nbsp;&nbsp;&nbsp;<b>PHP&nbsp;{{enterAmount}}</b></q-btn>
                                </div> -->
                        </div>
                    </div>
                </div>        
                </q-card-section>
            </q-card>
        </q-dialog>



        <q-dialog v-model="reschedCancel" full-height >
            <q-card class="shadow-0" style="width: 1000px; max-width: 100vw;">
                <q-card-section>
                <div class="text-h6"></div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                <div class="column flex flex-center">
                    <q-img src="statics/pics/logo.png" :ratio="1" style="width:3.5em;" class="q-ml-sm"/>
                    <q-toolbar-title class="column items-center">
                        <strong style="font-size:19px">Crissy's Meal Magic Catering</strong>
                        <strong style="font-size:19px">Services</strong>
                    </q-toolbar-title>
                </div>
                <div class="column q-gutter-sm q-pt-sm">
                    
                        <b>FULLNAME: <i>{{this.selectedReservation.clientFName}} {{this.selectedReservation.clientLName}}</i></b> 
                        <b>Place: <i>{{this.selectedReservation.clientPlace}} {{this.selectedReservation.clientCity}}</i></b>
                        <b v-if="this.selectedReservation.clientPackageType != 'FIXED'">PAX: <i>{{this.selectedReservation.clientPax}}Guest</i></b>
                        <b v-else>PAX: <i>{{this.selectedReservation.clientSelectPackage.adultPax}} Adults & {{this.selectedReservation.clientSelectPackage.kidPax}} Kids</i></b> 
                        <b>Motif: <i>{{this.selectedReservation.clientMotif}}</i></b>
                        <div v-if="this.selectedReservation.clientSelectTheme != ''">
                        <b v-for="(price, index) in this.selectedReservation.clientSelectTheme" :key="index">Theme: <i>{{price.themeName}}</i></b>
                        </div>
                        <div v-else>
                        <b>Theme: <i>NONE</i></b>
                        </div>
                    
                        <b>DATE OF EVENTS: <i>{{this.selectedReservation.clientReserveDate}}</i></b> 
                        <b>TIME: <i>{{this.selectedReservation.clientStartTime}} - {{this.selectedReservation.clientEndTime}}</i></b>
                        <b>EVENT: <i>{{this.selectedReservation.clientEvent}}</i></b>
                        <b>Email: <i>{{this.selectedReservation.clientEmail}}</i></b>
                        <b>Package Type: <i>{{this.selectedReservation.clientPackageType}} PACKAGE</i></b>
                    
                </div>
                <div class="q-py-md">
                    <q-separator inset />           
                </div>
                <div class="column">
                    <div>
                        <q-item>
                        <span class="text-weight-bold">FOOD CHOICES</span>
                        </q-item>
                        <q-list dense v-for="(price, index) in this.selectedReservation.clientFoodChoice" :key="index">
                            <q-item>
                                <q-item-section>
                                <li> {{ price.foodName }}</li>
                                </q-item-section>
                            </q-item>
                        </q-list>
                        <span v-show="this.selectedReservation.clientAdditionalFood != ''" class="full-width text-weight-bold q-pl-md">Additional Food</span>
                        <q-list dense v-for="(price, index) in this.selectedReservation.clientAdditionalFood" :key="index">
                            <q-item>
                                <q-item-section>
                                <li> {{ price.foodName }}</li>
                                </q-item-section>
                            </q-item>
                        </q-list>
                    </div>
                    <div v-show="this.selectedReservation.clientPackageType != 'CUSTOMIZE'">
                        <q-item>
                            <span class="text-weight-bold " >INCLUSIONS</span>
                        </q-item>
                            <q-item dense v-for="(price, index) in this.returnFree.inclusions" :key="index" class="">
                                <q-item-section >
                                    <li>
                                        {{ price.inclusion }}
                                    </li>
                                </q-item-section>
                            </q-item>
                            <q-item dense v-for="(prices, indexes) in this.returnFree.addons" :key="indexes" class="">
                                <q-item-section >
                                <li> {{prices.addOnsQty}}x {{ prices.addons }}</li>
                                </q-item-section>
                            </q-item>
                            <q-item dense v-for="(priceses, indexeses) in this.returnFree.services" :key="indexeses" class="">
                                <q-item-section >
                                <li> {{priceses.serviceQty}}x {{ priceses.services }}</li>
                                </q-item-section>
                        </q-item>
                    </div>
                    <div v-show="this.selectedReservation.clientAddons != 0 || this.selectedReservation.clientServices != 0">
                        <q-item>
                            <span class="text-weight-bold " >Add-Ons & Services</span>
                        </q-item>
                        <q-item dense v-for="(price, index) in this.selectedReservation.clientAddons" :key="index" class="">
                            <q-item-section >
                                <li>
                                    {{price.addonsQty}}x {{ price.addons }}
                                </li>
                            </q-item-section>
                        </q-item>
                        <q-item dense v-for="(price, index) in this.selectedReservation.clientServices" :key="index" class="">
                            <q-item-section >
                                <li>
                                    {{price.servicesQty}}x {{ price.services }}
                                </li>
                            </q-item-section>
                        </q-item>
                    </div>
                </div>
                <div>
                    <div class="column q-gutter-sm">
                        <b>Total Payment: <i>P</i> {{this.selectedReservation.clientTotalPayment}}</b>
                        <b>Paid Amount: <i>P</i> {{this.selectedReservation.clientPaidAmount}}</b>
                        <b>Current Balance: <q-btn flat dense @click="payamount" color="orange-8"><i v-show="this.currentBalance != 0">P&nbsp;</i> {{this.currentBalance === 0 ? 'NO BALANCE' : this.currentBalance,}}</q-btn></b>
                    </div>
                </div>
                </q-card-section>
                <q-separator inset />
                <q-card-actions v-show="this.tab != 'cancel'" class="column q-gutter-sm q-px-md">
                    <q-btn dense class="bg-orange-4 bodyText full-width" text-color="white" @click="medium = true" icon="mdi-calendar" label="Reschedule Event" />
                    <q-btn dense class="bg-orange-4 bodyText full-width" text-color="white" @click="cancelNow" icon="cancel" label="Cancel Event" />
                </q-card-actions>
            </q-card>
        </q-dialog>

        <q-dialog v-model="medium" >
            <q-card>
            
            <q-card-section>
                <div class="text-h6">Select New Time And Date</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <div class="column items-center">
                    <div>
                        <div>
                            <q-input type="time" mask="YYYY-MM-DD HH:mm:ss" color="deep-orange-3" dense outlined v-model="startTime" hint="Start Time" />
                            <q-input type="time" mask="YYYY-MM-DD HH:mm:ss" dense color="deep-orange-3" outlined v-model="endTime" hint="End Time"/>
                        </div>
                        <div class="q-pt-md">
                            <q-date minimal v-model="dates" mask="YYYY/MM/DD" color="deep-orange-4" today-btn/>
                        </div>
                    </div>
                </div>
            </q-card-section>

            <q-card-actions align="right" class="bg-white text-teal">
                <q-btn flat label="Reschedule Now" @click="rescheduleNow" v-close-popup />
            </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import { date } from 'quasar'
import { StripeElements } from 'vue-stripe-checkout';
export default {
     components: {
         StripeElements
     },
  data () {
    return {
    userDetails: {},
      search_cancel: '',
      Cancelled: [],
      dates: date.formatDate(new Date(), 'YYYY/MM/DD'),
      startTime: '09:00',
      endTime:  '13:00',
      medium: false,
      reschedCancel: false,
      enterAmount: 0,
      loading: false,
      amount: 0,
      publishableKey: 'pk_test_kUO5j8FaZUKitD1Qh3ibZ2HP00YkxaEOOS', 
      token: null,
      charge: null,
      selectedReservation: [],
      detailsAndPayment: false,
      tab: 'reserve',
      reservationtab: 'pending_res',
      splitterModel: 20,
      search_reserve: '',
      search_cart: '',
      val: true,
      num: 1,
      Reservation: [],
      uid: '',
      paginations: { sortBy: 'clientFName', descending: false, page: 1, rowsPerPage: 1000},
      columnss: [
                { name: 'clientFName', required: true, label: 'First Name', align: 'center', field: 'clientFName', sortable: true },
                { name: 'clientLName', align: 'center', label: 'Last Name', field: 'clientLName', sortable: true },
            ],
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
          self.uid = gg.uid
          self.displayName = gg.displayName
          self.userDetails = gg
        }
    })
  },
  mounted(){
    this.$binding('Reservation', this.$firestoreApp.collection('Reservation'))
      .then(Reservation => {
      console.log(Reservation, 'Reservation')
      }),
    this.$binding('Cancelled', this.$firestoreApp.collection('Cancelled'))
      .then(Cancelled => {
      console.log(Cancelled, 'Cancelled')
      })
  },
  computed:{
      addTotalPaid(){
            try {
                let totalpack =  parseInt(this.selectedReservation.clientPaidAmount) + parseInt(this.amountOnCard)
                return totalpack
            } catch(err){
                return 0
            }
        },
      amountOnCard(){
            if(this.enterAmount === 0 || this.enterAmount === ''){
                return this.amount = 0 
            }else{
                return this.amount = this.enterAmount
            }
        },
      currentBalance(){
            try {
                let totalpack =  parseInt(this.selectedReservation.clientTotalPayment) - parseInt(this.selectedReservation.clientPaidAmount)
                return totalpack
            } catch(err){
                return 0
            }
        },
      returnFree(){
         if(this.selectedReservation === []){
                return []
            } else {
                let data = {...this.selectedReservation.clientSelectPackage}
                var key = data['.key']
                delete data.__index
                delete data['.key']
                console.log(data, 'datas')
                return data
            }
        },
      returnClientReservations(){
          console.log(this.$lodash.filter(this.Reservation,a=>{return a.clientUID == this.uid}))
          return this.$lodash.filter(this.Reservation,a=>{return a.clientUID == this.uid && a.clientReserveDate >= date.formatDate(new Date(), 'YYYY/MM/DD')})
      },
      returnClientFinishReservations(){
          console.log(this.$lodash.filter(this.Reservation,a=>{return a.clientUID == this.uid}))
          return this.$lodash.filter(this.Reservation,a=>{return a.clientUID == this.uid && a.clientReserveDate < date.formatDate(new Date(), 'YYYY/MM/DD')})
      },
      returnClientCancelled(){
          try {
              return this.$lodash.filter(this.Cancelled,a=>{return a.clientUID == this.uid})
          } catch (error) {
              return []
          }
      }
  },
  methods:{
      formatTimeInput(time){
      //get time to format for display
      let baseDate = new Date(2020,1,1)
      let arr = time.split(':')
      let formatTime = date.addToDate(baseDate, {hours:arr[0],minutes:arr[1]})

      return this.$moment(formatTime).format('LT')
    },
    rescheduleNow(){
        var reschedBago = {
                clientSelectTheme: this.selectedReservation.clientSelectTheme,
                clientPaxDetails: this.selectedReservation.clientPaxDetails,
                clientEventType: this.selectedReservation.clientEventType,
                clientAdditionalFood: this.selectedReservation.clientAdditionalFood,
                clientUID: this.selectedReservation.clientUID,
                clientReserveDate: this.dates,
                clientFName: this.selectedReservation.clientFName,
                clientLName: this.selectedReservation.clientLName,
                clientPlace: this.selectedReservation.clientPlace,
                clientCity: this.selectedReservation.clientCity,
                clientEvent: this.selectedReservation.clientEvent,
                clientMotif: this.selectedReservation.clientMotif,
                clientPax: this.selectedReservation.clientPax,
                clientEmail: this.selectedReservation.clientEmail,
                clientStartTime: this.formatTimeInput(this.startTime),
                clientEndTime: this.formatTimeInput(this.endTime),
                clientSelectPackage: this.selectedReservation.clientSelectPackage,
                clientPackageType: this.selectedReservation.clientPackageType,
                clientFoodChoice: this.selectedReservation.clientFoodChoice,
                clientServices: this.selectedReservation.clientServices,
                clientAddons: this.selectedReservation.clientAddons,
                clientTotalPayment: this.selectedReservation.clientTotalPayment,
                clientPaidAmount: this.selectedReservation.clientPaidAmount,
                clientPayDetails: this.selectedReservation.clientPayDetails,
                clientTokenID: this.selectedReservation.clientTokenID,
                clientPaymentType: this.selectedReservation.clientPaymentType,
                clientReserveType: this.selectedReservation.clientReserveType,
                clientDateofReserve: this.selectedReservation.clientDateofReserve
        }
            this.$q.dialog({
                    title: 'Reschedule Event',
                    message: 'Reschedule This Event?',
                    ok: 'Yes',
                    cancel: 'Cancel'
                }).onOk(() => { 
                this.$firestoreApp.collection('Reservation').doc(this.reserveID).set(reschedBago)
                .then((ref) =>{
                        this.$q.notify({
                            message: 'Event Rescheduled!',
                            icon: 'mdi-folder-plus-outline',
                            color: 'orange-8',
                            textColor: 'white',
                            position: 'center'
                            })
                        })  
                    })
                    this.medium = false
                    this.reschedCancel = false
    },
    cancelNow(){
        let cancelled = {
                clientSelectTheme: this.selectedReservation.clientSelectTheme,
                clientPaxDetails: this.selectedReservation.clientPaxDetails,
                clientEventType: this.selectedReservation.clientEventType,
                clientAdditionalFood: this.selectedReservation.clientAdditionalFood,
                clientUID: this.selectedReservation.clientUID,
                clientReserveDate: this.selectedReservation.clientReserveDate,
                clientFName: this.selectedReservation.clientFName,
                clientLName: this.selectedReservation.clientLName,
                clientPlace: this.selectedReservation.clientPlace,
                clientCity: this.selectedReservation.clientCity,
                clientEvent: this.selectedReservation.clientEvent,
                clientMotif: this.selectedReservation.clientMotif,
                clientPax: this.selectedReservation.clientPax,
                clientEmail: this.selectedReservation.clientEmail,
                clientStartTime: this.selectedReservation.clientStartTime,
                clientEndTime: this.selectedReservation.clientEndTime,
                clientSelectPackage: this.selectedReservation.clientSelectPackage,
                clientPackageType: this.selectedReservation.clientPackageType,
                clientFoodChoice: this.selectedReservation.clientFoodChoice,
                clientServices: this.selectedReservation.clientServices,
                clientAddons: this.selectedReservation.clientAddons,
                clientTotalPayment: this.selectedReservation.clientTotalPayment,
                clientPaidAmount: this.selectedReservation.clientPaidAmount,
                clientPayDetails: this.selectedReservation.clientPayDetails,
                clientTokenID: this.selectedReservation.clientTokenID,
                clientPaymentType: this.selectedReservation.clientPaymentType,
                clientReserveType: this.selectedReservation.clientReserveType,
                clientDateofReserve: this.selectedReservation.clientDateofReserve,
                clientCancelDate: date.formatDate(new Date(), 'YYYY/MM/DD'),
        }
            this.$q.dialog({
                title: 'Cancel Event?',
                message: 'Cancel This Event?',
                ok: 'Yes',
                cancel: 'Cancel'
            }).onOk(() => {
            this.$firestoreApp.collection('Cancelled').add(cancelled)
            .then((ref) =>{
                var id = this.reserveID
                this.$firestoreApp.collection('Reservation').doc(id).delete()
                this.$q.notify({
                            message: 'Event Cancelled!',
                            icon: 'mdi-delete',
                            color: 'grey-8',
                            textColor: 'white',
                            position: 'center'
                        })
                        this.reschedCancel = false
                        this.tab = 'cancel'
                    })
                })
    },
    printNow(){
            // this.$htmlToPaper('printMe', () => {
            //   console.log('Printing completed or was cancelled!');
            window.print();
            // })
    },
    payamount(){
            this.enterAmount = this.currentBalance
        },
    updatePaymentCard(){
            var PaymentBago = {
                clientSelectTheme: this.selectedReservation.clientSelectTheme,
                clientPaxDetails: this.selectedReservation.clientPaxDetails,
                clientEventType: this.selectedReservation.clientEventType,
                clientAdditionalFood: this.selectedReservation.clientAdditionalFood,
                clientUID: this.selectedReservation.clientUID,
                clientReserveDate: this.selectedReservation.clientReserveDate,
                clientFName: this.selectedReservation.clientFName,
                clientLName: this.selectedReservation.clientLName,
                clientPlace: this.selectedReservation.clientPlace,
                clientCity: this.selectedReservation.clientCity,
                clientEvent: this.selectedReservation.clientEvent,
                clientMotif: this.selectedReservation.clientMotif,
                clientPax: this.selectedReservation.clientPax,
                clientEmail: this.selectedReservation.clientEmail,
                clientStartTime: this.selectedReservation.clientStartTime,
                clientEndTime: this.selectedReservation.clientEndTime,
                clientSelectPackage: this.selectedReservation.clientSelectPackage,
                clientPackageType: this.selectedReservation.clientPackageType,
                clientFoodChoice: this.selectedReservation.clientFoodChoice,
                clientServices: this.selectedReservation.clientServices,
                clientAddons: this.selectedReservation.clientAddons,
                clientTotalPayment: this.selectedReservation.clientTotalPayment,
                clientPaidAmount: this.addTotalPaid,
                clientPayDetails: this.selectedReservation.clientPayDetails,
                clientTokenID: this.selectedReservation.clientTokenID,
                clientPaymentType: this.selectedReservation.clientPaymentType,
                clientReserveType: this.selectedReservation.clientReserveType,
                clientDateofReserve: this.selectedReservation.clientDateofReserve
                }
                    this.$firestoreApp.collection('Reservation').doc(this.reserveID).set(PaymentBago)
                    .then((ref) =>{
                        let paymentDetails = {
                            clientReservationKey: this.reserveID,
                            clientPayDetails: this.paydetails,
                            clientTokenID: this.token.id,
                            clientPaymentType: 'CARD',
                            clientUID: this.selectedReservation.clientUID,
                            transactionType: 'ONLINE',
                            clientEmail: this.selectedReservation.clientEmail,
                            clientPaymentDate: date.formatDate(new Date(), 'YYYY-MM-DD')
                        }
                        console.log(paymentDetails, 'detailspayment')
                        this.$firestoreApp.collection('Payments').add(paymentDetails)
                        .then(()=>{
                            this.$q.notify({
                                message: 'Payments Updated!',
                                icon: 'mdi-folder-plus-outline',
                                color: 'orange-8',
                                textColor: 'white',
                                position: 'center'
                                })
                                this.detailsAndPayment = false
                                this.enterAmount = 0
                            })  
                        })
        },
    getedit (task) {
            this.selectedReservation = task
            this.reserveID = task['.key']
            this.detailsAndPayment = true
        },
    geteditNew (task) {
            this.selectedReservation = task
            this.reserveID = task['.key']
            this.reschedCancel = true
            this.dates = task.clientReserveDate
            this.startTime = task.clientStartTime
            this.endTime = task.clientEndTime
        },
    formatTimeInput(time){
      //get time to format for display
      let baseDate = new Date(2020,1,1)
      let arr = time.split(':')
      let formatTime = date.addToDate(baseDate, {hours:arr[0],minutes:arr[1]})

      return this.$moment(formatTime).format('LT')
    },
    submit () {
        this.$refs.elementsRef.submit();
        },
        tokenCreated (token) {
        this.token = token;
        console.log(token,'token')
        // for additional charge objects go to https://stripe.com/docs/api/charges/object
        this.charge = {
            source: token.card,
            amount: this.amount,
        }
        this.sendTokenToServer(this.charge);
        },
        sendTokenToServer (charge) {
        // Send to server
        console.log(charge,'charge')
        if(this.amount === 0){
            this.$q.dialog({
                title: `Unable to Continue??`,
                message: 'Please Select Payment Type??',
                color: 'orange-8',
                textColor: 'grey',
                icon: 'negative',
                ok: 'Ok'
            })
        }else{
            this.$q.dialog({
                        title: 'Update Payment',
                        message: 'Update This Payment?',
                        ok: 'Yes',
                        cancel: 'Cancel'
                    }).onOk(() => {
                        this.paydetails = charge
                        this.updatePaymentCard()
                    })
        }
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
                this.$router.push('/loginmob')
                location.reload()
              })
              // 
              // remove this comment if you are done with the testing
            })
    },
  }
}
</script>
<style type = "text/css">
      @media print {
        .bodyText {
            display: none;
          }
        ::-webkit-scrollbar {
            display: none;
        }
      }
</style>
