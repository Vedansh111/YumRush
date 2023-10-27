import CardComponent from './Card';
import React, { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

// filtering out the search results..
function filterdata(searchText, fillres) {
    const result = fillres.filter((s) => {
        return s.info?.name.toLowerCase().includes(searchText.toLowerCase()) || s.info?.cuisines.join("").toLowerCase().includes(searchText);
    })
    return result
}


const Body = () => {
    const [allres, setAllRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [fillres, setFillRes] = useState([]);

    useEffect(() => {
        getResturants();
    }, []);

    async function getResturants(){
        
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.290785&lng=70.8020035&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        
        const data2 = await data.json();
        // Filtered Resturants..
        setFillRes(data2.data?.cards[5].card?.card?.gridElements?.infoWithStyle.restaurants);

        // All the restaurants..
        setAllRes(data2.data?.cards[5].card?.card?.gridElements?.infoWithStyle.restaurants);
    }
        

    const search = (
        <form>
            <label>Search for stuff</label>
            <input id="search"
                type="search"
                autoComplete='off'
                placeholder="Search..."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    if (e.target.value === "") {
                        setFillRes([])
                    }
                    // else {
                    //     const data = filterdata(searchText, fillres);
                    //     setFillRes(data);
                    // }
                }}
            />
            <button onClick={(e) => {
                //filtering the data
                e.preventDefault();
                const data = filterdata(searchText, fillres);
                setFillRes(data);
                
            }}>Go</button>
        </form>
    )  

    return (allres.length === 0) ? <Shimmer/> : (
        <div>
            <div id='absolute'>{search}</div>
            <div className='manycards'>

                {
                    fillres.map(resturant => {
                        return <CardComponent resturant={resturant} key={resturant.info.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;