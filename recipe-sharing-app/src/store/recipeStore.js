// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),

  setRecipes: (recipes) => set((state) => {
    const filtered = state.searchTerm
      ? recipes.filter(recipe =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      : recipes;
    return { recipes, filteredRecipes: filtered };
  }),
}));
