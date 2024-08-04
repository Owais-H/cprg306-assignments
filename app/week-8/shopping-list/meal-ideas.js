"use client";

import React, { useEffect, useState } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
  };

  useEffect(() => {
    const getMealIdeas = async () => {
      const meals = await fetchMealIdeas(ingredient);
      setMeals(meals || []);
    };

    getMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-5 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">Meal Ideas for {ingredient}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="p-4 bg-purple-700 rounded-md">
            <h3 className="font-bold text-orange-500 text-xl mb-2">{meal.strMeal}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;