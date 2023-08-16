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
        <div className="InputPage">
            <div>
                <div className="FormHeader">Add a New Ingredient</div>
                <form className="Form">

                    <label className="FormField">Ingredient Name
                        <input placeholder="Enter Ingredient name" value={ingredient.name} onChange={(e) => setIngredient({ ...ingredient, name: e.target.value })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Is this a basic ingredient?
                        <input type="checkbox" checked={ingredient.is_basic} onChange={(e) => setIngredient({ ...ingredient, is_basic: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Is this a family favorite?
                        <input type="checkbox" checked={ingredient.is_family_favorite} onChange={(e) => setIngredient({ ...ingredient, is_family_favorite: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">How much of this ingredient is left?
                        <select value={ingredient.status} onChange={(e) => setIngredient({ ...ingredient, status: e.target.value })}>
                            <option value={1}> Enough</option>
                            <option value={2}> Some</option>
                            <option value={3}> None</option>
                        </select>

                    </label>
                    <button onClick={handleSubmit} className="Button">Add</button>
                </form >
            </div>
            <div>
                <div className="FormHeader">Add a New Store</div>
                <form className="Form">

                    <label className="FormField">Store Name
                        <input placeholder="Enter Ingredient name" value={ingredient.name} onChange={(e) => setIngredient({ ...ingredient, name: e.target.value })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Is this a basic ingredient?
                        <input type="checkbox" checked={ingredient.is_basic} onChange={(e) => setIngredient({ ...ingredient, is_basic: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Is this a family favorite?
                        <input type="checkbox" checked={ingredient.is_family_favorite} onChange={(e) => setIngredient({ ...ingredient, is_family_favorite: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">How much of this ingredient is left?
                        <select value={ingredient.status} onChange={(e) => setIngredient({ ...ingredient, status: e.target.value })}>
                            <option value={1}> Enough</option>
                            <option value={2}> Some</option>
                            <option value={3}> None</option>
                        </select>

                    </label>
                    <button onClick={handleSubmit} className="Button">Add</button>
                </form >
            </div>
        </div>
    )
}
