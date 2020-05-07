<template>
    <q-page class="col">
        <div style="font-size:40px;font-family: 'Bree Serif', serif;">Food we Offer:</div>
        <div class="q-pt-md row q-gutter-lg">
            <q-table grid :data="returnFood" :columns="columns" :rows-per-page-options="[0]" hide-bottom :pagination.sync="pagination" :filter="filter" class="row items-center q-pa-lg q-ma-lg">
                <template v-slot:item="props"> 
                    <div class="row q-pa-sm">
                        <q-card class="my-card q-pa-md col-3" style="width:252px;height:260px">
                            <img :src="props.row.foodPic" style="width:250px;height:180px">
                            <q-card-section align="left" style="margin:3px;padding:1px;width: 200px">
                            <div class="row">
                            <div class="column">       
                            <div class="q-pt-sm">     
                            <b>{{props.row.foodName}}</b>
                            </div>
                            <div class="text-subtitle2">{{props.row.foodPrice}}</div>
                            </div>
                            </div>
                            </q-card-section>
                        </q-card>
                    </div>           
                  </template>
            </q-table>
        </div>
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