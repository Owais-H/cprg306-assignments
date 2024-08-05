"use client";
import React, { useState } from 'react';
import Item from './item'; 

const ItemList = ({ items, onItemSelect }) => {
  const [sort, setSort] = useState('name'); 

  const sortedItems = [...items].sort((x, y) => {
    if (sort === 'name') {
      return (x.name || "").localeCompare(y.name || "");
    } else if (sort === 'category') {
      return (x.category || "").localeCompare(y.category || "");
    }
  });

  return (
    <div>
      <div className='m-5'>
        <button
          className='ml-5 rounded-md h-10 w-40'
          onClick={() => setSort('name')}
          style={{ backgroundColor: sort === 'name' ? 'purple' : 'white' }}
        >
          <p className='font-bold'>Sort by Name</p>
        </button>
        <button
          className='ml-10 rounded-md h-10 w-40'
          onClick={() => setSort('category')}
          style={{ backgroundColor: sort === 'category' ? 'purple' : 'white' }}
        >
          <p className='font-bold'>Sort by Category</p>
        </button>
      </div>  
      <div className="max-w-md justify-items-center">
        <ul className="grid md-3 gap-5">
          {sortedItems.map(item => (
            <Item key={item.id} itemObj={item} onSelect={onItemSelect} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemList;