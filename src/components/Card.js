const CardComponent = ({resturant}) => {
    const star = <img id="star" src='https://img.icons8.com/?size=1x&id=7856&format=png' alt='star'></img>
    return (
        <div className="cards">
            <a href="#" className="card">
                <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+resturant.info?.cloudinaryImageId} alt="food photos" className="card__img" />
            </a>
            <h4 className='ratings'>{resturant.info?.name}</h4>
            <h4 className='ratings'>{star}{resturant.info?.avgRating} | {resturant.info?.sla?.deliveryTime}mins</h4>
            <h4 className='ratings' id='cuisines'>{resturant.info?.cuisines.join(", ")}</h4>
        </div>
    )
}

export default CardComponent;