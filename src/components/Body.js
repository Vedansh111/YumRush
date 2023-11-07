import CardComponent from './Card';
import React from 'react';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useLocation from '../utils/useLocation';
import useGetRestaurant from '../utils/useGetRestaurant';
import { filterdata } from '../utils/helper';
import useOnline from '../utils/useOnline';


const Body = () => {

    const [searchText, setSearchText] = useState("");
    const [lat, lon] = useLocation();
    const [allres, fillres, setFillRes] = useGetRestaurant(lat, lon);
    const isOnline = useOnline();
    const search = (
        <form>
            <input className="bg-white border font-normal min-w-full border-gray-100 shadow-lg h-10 px-5 py-6 pr-10 rounded-full text-lg focus:outline-none"
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
            <button onClick={(e) => {
                //filtering the data
                e.preventDefault();
                const dataSearched = filterdata(searchText, allres);
                setFillRes(dataSearched);
            }}></button>
        </form>

    )

    if (!isOnline) {
        return <h1 className='w-fit text-3xl font-semibold mx-auto text-center my-[16.6rem]'>
            🛑 No Internet Connection 🛑</h1>
    }
    return (allres?.length === 0 || !fillres) ? <Shimmer /> : (
        <div>
            <div className=' text-gray-600 w-fit mx-auto my-7'>{search}</div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-5'>
                {
                    (fillres?.length === 0) ? <h1 className=' text-3xl font-semibold mx-[45rem] my-[13rem]'>Oops...</h1> :
                        fillres?.map(restaurant => {
                            return <Link to={"restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}><CardComponent restaurant={restaurant} key={restaurant.info?.id} /></Link>
                        })
                }
            </div>
        </div>
    )
}

export default Body;