import { useParams } from "react-router-dom";
import { image_url } from "../config";
import { Link } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    
    const { id } = useParams();

    const [menu, name] = useRestaurant(id);
    
    return (Object.values(menu).length === 0) ? <ShimmerMenu /> : (
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