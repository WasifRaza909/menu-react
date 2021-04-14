import React from 'react';
import CategoriesItem from './CategoriesItem';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <CategoriesItem
          category={category}
          key={index}
          filterItems={filterItems}
        />
      ))}
    </div>
  );
};

export default Categories;
