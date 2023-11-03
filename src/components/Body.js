import CardComponent from './Card';
import React, { useEffect } from 'react';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLocation from '../utils/useLocation';
import useGetRestaurant from '../utils/useGetRestaurant';
import { filterdata } from '../utils/helper';
// filtering out the search results..


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [lat, lon] = useLocation();
    const [allres, fillres, setFillRes] = useGetRestaurant(lat, lon);

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

    return (allres?.length === 0 || !fillres) ? <Shimmer /> : (
        <div>
            <div id='absolute'>{search}</div>
            <div className='manycards'>
                {
                    (fillres?.length === 0) ? <h1>Oops...</h1> :
                        fillres?.map(restaurant => {
                            return <Link to={"restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}><CardComponent restaurant={restaurant} key={restaurant.info?.id} /></Link>
                        })
                }
            </div>
        </div>
    )
}

export default Body;