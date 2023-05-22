<template>
  <v-container>
    <v-row class="text-center">
      <v-form ref="form">
        <h2 class="headline font-weight-bold mb-3">Заголовоr</h2>
        <v-text-field label="ID"></v-text-field>
        <v-text-field v-model="layer" label="Layer"></v-text-field>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field label="Area" disabled></v-text-field>
         <v-btn :disabled="!isLoad" @click="save">Сохранить</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { Utils } from '@/utils/utils';
export default Vue.extend({
  name: 'GisDataForm',
  data: () => ({
    id: '',
    layer: '',
    name: '',
    area: '',
    isLoad: false,
  }),
  props: {
    feature: {
      type: Object,
      default: () => ({})
    },
  },
  created() {
    this.name = this.feature.properties.name;
    this.layer = this.feature.properties.layer;
    this.id = this.feature.properties.id;
    this.area = Utils.calculateArea(this.feature.bbox);
  },
  methods: {
    save() {
      this.isLoad = false;
      const delay = Utils.getRandomDelay();
      //https://monsterlessons.com/project/lessons/peredaem-dannye-iz-child-v-parent-v-vue
      this.$emit('save', delay);
    }
  }
});
</script>
