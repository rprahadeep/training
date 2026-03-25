import { useNavigate } from "react-router-dom"

const LandingPage = () => {
     const navigate = useNavigate()
    return (
       
        <div>
            <h1>Welcome to landing page</h1>
            <p>This is the landing page of our application</p>
            <button onClick={()=>{navigate('/login')}}>Login</button>
            <button onClick={()=>{navigate('/register')}}>Register</button>            
        </div>
    );
}

export default LandingPage;
