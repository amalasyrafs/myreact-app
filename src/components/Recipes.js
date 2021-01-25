import React from 'react';
import { Media, Badge } from 'reactstrap';

const Recipes = ({ title, calories, image, ingredients, dietlabel }) => {
  return (
    <div className='container'>
      <Media className='mt-3 mb-5'>
        <Media left top>
          <Media object src={image} alt={title} id='recipe-img' />
        </Media>
        <Media body className='mt-0 ml-5'>
          <Media heading>
            <h3>{title}</h3>
          </Media>
          <Badge color='info' pill>
            {dietlabel}
          </Badge>
          <Badge color='secondary' pill>
            {calories} Cal.
          </Badge>
          <ol>
            {ingredients.map((ingredient) => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Media>
      </Media>
    </div>
  );
};

export default Recipes;
