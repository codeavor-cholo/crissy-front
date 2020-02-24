<template>
    <q-page>
        <div class="row">
<!-- LEFT PART -->
            <div class="col-8">
                <q-card class="my-card">
                    <q-card-section>
                        <div class="q-pa-md" style="font-size:30px;font-family: 'Montserrat', sans-serif;"><b>Event Name</b></div>
                        <q-stepper
                            v-model="step"
                            vertical
                            done-color="deep-orange"
                            active-color="orange-4"
                            animated
                            >
                            <q-step
                                :name="1"
                                title="Choose Date Of Your Event"
                                icon="calendar_today"
                                :done="step > 1"
                            >
                                <div class="row justify-center">
                                <q-date v-model="date" color="orange-4"/>
                                </div>
                                <q-stepper-navigation>
                                <q-btn @click="step = 2" color="primary" label="Continue" />
                                </q-stepper-navigation>
                            </q-step>

                            <q-step
                                :name="2"
                                title="Fill up Reservation Form"
                                icon="spellcheck"
                                :done="step > 2"
                            >
                                <div class="column q-gutter-sm">

                                    <div class="row q-gutter-md q-pt-md q-pl-sm">
                                        <div>    
                                            <q-input dense outlined style="width:300px" v-model="fname" label="First Name"/>
                                        </div>
                                        <div>
                                            <q-input dense outlined style="width:300px" v-model="lname" label="Last Name"/>        
                                        </div>
                                    </div>

                                    <div>
                                        <q-input dense outlined v-model="place" style="width:615px" label="Event Place"/>
                                    </div>

                                    <div>
                                        <q-select dense outlined v-model="model" :options="options" style="width:615px" label="Select City" />
                                    </div>
                                    <div class="column q-gutter-sm">
                                        <div class="row q-gutter-md">
                                            <div>
                                                <q-input dense outlined style="width:300px" v-model="pax" label="Pax"/>
                                            </div>
                                            <div>
                                                <q-select dense outlined style="width:300px" v-model="model" label="Motif"/>
                                            </div>
                                        </div>

                                        <div class="row q-gutter-md q-pt-sm">
                                            <div>
                                                <q-input dense outlined style="width:300px" v-model="pax" label="start time"/>
                                            </div>
                                            <div>
                                                <q-select dense outlined style="width:300px" v-model="model" label="end time"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <q-stepper-navigation>
                                <q-btn @click="step = 4" color="primary" label="Continue" />
                                <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
                                </q-stepper-navigation>
                            </q-step>

                            <q-step
                                :name="3"
                                title="Ad template"
                                icon="assignment"
                                disable
                            >
                                This step won't show up because it is disabled.
                            </q-step>

                            <q-step
                                :name="4"
                                title="Create an ad"
                                icon="add_comment"
                            >
                                Try out different ad text to see what brings in the most customers, and learn how to
                                enhance your ads using features like ad extensions. If you run into any problems with
                                your ads, find out how to tell if they're running and how to resolve approval issues.

                                <q-stepper-navigation>
                                <q-btn color="primary" label="Finish" />
                                <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
                                </q-stepper-navigation>
                            </q-step>
                        </q-stepper>
                    
                    </q-card-section>
                    </q-card>

            </div>
<!-- END OF LEFT PART -->

<!-- RIGHT PART -->
            <div class="col-4 q-pl-md">
                <q-card class="my-card">
                    <q-card-section>
                       
                        <div class="column items-center q-pa-sm">
                             <q-card flat class="my-card bg-grey-3" style="width:300px">
                                <q-card-section>
                                    <div class="column items-center">Order Summary - #04b7643</div>
                                </q-card-section>
                              </q-card>
                        </div>
       
                        <div class="q-pa-sm row justify-between">
                            <div>Date</div>
                            <div>27 Jul 2019</div>
                        </div>
                        <div class="q-pa-sm row justify-between">
                            <div>Time</div>
                            <div>04:36 PM</div>
                        </div>
                        <div class="q-pa-sm row justify-between">
                            <div>Total Number of People</div>
                            <div>45</div>
                        </div>
                        
                        <div> 
                        <q-separator inset class="black"/>
                        </div>
                    
                        <div class="q-pa-sm"><b>Items</b></div>
                        <div class="q-pa-sm">Mutton Fry</div>
                        <div class="q-pa-sm">Chicken Fried Rice</div>
                        <div class="q-pa-sm">Chili Prawn</div>
                        <div class="q-pa-sm">Ghost Chicken</div>
                        <div class="q-pa-sm">Chicken G5</div>
                        <div class="q-pa-sm">Fish Gravy</div>

                        <div> 
                        <q-separator inset class="black"/>
                        </div>

                        <div class="q-pa-sm"><b>Add-ons</b></div>
                        <div class="q-pa-sm row justify-between">
                            <div>Tattoo Artists</div>
                            <div>3,000</div>
                        </div>
                        <div class="q-pa-sm row justify-between">
                            <div>Hair Braiding</div>
                            <div>3,500</div>
                        </div>
                        <div class="q-pa-sm row justify-between">
                            <div>Master of Ceremony</div>
                            <div>3500</div>
                        </div>

                    </q-card-section>
                 </q-card>
            </div>    
<!-- END OF RIGHT PART -->

<!-- ADDRESS -->
            <q-dialog v-model="adr" persistent>
            <q-card style="min-width: 350px">
                <q-card-section>
                <div class="text-h6">Your address</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                <q-input dense v-model="address" />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add address" v-close-popup />
                </q-card-actions>
            </q-card>
            </q-dialog>

        </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
     step: 1,
     fname: '',
     lname: '',
     pax: '', 
     place: '',
     motif: ''
     
    }
  }
}
</script>