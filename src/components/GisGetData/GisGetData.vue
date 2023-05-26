/* eslint-disable */
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Информация об объекте</v-card-title>
          <v-card-text>
            <v-btn @click="getGeoJSON" :disabled="isLoading">Получить данные</v-btn>
            <br>
            <!--indeterminate  Constantly animates, use when loading progress is unknown. -->
            <v-progress-linear v-if="isLoading" v-model="progress" indeterminate height="25"> <template
                v-slot:default="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template></v-progress-linear>
            <br>
            <GisDataSelect v-if="features.length" :features="features" @selectFeature="selectFeature">
            </GisDataSelect>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card v-if="selectedFeature">
          <v-card-title>GeoJSON Form</v-card-title>
          <v-card-text>
            <GisDataForm :feature="selectedFeature" :area="area" @save="onSave"></GisDataForm>
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

<script lang="ts" src="./GisGetData.ts"></script>