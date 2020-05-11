<template>
    <q-page>
<!-- START OF DESKTOP -->
        <div class="desktop-only">
        <div style="font-size:40px;font-family: 'Bree Serif', serif;">Packages we offer:</div>
        <q-table grid :data="Packages" :columns="columnss" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
            <template v-slot:item="props">
              <div class="q-pa-md">
                  <q-card bordered style="width:542px;height:500px;border-radius:20px" class="bg-white my-card col-6 q-pa-md">
                  <q-card-section class="column items-center">
                    <img style="height:100%;width:100px" src="statics/pics/logo.png">
                    <div style="font-size:47px;font-family: 'Lobster', cursive;">{{props.row.name}}</div>
                    <div style="font-size:13px"><b>{{props.row.price}} per Head</b></div>
                    <div style="font-size:15px"><b>MENU</b></div>
                  </q-card-section>
                  
                  <div class="row items-center justify-center">
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Food Choice</b></div>
                        <div v-for="(price, index) in props.row.category" :key="index" >
                          <div class="q-pt-sm" style="font-size:12px"><i>{{ price.viandsQty }} viand<span v-show="price.viandsQty != '1'">s</span> of {{ price.category }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                    <q-separator vertical color="black" />
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Inclusion</b></div>
                        <div v-for="(s, indexs) in props.row.inclusions" :key="indexs">
                          <div style="font-size:12px"><i>{{ s.inclusion }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                  </div>
                </q-card>
              </div>
            </template>
        </q-table>
        </div>
<!-- END OF DESKTOP -->
 
<!-- START OF MOBILE -->
        <div class="mobile-only">
        <div class="q-pa-md" style="font-size:30px;font-family: 'Bree Serif', serif;">Packages we offer:</div>
        <q-table grid :data="Packages" :columns="columnss" :rows-per-page-options="[0]" hide-bottom :pagination.sync="paginations" row-key=".key">
            <template v-slot:item="props">
              <div class="q-pa-md">
                  <q-card bordered style="width:330px;height:500px;border-radius:20px" class="bg-white my-card col-6 q-pa-md">
                  <q-card-section class="column items-center">
                    <img style="height:100%;width:100px" src="statics/pics/logo.png">
                    <div style="font-size:27px;font-family: 'Lobster', cursive;">{{props.row.name}}</div>
                    <div style="font-size:13px"><b>{{props.row.price}} per Head</b></div>
                    <div style="font-size:15px"><b>MENU</b></div>
                  </q-card-section>
                  
                  <div class="row items-center justify-center">
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Food Choice</b></div>
                        <div v-for="(price, index) in props.row.category" :key="index" >
                          <div class="q-pt-sm" style="font-size:12px"><i>{{ price.viandsQty }} viand<span v-show="price.viandsQty != '1'">s</span> of {{ price.category }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                    <q-separator vertical color="black" />
                    <div class="col">
                      <q-card-section class="column q-gutter-sm items-center">
                        <div class="" style="font-size:17px"><b>Inclusion</b></div>
                        <div v-for="(s, indexs) in props.row.inclusions" :key="indexs">
                          <div style="font-size:12px"><i>{{ s.inclusion }}</i></div>
                        </div>
                      </q-card-section>
                    </div>
                  </div>
                </q-card>
              </div>
            </template>
        </q-table>
        </div>
<!-- END OF MOBILE --> 
    </q-page>    
</template>
<script>
export default {
  data () {
    return {
      Packages: [], 
      filter: '',
      paginations: { sortBy: 'Category', descending: false, page: 1, rowsPerPage: 100},
      columnss: [
            { name: 'name', required: true, label: 'Package name', align: 'center', field: 'name', sortable: true },
            { name: 'price', align: 'center', label: 'Package Per Head Price', field: 'price', sortable: true },
        ],
    }
  },
  mounted(){
    this.$binding('Packages', this.$firestoreApp.collection('Packages'))
            .then(Packages => {
            console.log(Packages, 'Packages')
            })
  }
}
</script>