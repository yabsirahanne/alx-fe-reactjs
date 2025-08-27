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
