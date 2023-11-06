import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Child Constructor");

        this.state = {
            name: "",
            location: "",
            img: ""
        }
    }
    

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Vedansh111");
        const json = await data.json();
        // console.log(json);
        // console.log(json.avatar_url);
        this.setState({
            name: json.login,
            location: json.location,
            img: json.avatar_url
        })

        console.log("componentdidmount");
        // this.timer = setInterval(()=>{
        //     console.log("waah");
        // }, 1000)
        
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        // clearInterval(this.timer);
        // console.log("componentWillUnmount");
    }

    render() {

        return (
            <div className='my-11'>
                <h2 className='text-2xl font-normal py-2'>Github: {this.state.name}</h2>
                <img className='mx-auto py-2 rounded-xl shadow-lg' src={this.state.img} alt="avatar" />
                <h2 className='py-2 text-2xl'>Location: {this.state.location}</h2>
            </div>
        )
    }


}

export default Profile;