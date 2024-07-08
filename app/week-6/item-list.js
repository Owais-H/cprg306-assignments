import React, { useState } from 'react';
import Item from '../week-6/item';


export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${sortBy === 'name' ? 'bg-cyan-300' : 'bg-cyan-300'}`}
          onClick={() => setSortBy('name')}>
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 ${sortBy === 'category' ? 'bg-cyan-300' : 'bg-cyan-300'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <div className="bg-slate-900">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
}
