import { Link, useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div className="error">
            <h2 id="error-msg">{err.status +" : " + err.statusText}</h2>
            <Link to='/' id='home-link'>Home</Link>
        </div>
    )
}
export default Error;