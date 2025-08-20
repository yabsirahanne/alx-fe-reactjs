import AddRecipeForm from './Components/AddRecipeForm';
import RecipeList from "./Components/RecipeList"; // ✅

function App() {
  console.log("Current directory:", import.meta.url);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🍽️ Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;