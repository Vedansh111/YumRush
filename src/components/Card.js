const CardComponent = ({ restaurant }) => {
    return (
        <div className="transition-transform duration-500 transform ease-in-out hover:scale-105 w-full">
            <div className="py-4 px-3">
                <div className="max-w-md w-full border bg-slate-50 shadow-lg rounded-xl p-6">
                    <div className="flex-col">

                        <div className="h-62 w-full mb-3">
                            <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_300,q_300,w_300,h_300/' + restaurant.info?.cloudinaryImageId} alt="food photos" className=" w-full   object-fill  rounded-2xl" />
                        </div>

                        <div className="m-2">
                            <div className="text-base flex items-center text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span>{restaurant.info?.avgRating}  |  {restaurant.info?.sla?.deliveryTime}mins</span>
                            </div>
                            <div className="flex items-center w-full justify-between min-w-0 ">
                                <h1 className="text-xl font-medium mr-auto mt-1 text-black ">{restaurant.info?.name}</h1>
                                <div className=" bg-green-500 text-white text-sm px-2 py-1 ml-3 rounded-lg">
                                    {restaurant.info?.costForTwo}</div>
                            </div>
                            <div className="text-medium text-gray-500 font-semibold mt-1">{restaurant.info?.cuisines.join(", ")}</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;