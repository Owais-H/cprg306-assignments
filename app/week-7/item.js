import React from 'react';

const Item = ({ item, onSelect }) => {
  return (
    <li 
      onClick={() => onSelect(item)} 
      className="cursor-pointer p-2 mb-2 border rounded-md hover:bg-orange-500 transition-colors duration-200"
    >
      {item.name} - {item.quantity} {item.category}
    </li>
  );
};

export default Item;
