import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [login, setLogin] = useState({
        email:'',
        password:''
    })
    const handleSubmit = (e:any) => {
        const storedUser = JSON.parse(localStorage.getItem("user")!)
        if(storedUser && storedUser.email == login.email && storedUser.password == login.password){
            navigate('/dashboard')
        }else{
            alert('Invalid credentials')
        }
    }
    const navigate = useNavigate()
    return (
        <div>
            <form onSubmit={handleSubmit}>
                 <h1>Login Page</h1> 
                 <p>Please enter your credentials to log in </p>
                 <input type="text" placeholder="Email" onChange={(e)=>setLogin({...login, email:e.target.value})}></input>
                 <input type="password" placeholder="Password" onChange={(e)=>setLogin({...login, password:e.target.value})}></input>
                 <button type="submit">Login</button>
            </form>
           
        </div>
    );
}

export default Login;
