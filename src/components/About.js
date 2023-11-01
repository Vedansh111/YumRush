import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import ProfileClass from './ProfileClass';
import ProfileFunction from './Profile';

const About = ()=>{
    return (
        <div className="about-page">
            <h1>About page</h1>
         
        <ProfileFunction name={"Vedansh"} salary={"4cr"}/>
        <ProfileClass name={"Vedansh"} salary={"1cr"}/>       
        </div>
    )
}

export default About;