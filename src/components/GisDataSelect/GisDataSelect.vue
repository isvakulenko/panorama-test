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
  @input="$emit('selectFeature', selectedFeature)"
></v-select>
</v-row>
</v-container>
</template>
<script lang="ts" src="./GisDataSelect.ts"></script>