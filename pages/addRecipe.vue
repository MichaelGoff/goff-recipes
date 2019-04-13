<template>
  <v-form v-model="valid">
    <v-layout justify-center align-center>
      <v-flex xs12 md4>
        <v-card class="card">
          <v-card-title>
            <h1>Add New Recipe</h1>
          </v-card-title>
          <v-text-field v-model="name" label="Recipe Name" />
          <v-text-field v-model="description" label="Description" /> 
          <v-textarea v-model="recipeIngredient" label="Recipe Ingredients" hint="One per line" auto-grow />
          <v-textarea v-model="recipeInstructions" label="Recipe Instructions" hint="One per line" auto-grow />
          <v-btn color="success" @click="onSubmit">
            Submit
          </v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-form>
</template>

<script>
/* Standard Recipe
    - image
    - name
    - cookTime (ISO 8601)
    - datePublished
    - description
    - nutrition.calories
    - prepTime (time to prepare entire thing)
    - recipeIngredient [ strings ]
    - recipeInstructions [
        {
            "@type": "HowToStep",
            "text": "this is a step of the recipe"
        },
      ]
    - totalTime
 */

export default {
  data: () => ({
    valid: false,
    name: '',
    description: '',
    recipeIngredient: '',
    recipeInstructions: ''
  }),
  methods: {
    onSubmit() {
      const createdRecipe = {
        name: this.name,
        description: this.description,
        recipeIngredient: this.splitField(this.recipeIngredient),
        recipeInstructions: this.splitField(this.recipeInstructions),
        datePublished: new Date()
      }
      this.$axios.$post('/recipes.json', createdRecipe)
      this.$router.push('/')
    },

    splitField(field) {
      return field.split('\n')
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
}
</style>
