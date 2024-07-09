"use client";

import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  return data.meals;
};

const fetchMealDetails = async (idMeal) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
  const data = await response.json();
  return data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals || []);
    }
  };

  const loadMealDetails = async (idMeal) => {
    const meal = await fetchMealDetails(idMeal);
    setSelectedMeal(meal);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="ml-4">
      <h2 className="text-2xl font-semibold mb-4">Meal Ideas</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map(meal => (
          <li 
            key={meal.idMeal} 
            className="border p-4 rounded-md shadow-md hover:shadow-lg hover:bg-orange-200 transition-all duration-200 cursor-pointer"
            onClick={() => loadMealDetails(meal.idMeal)}
          >
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
            <p className="text-lg font-medium">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
      {selectedMeal && (
        <div className="mt-4 p-4 border rounded-md shadow-md">
          <h3 className="text-xl font-semibold mb-2">{selectedMeal.strMeal}</h3>
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
          <p className="mb-2"><strong>Category:</strong> {selectedMeal.strCategory}</p>
          <p className="mb-2"><strong>Area:</strong> {selectedMeal.strArea}</p>
          <p className="mb-2"><strong>Instructions:</strong> {selectedMeal.strInstructions}</p>
          <h4 className="text-lg font-semibold mt-2">Ingredients:</h4>
          <ul className="list-disc ml-6">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = selectedMeal[`strIngredient${i + 1}`];
              const measure = selectedMeal[`strMeasure${i + 1}`];
              return ingredient ? (
                <li key={i}>{ingredient} - {measure}</li>
              ) : null;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealIdeas;
