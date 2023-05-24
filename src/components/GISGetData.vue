<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Информация объекте</v-card-title>
          <v-card-text>
            <v-btn @click="getGeoJSON" :disabled="isLoading">Получить данные</v-btn>
            <br>
            <!--indeterminate  Constantly animates, use when loading progress is unknown. -->
            <v-progress-linear v-if="isLoading" v-model="progress" indeterminate  height="25">   <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template></v-progress-linear>
      <br>
            <GISDataSelect v-if="features.length" :features="features" @selectFeature="selectFeature">
            </GISDataSelect>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card v-if="selectedFeature">
          <v-card-title>GeoJSON Form</v-card-title>
          <v-card-text>
            <GISDataForm :feature="selectedFeature" :area="area" @save="onSave"></GISDataForm>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- persistent - Clicking outside of the element or pressing esc key will not deactivate it. -->
    <v-dialog v-model="isSaving" persistent>
      <v-card>
        <v-card-title>Сохранение...</v-card-title>
        <v-card-text>
          <v-progress-circular indeterminate></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="isSaved" persistent>
      <v-card>
        <v-card-title>Записано!</v-card-title>
        <v-card-text>
          <p>Время записи: {{ elapsedTime }} ms</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="isSaved = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import GISDataForm from './GISDataForm.vue';
import GISDataSelect from './GISDataSelect.vue';
import { Utils } from '@/utils/utils';
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
    area: "",
    isSaving: false,
    isSaved: false,
    startTime: 0,
    elapsedTime: 0,
  }),
  methods: {
    selectFeature(data: any) {
      this.selectedFeature = data
    },
    async getGeoJSON() {
      this.isLoading = true;
      this.progress = 0;
      //сделаем задержку выполнения
      await Utils.getRandomDelay();
      this.progress = 100;
      Utils.getDataApi(baseUrl).then((response: any) => {
        this.features = response.features;
        this.area = Utils.calculateArea(response.bbox);
        this.isLoading = false;
      });
    },
    async onSave() {
      this.isSaving = true;
      this.startTime = Date.now();
      //сделаем задержку выполнения
      await Utils.getRandomDelay()
      this.isSaving = false;
      this.isSaved = true;
      this.elapsedTime = Date.now() - this.startTime;
    },
  }
},
);
</script>
