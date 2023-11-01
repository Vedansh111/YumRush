import { useState } from "react";

const Profile = (props)=>{
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h2>Salary: {props.salary}</h2>
            <h3>{count}</h3>
            <button onClick={()=>{
                setCount(1);
            }}>F_Count</button>
        </div>
    )
}

export default Profile;