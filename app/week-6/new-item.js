import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && quantity && category) {
      const newItem = {
        id: uuidv4(),
        name,
        quantity: parseInt(quantity),
        category,
      };
      onAddItem(newItem);
      setName('');
      setQuantity('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded p-2"
          required
          style={{color:'black'}}
        />
      </div>
      <div>
        <label className="block">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded p-2"
          required
          style={{color:'black'}}
        />
      </div>
      <div>
        <label className="block">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2"
          required
          style={{color:'black'}}
        />
      </div>
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
        Add Item
      </button>
    </form>
  );
}
