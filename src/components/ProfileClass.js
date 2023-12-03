import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        // console.log("Child Constructor");

        this.state = {
            name: "",
            location: "",
            img: "",
            isVisible: false,
        }
        // console.log(this.state.isVisible);
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

        // console.log("componentdidmount");
        // this.timer = setInterval(()=>{
        //     console.log("waah");
        // }, 1000)

    }
    
    // componentDidUpdate() {
    //     console.log("componentDidUpdate");
    // }

    componentWillUnmount() {
        // clearInterval(this.timer);
        // console.log("componentWillUnmount");
    }

    render() {

        return (
            <div>
                <section className="items-center bg-stone-100 font-poppins dark:bg-gray-800">
                    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                        <div className="flex flex-wrap my-32 ">
                            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                                <div className="relative lg:max-w-md">
                                    <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" alt="aboutimage"
                                        className="relative z-5 object-cover w-full rounded h-96" />
                                    <div
                                        className="absolute bottom-0 right-0 z-5 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-gray-300 dark:bg-gray-800 ">
                                        <p className="text-lg font-semibold md:w-72">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                className="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-gray-300 opacity-10"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                                </path>
                                            </svg> With 20 years of culinary excellence & serving satisfaction on a plate to our valued customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                                <div className="pl-4 mb-6 border-l-4 border-blue-500 ">
                                    <span className="text-sm text-gray-600 uppercase dark:text-gray-400">Who we are?</span>
                                    <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                        About Us
                                    </h1>
                                </div>
                                <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                    At <span className='text-lg font-medium tracking-tight'>YumRush</span>, we are passionate about connecting you with the best dining experiences in your city. Our mission is to make food ordering and delivery as convenient as possible while offering a wide variety of culinary choices to satisfy your cravings. We believe in supporting local restaurants and helping them reach a wider audience. By ordering through <span className='text-lg font-medium tracking-tight'>YumRush</span>, you're contributing to the success of small businesses in your community.
                                </p>
                                <button onClick={(e) => {
                                    e.preventDefault();
                                    (!this.state.isVisible) ? this.setState({
                                        isVisible: true,
                                    }) :
                                        this.setState({
                                            isVisible: false
                                        })
                                }}
                                    className="px-4 py-2 text-gray-300 border rounded-md dark:hover:bg-blue-800 hover:bg-blue-600">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    {this.state.isVisible && <div className='text-gray-300'>
                        <h2 className='text-2xl font-normal py-2'>Github: {this.state.name}</h2>
                        <img className='mx-auto py-2 rounded-2xl' src={this.state.img} alt="avatar" />
                        {/* <h2 className='py-2 text-2xl'>Location: {this.state.location}</h2> */}
                    </div>}
                </section>

            </div>
        )
    }


}

export default Profile;