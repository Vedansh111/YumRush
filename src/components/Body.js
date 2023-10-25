import CardComponent from './Card';
import React from 'react';
import { resturantlist } from "../../config";
import { useState } from 'react';

function filterdata(searchText, res) {
    const result = res.filter((s) => {
        return s.info?.name.toLowerCase().includes(searchText.toLowerCase());
    })
    return result
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [res, setRes] = useState(resturantlist);
    const search = (
        <form>
            <label>Search for stuff</label>
            <input id="search"
                type="search"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                    if (e.target.value === "") {
                        setRes(resturantlist)
                    }                       
                }}
            />
            <button onClick={(e) => {
                //filtering the data
                e.preventDefault();
                const data = filterdata(searchText, res);
                setRes(data);  
            }}>Go</button>
        </form>
    )
    return (
        <div>
            <div id='absolute'>{search}</div>
            <div className='manycards'>

                {
                    res.map(resturant => {
                        return <CardComponent resturant={resturant} key={resturant.info.id} />
                    })
                }
                {/* <CardComponent resturant={resturantlist[0]} />
            <CardComponent resturant={resturantlist[1]} />
            <CardComponent resturant={resturantlist[2]} />
            <CardComponent resturant={resturantlist[3]} />
            <CardComponent resturant={resturantlist[4]} />
            <CardComponent resturant={resturantlist[5]} />
            <CardComponent resturant={resturantlist[6]} />
            <CardComponent resturant={resturantlist[7]} />
            <CardComponent resturant={resturantlist[8]} />
            <CardComponent resturant={resturantlist[9]} />
            <CardComponent resturant={resturantlist[10]} /> */}
            </div>
        </div>
    )
}

export default Body;