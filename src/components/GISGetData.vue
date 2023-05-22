<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Информация объекте</v-card-title>
          <v-card-text>
            <v-btn @click="getGeoJSON" :disabled="isLoading">Получить данные</v-btn>
            <!--indeterminate  Constantly animates, use when loading progress is unknown. -->
            <v-progress-linear v-if="isLoading" :value="progress" indeterminate></v-progress-linear>
            <GISDataSelect v-if="features.length" :features="features" @selectFeature="selectedFeature = $event">
            </GISDataSelect>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card v-if="selectedFeature">
          <v-card-title>GeoJSON Form</v-card-title>
          <v-card-text>
            <GISDataForm :feature="selectedFeature" @save="onSave"></GISDataForm>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { Utils } from '@/utils/utils';
import GISDataForm from './GISDataForm.vue';
import GISDataSelect from './GISDataSelect.vue';
import { baseUrl } from '@/utils/const';

export default Vue.extend({
  name: 'GISGetData',

  components: {
    GISDataForm,
    GISDataSelect,
  },
  data: () => ({
    isLoading: false,
    progress: 0,
    features: [],
    selectedFeature: null,
    isSaving: false,
    isSaved: false,
  }),
  methods: {
    async getGeoJSON() {
      this.isLoading = true;
      this.progress = 0;
      //сделаем задержку выполнения
      await Utils.getRandomDelay();
      Utils.getDataApi(baseUrl).then((response: any) => {
        this.features = response.features;
        console.log('this.features', this.features)
        this.isLoading = false;
        this.progress = 100;
      });
    },
    onSave() {
  
    }
  }
},
);
</script>
