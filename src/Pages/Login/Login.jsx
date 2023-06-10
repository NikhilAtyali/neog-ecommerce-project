import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const { setIsLoggedIn, setUserDetails } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setError(() => ({ hasError: false, message: "" }));
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });
      setIsLoggedIn(true);
      setUserDetails(response.data.foundUser);
      location.state
        ? navigate(location?.state?.location?.pathname)
        : navigate("/");
    } catch (e) {
      setIsLoggedIn(false);
      if (
        e &&
        e.response &&
        e.response.data &&
        e.response.data.errors &&
        e.response.data.errors[0]
      ) {
        setError(() => ({
          hasError: true,
          message: e.response.data.errors[0],
        }));
      } else {
        setError(() => ({ hasError: true, message: "An error occurred." }));
      }
    }
  };
  const guestLoginHandler = async (e) => {
    setEmail("adarshbalika@gmail.com");
    setPassword("adarshbalika");
  };
  return (
    <form autoComplete="off" onSubmit={loginHandler} action="">
      <div className="login-container">
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          name=""
          id=""
          required
        />
        {error.hasError && <span className="error-msg">{error.message}</span>}
        <button onClick={guestLoginHandler} type="submit" className="auth-btn">
          Guest Login
        </button>
        <button type="submit" className="auth-btn">
          Login
        </button>
        <p className="move-to-signup-text">
          Don't Have An Account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </form>
  );
}

export default Login;