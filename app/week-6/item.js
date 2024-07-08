import React from 'react';

export default function Item({ name, quantity, category }) {
  return (
    <div className="mb-4 bg-sky-950 rounded shadow">
      <h3 className="text-sm font-semibold">{name}</h3>
      <p className="text-sm">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
    </div>
  );
}