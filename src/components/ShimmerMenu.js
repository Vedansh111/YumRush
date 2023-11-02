const ShimmerMenu = () => {
    return (
        <div className="menu">
            <h1></h1>
            <div className="container">

                {Array(9).fill('').map((e, index) => {
                    return (
                        <div key={index} className="single_menu-shimmer">
                            <img />
                            <div className="menu_content-shimmer">
                                <h4><span></span></h4>
                                <p><span></span></p>
                                <p></p>
                            </div>
                        </div>
                    )
                })}
            </div>


        </div>
    )
}

export default ShimmerMenu;