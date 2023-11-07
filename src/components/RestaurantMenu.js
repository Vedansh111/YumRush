import { useParams } from "react-router-dom";
import { image_url } from "../config";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const { id } = useParams();

    const [menu, name] = useRestaurant(id);

    return (Object.values(menu).length === 0) ? <ShimmerMenu /> : (
        <div>
            <h1 className="flex tracking-tighter font-middle text-3xl shadow-xl rounded-xl w-fit mx-auto my-4 py-3 px-5">{name.name}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5">
                {Object.values(menu).map((menuItem, index) =>
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full" key={index}>
                        <div className="py-4 px-3">
                            <div className="max-w-sm w-full border bg-slate-50 shadow-lg rounded-xl p-6">
                                <div className="flex-col">

                                    <div className="h-62 w-full mb-3">
                                        <img src={image_url + menuItem.card?.info?.imageId} alt="resturant img" className=" w-full   object-fill  rounded-2xl" />
                                    </div>

                                    <div className="m-2">
                                        <div className="text-base flex items-center text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <span>{menuItem.card?.info?.ratings?.aggregatedRating?.rating}</span>
                                        </div>
                                        <div className="flex items-center w-full justify-between min-w-0 ">
                                            <h1 className="text-xl font-medium mr-auto mt-1.5 text-black ">{menuItem.card?.info?.name}</h1>
                                            <div className=" bg-green-500 text-white text-base px-2.5 py-1 rounded-lg">
                                                ₹{String(menuItem.card?.info?.price).slice(0, -2)}
                                            </div>
                                        </div>
                                        <div className="text-medium text-gray-500 font-semibold mt-1">{menuItem.card?.info?.description}</div>
                                    </div>

                                    <div className="text-sm font-medium justify-start py-3 ml-1">
                                        <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                            <span>Add Cart</span>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default RestaurantMenu;   