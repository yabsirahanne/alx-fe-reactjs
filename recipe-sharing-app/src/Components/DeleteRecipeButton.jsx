// DeleteRecipeButton.jsx
import { useRecipeStore } from './Store';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>Delete Recipe</button>
  );
};

export default DeleteRecipeButton;
