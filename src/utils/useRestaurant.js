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
    
        console.log(lat, lon);

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=" + lat + "&lng=" + lon + "&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();

        setName(json.data?.cards[0].card?.card?.info);
        (id != 237666 || id != 167782) ? setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) : setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    console.log(menu);
    return [menu, name];
};

export default useResturantMenu; 