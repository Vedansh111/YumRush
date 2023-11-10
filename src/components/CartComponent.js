import { useState,useContext } from "react"
import UserContext from "../utils/userContext"

const Section = ({ name, description, isVisible, setIsVisible }) => {
    const user = useContext(UserContext);
    return (
        <div className="my-5 mx-6 border shadow-mg">
            <h1 className="font-bold text-xl px-3 py-2">{name} {user.name}</h1>

            {(isVisible) ? (
                <button

                    onClick={() => {
                        setIsVisible(false)
                    }}
                    className="m-2 border px-2 cursor-pointer bg-slate-200 hover:bg-slate-400 rounded-md">Hide
                </button>
            ) : (
                <button
                    onClick={() => {
                        setIsVisible(true);
                    }}
                    className="m-2 border px-2 cursor-pointer bg-slate-200 hover:bg-slate-400 rounded-md">Show
                </button>
            )}


            {isVisible && <p className="text-base p-2.5">{description}</p>
            }

        </div >
    )
}


const CartComponent = () => {
    
    const [secConfig, setSecConfig] = useState(null);
    return (
        <>
            <Section
                name={"About Us"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={secConfig === "About Us"}
                setIsVisible={() => {
                    setSecConfig("About Us")
                }} />

            <Section
                name={"Contact Us"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={secConfig === "Contact Us"}
                setIsVisible={() => {
                    setSecConfig("Contact Us")
                }} />

            <Section
                name={"Career"}
                description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}
                isVisible={secConfig === "Career"}
                setIsVisible={() => {
                    setSecConfig("Career")
                }} />
        </>
    )
}

export default CartComponent;