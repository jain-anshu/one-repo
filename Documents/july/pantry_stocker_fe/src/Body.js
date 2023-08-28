import React, { useEffect, useState } from "react";


export const Body = function () {
    const [ingredient, setIngredient] = useState({
        name: "",
        is_basic: false,
        is_family_favorite: false,
        category: "Spices",
        status: 3,
        unit: "lbs",
        quantity: 0,
        alsoKnownAs: ""
    });

    const [store, setStore] = useState({
        name: "",
        has_website: false,
        has_delivery: false,
        website_url: ""
    });

    const handleSubmitIngredient = async (e) => {
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
    const handleSubmitStore = async (e) => {
        e.preventDefault();
        try {
            data = { 'store': store }
            const response = await fetch("http://localhost:3000/stores", {
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
                    <label className="FormField">Which kind of ingredient is it?
                        <select value={ingredient.category} onChange={(e) => setIngredient({ ...ingredient, status: e.target.value })}>
                            <option value={1}> Grains</option>
                            <option value={2}> Spices</option>
                            <option value={3}> Misc</option>
                        </select>
                    </label>
                    <label className="FormField">In what units do you buy this ingredient?
                        <select value={ingredient.unit} onChange={(e) => setIngredient({ ...ingredient, status: e.target.value })}>
                            <option value={1}> lbs</option>
                            <option value={2}> oz</option>
                            <option value={3}> count</option>
                            <option value={4}> grams</option>
                            <option value={5}> Misc</option>
                        </select>
                    </label>
                    <label className="FormField">How much of this ingredient is left?
                        <select value={ingredient.status} onChange={(e) => setIngredient({ ...ingredient, status: e.target.value })}>
                            <option value={1}> Enough</option>
                            <option value={2}> Some</option>
                            <option value={3}> None</option>
                        </select>

                    </label>
                    <button onClick={handleSubmitIngredient} className="Button">Add</button>
                </form >
            </div>
            <div>
                <div className="FormHeader">Add a New Store</div>
                <form className="Form">

                    <label className="FormField">Store Name
                        <input placeholder="Enter Store name" value={store.name} onChange={(e) => setStore({ ...ingredient, name: e.target.value })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Does it have a website?
                        <input type="checkbox" checked={store.has_website} onChange={(e) => setStore({ ...store, has_website: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    <label className="FormField">Does it deliver via instacart?
                        <input type="checkbox" checked={store.has_delivery} onChange={(e) => setStore({ ...store, has_delivery: e.target.checked })} className="FormField">
                        </input>
                    </label>
                    {store.has_website && <label className="FormField">Website URL
                        <input placeholder="Enter URL" value={store.name} onChange={(e) => setStore({ ...store, website_url: e.target.value })} className="FormField">
                        </input>
                    </label>}
                    <button onClick={handleSubmitStore} className="Button">Add</button>
                </form >

            </div>

        </div >
    )
}
