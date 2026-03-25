import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handlesubmit = (e:any) => {
    e.preventDefault()
    localStorage.setItem("user", JSON.stringify(user))
    navigate('/login')
  }
  return (
    <div>
      <h1>Register</h1>
      <p>Please fill the form to create an account</p>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        ></input>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
