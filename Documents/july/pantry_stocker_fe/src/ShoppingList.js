import React, { useEffect, useState } from "react";



export const ShoppingList = function () {
    const [ingredientList, setIngredientList] = useState([{
        name: "Rice",
        is_basic: true,
        is_family_favorite: false,
        categories_id: 1,
        units_id: 1,
        status: 3
    }]);

    const getIngredientList = async () => {
        try {
            const response = await fetch("http://localhost:3000/ingredients?page=1&per_page=2")
            if (response.ok) {
                const responseData = await response.json();

                console.log('Response:', responseData);
                return responseData['ingredients']
            } else {
                console.error('Request failed:', response.statusText);
            }
        } catch (error) {
            console.error('Request error:', error);
        }
    };
    useEffect(() => {
        const fetchIngredientList = async () => {
            const ingredients = await getIngredientList();
            setIngredientList(ingredients);
        };

        fetchIngredientList()
    }, []);

    return (
        <div>
            <h1> Following items are running low/Finished </h1>
            <div>
                {ingredientList.map((ingredient) => (
                    <ol>
                        <li>{ingredient.name}</li>
                        <li>{ingredient.is_basic ? "Basic" : "Optional"}</li>
                    </ol>))}
            </div>
        </div>
    )

}