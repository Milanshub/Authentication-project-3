import LoginForm from "../Components/LoginForm";
import vaultImage from '../assets/white.jpg';
import RegisterForm from "../Components/RegisterForm";
import { useState } from "react";

const Main = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
    }

    const closePopup = () => {
        setPopupOpen(false)
    }

    return (
        <>
        <div className="main-container">
            <div className="background"></div>

            <img src={vaultImage} alt="Hero" className="hero-image" />

            <div className="login-form">
                <h1>Login</h1>
                <p>
                    Doesn't have an account yet? 
                    <button 
                        className="btn-register"
                        onClick={openPopup}
                       >
                        Register
                    </button> 
                    <RegisterForm isOpen={isPopupOpen} onClose={closePopup} />
                </p> {/*use user react router, without server */}
                <LoginForm />
            </div>
        </div>
        </>
    )
}

export default Main; 