<template>
  <v-card class="card">
    <v-card-title primary-title>
      <h3> {{ recipeName }} </h3>
    </v-card-title>
    <v-card-text> {{ description }} </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    recipeName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.card {
  margin: 10px;
}
</style>
