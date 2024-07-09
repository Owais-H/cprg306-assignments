import React from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <Item key={item.id} item={item} onSelect={onItemSelect} />
      ))}
    </ul>
  );
};

export default ItemList;
