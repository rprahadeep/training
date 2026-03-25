import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user")
        navigate('/')
    }
    return (
        <div style={{display: 'flex', justifyContent:'space-between'}}>
            <button onClick={()=>navigate('/addPost')}>Add Post</button>
            <button onClick={()=>navigate('/posts')}>Post List</button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Navbar;
