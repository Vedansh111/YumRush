import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_url } from "../../config";

const ResturantMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState([]);
    const [name, setName] = useState([]);

    async function getMenu() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.290785&lng=70.8020035&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setName(json.data.cards[0].card?.card?.info);
        setMenu(json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
        // console.log(Object.values(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[0].card));
        console.log("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.290785&lng=70.8020035&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    }

    useEffect(() => {
        getMenu();
    }, [])

    return (
        <div className="menu">
            <h1>{name.name}</h1>
            <div className="container">
                {Object.values(menu).map((menuItem) => <div key={menuItem.card.info.id} className="row">
                        <div className="single_menu">
                            <img src={image_url + menuItem.card.info.imageId} alt="resturant img" />
                            <div className="menu_content">
                                <h4>{menuItem.card.info.name}  <span>₹{menuItem.card.info.price.toString().slice(0, -2)}</span></h4>
                                <p>⭐{menuItem.card.info.ratings.aggregatedRating.rating} {menuItem.card.info.description} <span id="hide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus est ab </span></p>
                            </div>
                        </div>
                </div>)}

                
            </div>

        </div>
    )
}

export default ResturantMenu;   