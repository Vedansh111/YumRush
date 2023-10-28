import CardComponent from './Card';
import React, { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

// filtering out the search results..
function filterdata(searchText, allres) {
    const result = allres.filter((s) => {
        return s.info?.name.toLowerCase().includes(searchText.toLowerCase()) || s.info?.cuisines.join("").toLowerCase().includes(searchText);
        
    })
    return result;
}


const Body = () => {
    const [allres, setAllRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [fillres, setFillRes] = useState([]);

    async function getResturants() {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.290785&lng=70.8020035&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const data2 = await data.json();
        // Filtered Resturants..
        setFillRes(data2.data?.cards[5].card?.card?.gridElements?.infoWithStyle.restaurants);

        // All the restaurants..
        setAllRes(data2.data?.cards[5].card?.card?.gridElements?.infoWithStyle.restaurants);
    }

    useEffect(() => {
        getResturants();
    }, []);

    
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
                }}
            />
            <button onClick={(e) => {
                //filtering the data
                e.preventDefault();
                const dataSearced = filterdata(searchText, allres);
                setFillRes(dataSearced);
                console.log(dataSearced);
            }}>Go</button>
        </form>
    )

    return (allres.length === 0) ? <Shimmer /> : (
        <div>
            <div id='absolute'>{search}</div>
            <div className='manycards'>
                {   
                    (fillres.length === 0)? <h1>opps</h1> :
                    (searchText === "") ? allres.map(resturant => {
                        console.log("waah");
                        return <CardComponent resturant={resturant} key={resturant.info.id} />
                    }) : fillres.map(resturant => {
                        console.log("loop ",fillres.length);
                        return (fillres.length === '[]') ? <h1>Oops!!</h1> : <CardComponent resturant={resturant} key={resturant.info.id} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;