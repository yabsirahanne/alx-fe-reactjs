import React from 'react';
import { useRecipeStore } from '../Components/SearchBar';
import { useRecipeStore } from '../store/recipeStore';


const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
