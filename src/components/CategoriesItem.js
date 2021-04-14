import React from 'react';

const CategoriesItem = ({ filterItems, category }) => {
  return (
    <button
      type='button'
      className='filter-btn'
      onClick={() => {
        filterItems(category);
      }}
    >
      {category}
    </button>
  );
};

export default CategoriesItem;
