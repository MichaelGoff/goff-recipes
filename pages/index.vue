<template>
  <v-layout justify-center>
    <v-flex xs12 sm8 md6>
      <RecipeCard v-for="recipe in recipes" :id="recipe.id" :key="recipe.id" :recipe-name="recipe.name" :description="recipe.description" />
    </v-flex>
  </v-layout>
</template>

<script>
import RecipeCard from '~/components/RecipeCard.vue'

export default {
  components: {
    RecipeCard
  },
  computed: {
    recipes() {
      return this.$store.getters.recipes
    }
  },
  async fetch({ store }) {
    await store.dispatch('fetchRecipes')
  }
}
</script>
