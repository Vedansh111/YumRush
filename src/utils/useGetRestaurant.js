import { useState, useEffect } from "react";

const useGetRestaurant = (lat, lon)=>{
    const [allres, setAllRes] = useState([]);
    const [fillres, setFillRes] = useState([]);

    async function getResturants() {

        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=" + lat + "&lng=" + lon + "&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json();

        // initialize checkJsonData() function to check Swiggy Restaurant data
        async function checkJsonData(jsonData) {
            for (let i = 0; i < jsonData?.data?.cards.length; i++) {

                // initialize checkData for Swiggy Restaurant data
                let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

                // if checkData is not undefined then return it
                if (checkData !== undefined) {
                    return checkData;
                }
            }
        }    
            const resData = await checkJsonData(json);

            setAllRes(resData);
            setFillRes(resData);

    }

    useEffect(() => {
            getResturants();
    }, [lat, lon]);


    return [allres, fillres, setFillRes]
}

export default useGetRestaurant;