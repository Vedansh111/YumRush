import React from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from './ProfileClass';
import ProfileFunction from './Profile';

const About = () => {
    return (
        <div className="about-page">
            <h1>About page</h1>

            <ProfileFunction name={"Vedansh"} salary={"4cr"} />
            <ProfileClass name={"Vedansh"} salary={"1cr"} />
        </div>
    )
}

class AboutClassComponent extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Parent Constructor");
    }

    componentDidMount(){
        // console.log("Parent DidMount");
    }

    render() {
        // console.log("Parent Render");
        return (
            <div className="about-page">
                <h1>About page</h1>
                <ProfileClass name={"Vedansh"} />
            </div>
        )
    }
}

export default AboutClassComponent;