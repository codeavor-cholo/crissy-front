<template>
    <q-page class="col">
<!-- START OF DESTKTOP -->
        <div class="desktop-only">
        <div style="font-size:40px;font-family: 'Bree Serif', serif;">Food we Offer:</div>
        <div class="q-pt-md row q-gutter-lg">
            <q-table grid :data="returnFood" :columns="columns" :rows-per-page-options="[0]" hide-bottom :pagination.sync="pagination" :filter="filter" class="row items-center">
                <template v-slot:item="props"> 
                    <div class="row q-pa-sm">
                        <q-card flat class="my-card q-pa-md col-4" style="width:200px;height:260px">
                            <img :src="props.row.foodPic" style="width:170px;height:130px">
                            <q-card-section align="left" style="margin:3px;padding:1px;width: 200px">
                            <div class="row">
                            <div class="column">       
                            <div class="q-pt-sm">     
                            <b>{{props.row.foodName}}</b>
                            </div>
                            
                            </div>
                            </div>
                            </q-card-section>
                        </q-card>
                    </div>           
                  </template>
            </q-table>
        </div>
        </div>
<!-- END OF DESKTOP -->

<!-- START OF MOBILE -->
        <div class="mobile-only">
        <div class="q-pa-md" style="font-size:30px;font-family: 'Bree Serif', serif;">Food we Offer:</div>
        <div class="row q-gutter-lg">
            <q-table grid :data="returnFood" :columns="columns" :rows-per-page-options="[0]" hide-bottom :pagination.sync="pagination" :filter="filter" class="row items-center">
                <template v-slot:item="props"> 
                    <div class="row q-pa-md">
                        <q-card flat class="my-card q-pa-md col-4 " style="width:350px;height:250px">
                            <img :src="props.row.foodPic" style="width:300px;height:220px">
                            <q-card-section align="left" style="margin:3px;padding:1px;width: 200px">
                            <div class="row">
                            <div class="column">       
                            <div class="q-pt-sm">     
                            <b>{{props.row.foodName}}</b>
                            </div>
                            
                            </div>
                            </div>
                            </q-card-section>
                        </q-card>
                    </div>           
                  </template>
            </q-table>
        </div>
        </div>
<!-- END OF MOBILE -->

    </q-page>
</template>
<script>
export default {
  data () {
    return {
      Food: [],
      Packages: [], 
      filter: '',
      pagination: { sortBy: 'category', descending: false, page: 1, rowsPerPage: 100},
      columns: [
            { name: 'category', required: true, label: 'Food Category', align: 'center', field: 'category', sortable: true },
            { name: 'foodName', align: 'center', label: 'Food Name', field: 'foodName', sortable: true }
      ]
    }
  },
  mounted(){
    this.$binding('Food', this.$firestoreApp.collection('Food'))
        .then(Food => {
        console.log(Food, 'Food')
        }),
    this.$binding('Packages', this.$firestoreApp.collection('Packages'))
            .then(Packages => {
            console.log(Packages, 'Packages')
            })
  },
  computed:{
    returnFood(){
            let party = this.$lodash.filter(this.Food, a=>{
                return a 
            })
            return party
        },
  }
}
</script>