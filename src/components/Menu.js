import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Menu;
