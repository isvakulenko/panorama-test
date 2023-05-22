<template>
    <v-container>
    <v-row class="text-center">
  <v-select
    v-model="selectedFeature"
    :items="features"
    item-text="properties.name"
    item-value="id"
    label="Выбор feature"
  ></v-select>
</v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data: () => ({
    selectedFeature: null,
  }),
  props: {
    features: {
      type: Array,
      default: [],
    },
  },
  methods: {
    selectFeature() {
    
       console.log('selectFeature', this.selectedFeature)
      return this.selectedFeature;
    },
  },
});
</script>


