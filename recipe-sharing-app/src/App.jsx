<<<<<<< HEAD
import { useState } from 'react'; 
import RecipeList from './Components/RecipeList';
import AddRecipeForm from './Components/AddRecipeForm';
import './App.css';

function App() {
  const [count, setCount] = useState(0); 

  return (
    <>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <h1>🍲 Recipe Sharing App</h1>
        <AddRecipeForm />
        <RecipeList />
      </div>
    </>
  );
}


export default App; 
=======
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
>>>>>>> 2f4b1bbc17cdea8bc52fbf1494b4b43476d38760
