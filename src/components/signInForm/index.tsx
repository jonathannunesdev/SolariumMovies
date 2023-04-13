import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../contexts/Context";
import { Container } from "./styles";
import { auth } from "../../firebase/firebaseConfig";
import {  signInWithEmailAndPassword, sendPasswordResetEmail} from "firebase/auth";
import { Link } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import googleBrand from "../../assets/socialNetwork/sml-google-logo.svg";


export const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberLogin, setRememberLogin] = useState(() => {
    const savedEmail = localStorage.getItem("email");
    return savedEmail ? true : false;
  });
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

  useEffect(() => {
    if (rememberLogin) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }, [email, password, rememberLogin]);

  const validateForm = () => {
    if (email === "" || password === "") {
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      dispatch({
        type: "SAVE_USER_DATA",
        payload: {
          user: {
            name: user.displayName,
            lastName: "",
            email: user.email,
            password: "",
            isFormSubmitted: true,
          },
        },
      });

      if (rememberLogin) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      navigate("/logged");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorLogin("Email ou Senha não conferem!");
      }
    }
  };

  const handleResetPassword = async () => {
    if (email.trim() === "") {
      setErrorLogin("Por favor, preencha o campo de e-mail.");
      return;
    }
  
    try {
      const actionCodeSettings = {
        url: "https://solariummovies.netlify.app/resetPassword",
        handleCodeInApp: true,
      };
      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      setErrorLogin(
        "Um e-mail de redefinição de senha foi enviado para o seu endereço de e-mail."
      );
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        if (error.code === "auth/user-not-found") {
          setErrorLogin("O e-mail não foi encontrado.");
        } else {
          console.error(error);
        }
      }
    }
  };
  
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
  
      dispatch({
        type: "SAVE_USER_DATA",
        payload: {
          user: {
            name: user.displayName,
            lastName: "",
            email: user.email,
            password: "",
            isFormSubmitted: true,
          },
        },
      });
  
      navigate("/logged");
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error(error);
      }
    }
  };
  
  return (
    <Container theme={state.theme.status}>
      <h1>Entre agora!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="input-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>

        <div className="password-container">
          <label>
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
            />
            {errorLogin && <p className="error-message">{errorLogin}</p>}

          </label>
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </button>
        </div>
        <button className="login--button" type="submit">Login</button>
        <div className="without--account">
          <label className="remember-login">
            <input
              className="checkbox-remember-login"
              type="checkbox"
              checked={rememberLogin}
              onChange={(e) => setRememberLogin(e.target.checked)}
            />
            Lembrar e-mail e senha
          </label>
          <span className="forgotPassword" onClick={handleResetPassword}>
            Esqueceu a senha?
          </span>
          <span>
            <Link to="/">Ainda não tem conta?</Link>
          </span>
        </div>
      </form>
      <div className="social-login">
        <div className="button--google" onClick={handleGoogleSignIn}>
          <img src={googleBrand} alt="" />
        </div>
      </div>
    </Container>
  );
};
