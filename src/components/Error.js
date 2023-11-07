import { Link, useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    return (
        <div id="error">
            <h2 id="error-msg">{err.status +" : " + err.statusText}</h2>
            <Link to='/' id='home-link'>Home</Link>
        </div>
    )
}
export default Error;