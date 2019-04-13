import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      recipes: []
    },
    mutations: {
      setRecipes(state, recipes) {
        state.recipes = recipes
      }
    },
    actions: {
      async fetchRecipes(vuexContext) {
        const recipes = await this.$axios.$get('/recipes.json')
        const recipeArray = []
        for (const key in recipes) {
          recipeArray.push({ ...recipes[key], id: key })
        }
        vuexContext.commit('setRecipes', recipeArray)
      }
    },
    getters: {
      recipes(state) {
        return state.recipes
      }
    }
  })
}

export default createStore
