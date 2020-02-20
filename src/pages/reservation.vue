<template>
    <q-page>
        <div class="row">
<!-- LEFT PART -->
            <div class="col-8">
                <q-card class="my-card">
                    <q-card-section>
                        <div class="q-pa-md" style="font-size:30px;font-family: 'Montserrat', sans-serif;"><b>Event Name</b></div>
                        <div class="row q-pa-md q-gutter-xl">
                            
                            <q-date v-model="date" color="orange-4"/>
                            
                            <div class="column q-gutter-sm">
                                
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">First Name:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="fname" />
                                    </div>
                                </div>
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">Last Name:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="lname" />
                                    </div>
                                </div>
                                
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">Contact Number:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="cnum" />
                                    </div>
                                </div>
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">Number of Pax:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="pax" />
                                    </div>
                                </div>
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">Event Place:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="place" />
                                    </div>
                                </div>
                                <div>
                                    <div class="q-pl-md" style="font-size:16px;font-family: 'Montserrat', sans-serif;">Motif:</div>
                                    <div class="q-pl-xl">
                                        <q-input dense outlined v-model="motif" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div> 
                        <q-separator inset class="black"/>
                        </div>
                    
                    <div class="q-pt-md">
                        <q-stepper
                            v-model="step"
                            ref="stepper"
                            color="primary"
                            animated
                            >
                            <q-step
                                :name="1"
                                title="Select campaign settings"
                                icon="settings"
                                :done="step > 1"
                            >
                                For each ad campaign that you create, you can control how much you're willing to
                                spend on clicks and conversions, which networks and geographical locations you want
                                your ads to show on, and more.
                            </q-step>

                            <q-step
                                :name="2"
                                title="Create an ad group"
                                caption="Optional"
                                icon="create_new_folder"
                                :done="step > 2"
                            >
                                An ad group contains one or more ads which target a shared set of keywords.
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
                            </q-step>

                            <template v-slot:navigation>
                                <q-stepper-navigation>
                                <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
                                <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                                </q-stepper-navigation>
                            </template>
                        </q-stepper>
                    </div>
                    
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
     cnum: '',
     pax: '', 
     place: '',
     motif: ''
     
    }
  }
}
</script>