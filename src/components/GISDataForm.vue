<template>
  <v-container>
    <v-row class="text-center">
      <v-form ref="form">
        <h2 class="headline font-weight-bold mb-3">Заголовок</h2>
        <v-text-field v-model="id" label="id"></v-text-field>
        <v-text-field v-model="layer" label="Layer"></v-text-field>
        <v-text-field v-model="name" label="Name"></v-text-field>
        <v-text-field v-model="area" disabled label="Area"></v-text-field>
      </v-form>
    </v-row>
    <v-row>
      <v-list lines="one">
        <v-list-item v-for="semantic in semantics" :key="semantic.key">
          <v-form ref="form">
            <v-text-field v-model="semantic.key" label="key" @change="isChanged = true"></v-text-field>
            <v-text-field v-model="semantic.value" label="value" @change="isChanged = true"></v-text-field>
            <v-text-field v-model="semantic.name" label="name" @change="isChanged = true"></v-text-field>
          </v-form>
        </v-list-item>
      </v-list>
      <v-btn :disabled="!isChanged" @click="save">Сохранить</v-btn>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'GisDataForm',
  data: () => ({
    id: '',
    layer: '',
    name: '',
    isChanged: false,
    semantics: [],
  }),
  props: {
    feature: {
      type: Object,
      default: () => ({})
    },
    area: {
      type: String,
    },
  },
  created() {
    this.name = this.feature.properties.name;
    this.layer = this.feature.properties.layer;
    this.id = this.feature.properties.id;
    this.semantics = this.feature.properties.semantics;
    this.isChanged = false;
  },
  methods: {
    save() {
      this.isChanged = false;
      // https://monsterlessons.com/project/lessons/peredaem-dannye-iz-child-v-parent-v-vue
      this.$emit('save');
    }


  }
});
</script>
