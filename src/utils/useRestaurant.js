import useLocation from "./useLocation";
import { useState, useEffect } from "react";

const useResturantMenu = (id) => {

    const [menu, setMenu] = useState([]);
    const [name, setName] = useState([]);
    const [lat, lon] = useLocation();
    
    useEffect(() => {
        getMenu();
    }, [])

    async function getMenu() {
    
        // console.log(lat, lon);

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" + lat + "&lng=" + lon + "&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")
        
        const json = await data.json();
        console.log(json);
        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.length ; i++) {

                // initialize checkData for Swiggy Restaurant data
                let checkData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card?.itemCards;

                // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    return checkData;
                }
            }
        } 

        const resData = await checkJsonData(json);
        console.log(resData);
        setName(json.data?.cards[0].card?.card?.info);
        setMenu(resData)
    }

    return [menu, name];
};

export default useResturantMenu; 