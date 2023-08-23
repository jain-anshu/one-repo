import { useState, useEffect } from "react";
const Stores = function () {
    const [storeList, setStoreList] = useState([{ name: "New India Bazar", has_website: true, has_delivery: true, website_url: "https://www.newindiabazar.com/" }]);

    const getStoreList = async () => {
        try {
            const response = await fetch("http://localhost:3000/stores")
            if (response.ok) {
                const responseData = await response.json();

                console.log('Response:', responseData);
                return responseData['stores']
            } else {
                console.error('Request failed:', response.statusText);
            }
        } catch (error) {
            console.error('Request error:', error);
        }
    };
    useEffect(() => {
        const fetchStoreList = async () => {
            const stores = await getStoreList();
            setStoreList(stores);
        };

        fetchStoreList()
    }, []);

    return (
        <div>
            <h1>Stores Near me</h1>
            <div>
                {storeList.map((store) => (
                    <ol>
                        <li>{store.name}</li>
                        <li>{store.has_website ? "Has Website" : "No Website"}</li>
                        <li>{store.has_delivery ? "Has Delivery" : "No Delivery"}</li>
                        <li>{store.website_url}</li>
                    </ol>))}
            </div>
        </div>)
}

export default Stores;