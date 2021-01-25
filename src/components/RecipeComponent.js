import React, { useEffect, useState } from 'react';
import keys from '../keys';
import Recipes from './Recipes';

const RecipesApp = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    const getRecipes = async () => {
      const api = {
        key: keys.EDAMAM_APP_KEY,
        id: keys.EDAMAM_APP_ID,
      };
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`
      );
      const data = await response.json();
      const test = data.hits.slice(0, 5);
      console.log(test);
      setRecipes(test);
    };
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='body'>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
          placeholder='Find your recipe here'
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>
      <div className='recipes container'>
        <div className='row mt-5 col-12 col-md-6'>
          <h3>Welcome to Recipe App</h3>
          <br />
          <p>Data is fetched via API from Edamam</p>
        </div>
        <div className='row mt-3 col-12'>
          {recipes.map((recipe) => (
            <Recipes
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              dietlabel={recipe.recipe.dietLabels}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesApp;
