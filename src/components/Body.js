import { resturantlist } from "../../config";
import CardComponent from "./Card";

const Body = () => {
    return (
        <div className='manycards'>
            {
                resturantlist.map(resturant => {
                    return <CardComponent resturant = {resturant} key={resturant.info.id} />
                })
            }
            <CardComponent resturant={resturantlist[0]} />
            <CardComponent resturant={resturantlist[1]} />
            <CardComponent resturant={resturantlist[2]} />
            <CardComponent resturant={resturantlist[3]} />
            <CardComponent resturant={resturantlist[4]} />
            <CardComponent resturant={resturantlist[5]} />
            <CardComponent resturant={resturantlist[6]} />
            <CardComponent resturant={resturantlist[7]} />
            <CardComponent resturant={resturantlist[8]} />
            <CardComponent resturant={resturantlist[9]} />
            <CardComponent resturant={resturantlist[10]} />
        </div>
    )
}

export default Body;