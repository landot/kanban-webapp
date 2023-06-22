import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login } from "../utils/firebase/LogIn";
import { logout } from "../utils/firebase/logOut";
import { signInAsGuest } from "../utils/firebase/SignInAsGuest";
import { ButtonSmall } from "./ButtonSmall";
import { useAppDispatch } from "../../app/hooks";
import { addDummyData } from "../../features/kanban/kanbanSlice";
import './SignInPage.css';

export function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useContext(AuthContext);  
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    useEffect(() => {
      if (auth) {
        navigate("/");
      }
    }, []);

    async function handleLogin() {
        setError('');
        if(!email || !password) {
            setError('inputs are incomplete');
            return;
        }
        const user = await login(email, password);
        if(user) {
            navigate('/');
        } else {
            setError('login failed');
        }
    }

    async function handleGuest() {
        await signInAsGuest();
        await dispatch(addDummyData());
        navigate('/');
    }
  
    console.log('auth', auth)
    return (
      <div className="sign-in-wrapper">
        <div className="sign-in-form">
          <h1>Sign In</h1>
          <div className="credentials">
              <h2>Email</h2>
              <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <h2>Password</h2>
              <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          {error && <p className="sign-in-error">{error}</p>}
          <ButtonSmall label='Log In' type='primary' onClick={handleLogin} />
        </div>
        <div className="sign-in-other-options">
          <ButtonSmall label='Create an Account' type='primary' onClick={() => navigate('/create-account')} />
          <ButtonSmall label='Proceed as Guest' type='primary' onClick={handleGuest}/>
        </div>
      </div>
    )
  }