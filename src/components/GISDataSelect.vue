/* eslint-disable */
<template>
    <v-container>
    <v-row class="text-center">
  <v-select
    v-model="selectedFeature"
    :items="features"
    item-text="properties.name"
    item-value="id"
    label="Выбор feature"
    return-object
    @change="$emit('selectFeature', selectedFeature)"
  ></v-select>
</v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data () {
    return {selectedFeature: null}
  },
  props: {
    features: {
      type: Array,
      default: [],
    },
  },
});
</script>


