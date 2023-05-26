/* eslint-disable */
<template>
  <v-container>
    <v-row class="text-center">
      <v-form ref="form">
        <h2 class="headline font-weight-bold mb-3">Заголовок</h2>
        <v-text-field v-model="id" disabled label="id"></v-text-field>
        <v-text-field v-model="layer" disabled label="Layer"></v-text-field>
        <v-text-field v-model="name" disabled label="Name"></v-text-field>
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
      <v-btn :disabled="!isChanged" @click="saveData">Сохранить</v-btn>
    </v-row>
  </v-container>
</template>

<script lang="ts" src="./GisDataForm.ts"></script>