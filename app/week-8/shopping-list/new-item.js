"use client"    
import { useState } from "react";
export default function NewItem({onAddItem, closeFormFunc}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("1");
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        let item = {
            name: name,
            quantity: parseInt(quantity),
            category: category,
        };
        
        onAddItem(item);

        setName("");
        setQuantity("1");
        setCategory("produce");
        closeFormFunc();
        
    }

    return(
        <main className="flex flex-col border-2 border-black w-80 ml-12 rounded-2xl">
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        className="m-5 border-2 rounded-md border-black"
                        type="text" 
                        id="name" 
                        value={name} 
                        placeholder="Item Name"
                        onChange={(e) => setName(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <input
                        className="m-5 border-2 rounded-md border-black" 
                        type="number" 
                        id="quantity"
                        min="1" 
                        value={quantity} 
                        onChange={(e) => setQuantity(e.target.value)}
                        required 
                    />
                </div>
                <div>
                    <select 
                        className="m-5 border-2 rounded-md border-black"
                        id="category" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="bakery">Bakery</option>
                        <option value="beverages">Beverages</option>
                        <option value="frozen">Frozen</option>
                        <option value="snacks">Snacks</option>
                    </select>
                </div>
                <button className="p-2 m-5 bg-black text-white rounded-[10px] mt-5" type="submit">Add Item</button>
            </form>
        </main>
    );
}