import LoginForm from "../Components/LoginForm";
import vaultImage from '../assets/white.jpg';
import { Link } from 'react-router-dom';


const Main = () => {
    return (
        <>
        <div className="main-container">
            <div className="background"></div>

            <img src={vaultImage} alt="Hero" className="hero-image" />

            <div className="login-form">
                <h1>Login</h1>
                <p>
                    Doesn't have an account yet? 
                    <Link to="/register">Register</Link> 
                </p> {/*use user react router, without server */}
                <LoginForm />
            </div>
        </div>
        </>
    )
}

export default Main; 