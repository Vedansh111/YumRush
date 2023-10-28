import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResturantMenu = ()=>{
    const {id} = useParams();
    const [menu, setMenu] = useState([]);

     async function getMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.290785&lng=70.8020035&restaurantId=85860&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json.data?.cards[0].card?.card?.info);
        setMenu(json.data?.cards[0].card);
        console.log(menu);
    }

    useEffect(()=>{
        getMenu();
    }, [])

    return(
        <div>
            {menu.map((res)=>{
                return <h1>{res.info.name}</h1>
            })}
        </div>
    )
}

export default ResturantMenu;   