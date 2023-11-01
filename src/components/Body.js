import CardComponent from './Card';
import React, { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// filtering out the search results..
function filterdata(searchText, allres) {
    return allres.filter((s) => {
        return s.info?.name.toLowerCase().includes(searchText.toLowerCase()) || s.info?.cuisines.join("").toLowerCase().includes(searchText);

    })

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
                    if (searchText === "") {
                        setFillRes(allres);
                    }
                    const dataSearched = filterdata(searchText, allres);
                    setFillRes(dataSearched);
                }}
            />
            <button className='search-btn' onClick={(e) => {
                //filtering the data
                e.preventDefault();
                const dataSearched = filterdata(searchText, allres);
                setFillRes(dataSearched);
            }}>Go</button>
        </form>
    )
    return (allres.length === 0) ? <Shimmer /> : (
        <div>
            <div id='absolute'>{search}</div>
            <div className='manycards'>
                {
                    (fillres.length === 0) ? <h1>Oops...</h1> :
                        fillres.map(restaurant => {
                            return <Link to={"restaurants/" + restaurant.info?.id} key={restaurant.info?.id}><CardComponent restaurant={restaurant} key={ restaurant.info?.id } /></Link>
                        })
                }
            </div>
        </div>
    )
}

export default Body;