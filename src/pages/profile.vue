<template>
    <q-page>
        <div class="q-pa-sm q-pt-xl">
        <q-splitter
            v-model="splitterModel"
            >

            <template v-slot:before>
                <div>
                <q-tabs
                v-model="tab"
                vertical
                inline-label
                class="text-orange-4 full-height relative-position"
                >
                <q-tab name="account" label="Account Details" />
                <q-tab name="reserve" label="Reservation Details" />
                </q-tabs>
                </div>
            </template>

            <template v-slot:after>
                <q-tab-panels
                v-model="tab"
                animated
                class="transparent"
                transition-prev="jump-up"
                transition-next="jump-up"
                >
<!-- ACCOUNT AREA -->
                <q-tab-panel name="account">
                    <div style="font-size:50px;font-family: 'Montserrat', sans-serif;" class="q-pl-md">Account Details</div>
                    <q-card class="my-card">
                    <q-card-section>
                        <div class="row justify-end">
                        <q-btn flat text-color="orange-7" label="Edit Profile" icon="settings" />
                        </div>
                        <div class="row">
                        
                        <q-img style="height:100%;width:280px" src="statics/pics/foo.jpeg" />
                        

                        <div class="column justify-center q-px-xl q-pt-lg q-gutter-md">
                        <div class="q-pl-xl" style="font-size:25px;font-family: 'Montserrat', sans-serif;">Name: Codeavor</div>
                        <div class="q-pl-xl" style="font-size:25px;font-family: 'Montserrat', sans-serif;">Contact Number: 0999-999-9999</div>
                        <div class="q-pl-xl" style="font-size:25px;font-family: 'Montserrat', sans-serif;">Address: Tondo, Manila</div>
                        </div>
                        
                        </div>
                    </q-card-section>
                    </q-card>
                </q-tab-panel>
<!-- END OF ACCOUNT AREA -->
<!-- RESERVATION AREA -->
                <q-tab-panel name="reserve">
                    <div class="row justify-between">
                        <div style="font-size:50px;font-family: 'Montserrat', sans-serif;" class="q-pl-md">Reservation</div>
                        <q-input filled v-model="search_reserve" style="width:400px" label="Search">
                                <template v-slot:prepend>
                                <q-icon name="search" color="orange"/>
                                </template>
                        </q-input>
                    </div>

                    <div class="q-pt-lg">
                    <q-tabs
                        v-model="reservationtab"
                        dense
                        class="text-grey"
                        active-color="orange-4"
                        indicator-color="orange-4"
                        align="justify"
                        narrow-indicator
                        >
                        <q-tab name="pending_res" label="Pending" />
                        <q-tab name="complete_res" label="Completed" />
                    </q-tabs>

                        <q-separator />

                        <q-tab-panels v-model="reservationtab" animated>
                        <q-tab-panel name="pending_res">
                            
                            <div class="row q-gutter-md">
                                <q-card class="my-card" style="width:100%;max-width:400px">
                                    <q-card-section>
                
                                            <div class="column items-center">
                                            <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                            </div>
                                            <div class="column items-center" style="font-size:35px;font-family: 'Lobster', cursive; "><b>Event Name</b></div>
                                            <div class="column q-gutter-sm q-pt-sm">
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Package Name</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Date: </div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Time:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Number of Pax:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Motif:</div>
                                                <div class="row q-px-lg q-pt-sm justify-between">
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="View Package" />
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="Payment" />
                                                </div>
                                            </div>
                                        
                                    </q-card-section>
                                </q-card>

                                <q-card class="my-card" style="width:100%;max-width:400px">
                                    <q-card-section>
                
                                            <div class="column items-center">
                                            <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                            </div>
                                            <div class="column items-center" style="font-size:35px;font-family: 'Lobster', cursive; "><b>Event Name</b></div>
                                            <div class="column q-gutter-sm q-pt-sm">
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Package Name</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Date: </div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Time:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Number of Pax:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Motif:</div>
                                                <div class="row q-px-lg q-pt-sm justify-between">
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="View Package" />
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="Payment" />
                                                </div>
                                            </div>
                                        
                                    </q-card-section>
                                </q-card>

                            </div>

                        </q-tab-panel>

                        <q-tab-panel name="complete_res">
                           <div class="row q-gutter-md">
                                <q-card class="my-card" style="width:100%;max-width:400px">
                                    <q-card-section>
                
                                            <div class="column items-center">
                                            <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                            </div>
                                            <div class="column items-center" style="font-size:35px;font-family: 'Lobster', cursive; "><b>Event Name</b></div>
                                            <div class="column q-gutter-sm q-pt-sm">
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Package Name</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Date: </div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Time:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Number of Pax:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Motif:</div>
                                                <div class="column items-center">
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="View Package" />
                                                </div>
                                            </div>
                                        
                                    </q-card-section>
                                </q-card>

                                <q-card class="my-card" style="width:100%;max-width:400px">
                                    <q-card-section>
                
                                            <div class="column items-center">
                                            <img style="height:100%;width:100px" src="statics/pics/logo.png">
                                            </div>
                                            <div class="column items-center" style="font-size:35px;font-family: 'Lobster', cursive; "><b>Event Name</b></div>
                                            <div class="column q-gutter-sm q-pt-sm">
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Package Name</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Date: </div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Time:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Number of Pax:</div>
                                                <div style="font-size:20px;font-family: 'Montserrat', sans-serif;">Motif:</div>
                                                <div class="column items-center">
                                                <q-btn dense class="bg-orange-4" style="width:120px" text-color="white" label="View Package" />
                                                </div>
                                            </div>
                                        
                                    </q-card-section>
                                </q-card>

                            </div>
                        </q-tab-panel>

                        </q-tab-panels>
                        </div>
                </q-tab-panel>
<!-- END OF RESERVATION AREA -->
                </q-tab-panels>
            </template>
            
            </q-splitter>
            </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'account',
      reservationtab: 'pending_res',
      splitterModel: 20,
      search_reserve: '',
      search_cart: '',
      val: true,
      num: 1
    }
  }
}
</script>
