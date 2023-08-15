import React, { useEffect, useState } from "react";


export const Body = function () {
    const [ingredient, setIngredient] = useState({
        name: "",
        is_basic: false,
        is_family_favorite: false,
        category: "Spices",
        status: 3,
        units: "lbs",
        quantity: 0,
        alsoKnownAs: ""
    });
    console.log(ingredient.name)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            data = { 'ingredient': ingredient }
            console.log(data)
            const response = await fetch("http://localhost:3000/ingredients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            });
            if (response.ok) {
                const responseData = await response.json(); // Parse response JSON
                console.log('Response:', responseData);
            } else {
                console.error('Request failed:', response.statusText);
            }
        } catch (error) {
            console.error('Request error:', error);
        }

    }

    return (
        <form>
            <label>Ingredient Name
                <input placeholder="Enter Ingredient name" value={ingredient.name} onChange={(e) => setIngredient({ ...ingredient, name: e.target.value })} className="FormField">

                </input>
            </label>
            <label>Is this a basic ingredient?
                <input type="checkbox" checked={ingredient.is_basic} onChange={(e) => setIngredient({ ...ingredient, is_basic: e.target.checked })} className="FormField">
                </input>
            </label>
            <label>Is this a family favorite?
                <input type="checkbox" checked={ingredient.is_family_favorite} onChange={(e) => setIngredient({ ...ingredient, is_family_favorite: e.target.checked })} className="FormField">
                </input>
            </label>
            <button onClick={handleSubmit}>Add</button>
        </form >
    )
}
