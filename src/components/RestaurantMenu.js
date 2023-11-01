import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image_url } from "../../config";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState([]);
    const [name, setName] = useState([]);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    async function getMenu() {

        navigator.geolocation.getCurrentPosition((data) => {
            setLat(data.coords.latitude);
            setLon(data.coords.longitude);
            // console.log(data.coords.latitude);
        })
        // console.log(lat, lon);
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat="+ lat +"&lng="+ lon +"&restaurantId=" + id + "&catalog_qa=undefined&submitAction=ENTER")

        const json = await data.json();

        setName(json.data?.cards[0].card?.card?.info);

        (id != 237666 || id != 167782) ? setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards) : setMenu(json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)

        // console.log(Object.values(menu));
    }

    useEffect(() => {
        getMenu();
    }, [])

    return (
        <div className="menu">
            <h1>{name.name}</h1>
            <div className="container">
                {Object.values(menu).map((menuItem) => <div key={menuItem.card?.info?.id} className="row">
                    <div className="single_menu">
                        <img src={image_url + menuItem.card?.info?.imageId} alt="resturant img" />
                        <div className="menu_content">
                            <h4>{menuItem.card?.info?.name}  <span>₹{String(menuItem.card?.info?.price).slice(0, -2)}</span></h4>
                            <p>⭐{menuItem.card?.info?.ratings?.aggregatedRating?.rating} <Link to="/cart" key={"waah"}><span>Add</span></Link></p>
                            <p>{menuItem.card?.info?.description}</p>
                        </div>
                    </div>
                </div>)}


            </div>

        </div>
    )
}

export default RestaurantMenu;   