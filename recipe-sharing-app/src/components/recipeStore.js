import { create } from "zustand";

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],

  // This updates the searchTerm and also triggers filteredRecipes to update the list
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Update filteredRecipes after setting the searchTerm
  },

  // This function filters recipes based on the search term
  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe by id
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Set the list of recipes (used when loading recipes)
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
