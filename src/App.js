import React, { useState } from 'react';
import Categories from './components/Categories';
import Menu from './components/Menu';

import data from './data';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category == 'all') {
      return setItems(data);
    }
    const newItems = data.filter(
      (item) => item.category == category.toString()
    );

    setItems(newItems);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
