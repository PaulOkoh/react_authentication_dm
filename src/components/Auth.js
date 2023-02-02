import { useState, useRef, useContext } from "react";
import axios from "axios";
import  AuthContext  from "../store/authContext";

const Auth = () => {
  const authCtx = useContext(AuthContext)
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const [login, setLogin] = useState(false);

  const switchLoginSignUp = () => {
    setRegister((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const body = {
      username,
      password,
    };

    const url = `https://socialmtn.devmountain.com`;

    

    axios.post(register ? `${url}/register` : `${url}/login`, body)
        .then((res) => {
            console.log('AFTER AUTH', res.data)
            authCtx.login(res.data.token, res.data.exp, res.data.userId)
        })
        .catch(err => {
            setPassword('')
            setUsername('')
        })

    

    console.log("submitHandler called");
  };

  return (
    <main>
      <h1>Welcome!</h1>
      <form className="form auth-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
          ref={emailInputRef}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          ref={passwordInputRef}
        />
        <button className="form-btn" onClick={switchLoginSignUp}>
          {register ? "Sign Up" : "Login"}
        </button>
      </form>
      <button className="form-btn">
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </main>
  );
};

export default Auth;
