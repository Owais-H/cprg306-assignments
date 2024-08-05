"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUserAuth } from "../_utils/auth-context";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import ItemList from './item-list';
import { getItems, addItem } from '../_services/shopping-list-service';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const [selectedItemName, setSelectedItemName] = useState(null);
  const [isNewItemFormOpen, setNewItemFormOpen] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      loadItems();
    }
  }, [user, router]);

  const loadItems = async () => {
    try {
      const items = await getItems(user.uid);
      setItems(items);
    } catch (error) {
      console.error("Error loading items:", error);
    }
  };

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      setItems([...items, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const openNewItemForm = () => setNewItemFormOpen(true);
  const closeNewItemForm = () => setNewItemFormOpen(false);

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF])/g, '');
    setSelectedItemName(cleanedName);
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
      router.push("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center text-emerald-800 mb-8">SHOPPING LIST</h1>
        <div className="flex justify-center mb-5">
          <button
            className='rounded-md bg-emerald-600 text-white py-2 px-6 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-400'
            onClick={openNewItemForm}
          >
            Add New Item
          </button>
        </div>
        {isNewItemFormOpen && (
          <div className="flex justify-center mb-5">
            <NewItem closeFormFunc={closeNewItemForm} onAddItem={handleAddItem} />
          </div>
        )}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 p-4">
            <ItemList items={items} onSelect={handleItemSelect} />
          </div>
          <div className="w-full lg:w-1/2 p-4">
            {selectedItemName && (
              <div className="relative p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-emerald-800 text-center mb-4">MEAL IDEAS</h2>
                <MealIdeas ingredient={selectedItemName} />
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
