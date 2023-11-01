import React from 'react';

class Profile extends React.Component{

    constructor(props){
        super(props);
        console.log("constructor called");

        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    

    render(){
        
        console.log("render() called");
        return(
            <div>
                <h2>Name: {this.props.name}</h2>
                <h2>Salary: {this.props.salary}</h2>
                <h3>{this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: 1
                    })
                }}>C_Count</button>
            </div>
        )
    }

    
}

export default Profile;