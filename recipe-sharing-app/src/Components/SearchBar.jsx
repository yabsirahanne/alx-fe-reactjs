import { useRecipeStore } from './store/recipeStore';
import React from 'react';

const SearchBar = () => {
  return (
    <input
      type="text"
      placeholder="Search recipes..."
      style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
