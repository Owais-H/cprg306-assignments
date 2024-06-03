


import React from 'react';
import ItemList from './item-list';

export default function page(){
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList/>
    </main>
  );
};

