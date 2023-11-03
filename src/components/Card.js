const CardComponent = ({ restaurant }) => {
    const star = <img id="star" src='https://img.icons8.com/?size=1x&id=7856&format=png' alt='star'></img>
    return (
        <div className="cards">
            <div className="card">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+restaurant.info?.cloudinaryImageId} alt="food photos" className="card__img" />
            </div>
            <h4 className='ratings'>{restaurant.info?.name}</h4>
            <h4 className='ratings'>{star}{restaurant.info?.avgRating} | {restaurant.info?.sla?.deliveryTime}mins</h4>
            <h4 className='ratings' id='cuisines'>{restaurant.info?.cuisines.join(", ")}</h4>
        </div>
    )
}

export default CardComponent;