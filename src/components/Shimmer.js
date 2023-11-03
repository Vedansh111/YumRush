const Shimmer = () => {
    return (
        <div className="manycards">
            {Array(16).fill('').map((e, index)=>{
                return <div key={index} className="demo"></div>
            })}
        </div>
    )
}

export default Shimmer;