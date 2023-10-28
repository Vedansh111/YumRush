const Shimmer = () => {
    return (
        <div className="manycards">
            {Array(9).fill('').map((e, index)=>{
                return <div key={index} className="demo"></div>
            })}
        </div>
    )
}

export default Shimmer;