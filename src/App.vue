<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-row class="text-center">
      <h2 class="headline font-weight-bold mb-3" >GIS Data</h2>
      </v-row>
    </v-app-bar>
    <v-main>
<GISGetData/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import GISGetData from "./components/GISGetData.vue";

export default Vue.extend({
  name: "App",

  components: {
    GISGetData
},

  data: () => ({
    //
  }),
});
</script>
