import React, { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { useRecipeStore } from './store/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
const App = () => {
  const setRecipes = useRecipeStore(state => state.setRecipes);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => res.json())
      .then(data => {
        const recipes = data.meals.map(meal => ({
          id: meal.idMeal,
          title: meal.strMeal,
          description: meal.strInstructions,
          ingredients: [meal.strIngredient1, meal.strIngredient2], // Simplified
        }));
        setRecipes(recipes);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchBar />
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
};

export default App;
