<template>
    <q-page id="page">
        <div id="noti" class="text-weight-bold">
            Notifications
        </div>

        <div id="list">
            <q-list bordered separator>
                <q-item clickable v-ripple>
                    <q-item-section>         
                        <div align="right" class="q-pr-lg">
                            Date
                        </div>
                        
                        <div id="eve">Event Name</div>
                        <div class="q-pl-md q-py-sm">Status of your reservation.</div>
                        <q-item-label class="text-blue q-pr-lg" caption align="right">3 hours ago.</q-item-label>
                    </q-item-section>
                </q-item>

            </q-list>
        </div>
    </q-page>
</template>

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