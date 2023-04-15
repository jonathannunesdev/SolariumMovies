import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import googleBrand from "../../assets/socialNetwork/sml-google-logo.svg";
import facebookBrand from "../../assets/socialNetwork/facebook-3-2.svg"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { isMobile } from "react-device-detect";



export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { state, dispatch } = useContext(Context);
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

 const handleGoogleSignIn = () => {
  if (isMobile) {
    window.location.href = "https://solariummovies.netlify.app/login?autoLogin=true"
  } else {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        window.location.href = "/logged";
      })
      .catch((error) => {
        setPasswordError(
          "Erro ao autenticar usuário com o Google. Tente novamente!"
        );
      });
  }
};

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        window.location.href = "/logged";
      })
      .catch((error) => {
        console.log(error);
        
        setPasswordError(
          "Erro ao autenticar usuário com o Facebook. Tente novamente!"
        );
      });
  };

  const validatePassword = (password: string) => {
    const minLength = 10;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    ) {
      return true;
    } else {
      return false;
    }
  };

  const validateForm = () => {
    setEmailError("");
    setPasswordError("");

    if (email !== confirmEmail) {
      setEmailError("Ops! Os e-mails não são iguais. Tente novamente!");
      return false;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Hey... Sua senha precisa ter pelo menos 10 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais. Tente novamente!"
      );
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        console.log("Usuário registrado com sucesso!");

        const user = userCredential.user;
        await updateProfile(user, {
          displayName: name,
        });

        dispatch({
          type: "SAVE_USER_DATA",
          payload: {
            user: {
              name: name,
              lastName: lastName,
              email: email,
              password: password,
              isFormSubmitted: true,
            },
          },
        });
      })
      .catch((error) => {
        setPasswordError("Erro ao ao registrar usuário. Tente novamente!");
      });
  };

  return (
    <Container theme={state.theme.status}>
      <h1>Junte-se a nós agora!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            autoFocus
            required
          />
        </label>
        <label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Sobrenome"
            autoFocus
            required
          />
        </label>
        <label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>

        <label>
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            placeholder="Confirmar Email"
            required
          />
        </label>
        {emailError && <p className="error-message">{emailError}</p>}
        <div className="password-container">
          <label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              required
              className="password"
            />
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
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button className="button--signup" type="submit">
          Cadastrar
        </button>
      </form>
      <div className="social-login">
        <div className="button--google" onClick={handleGoogleSignIn}>
          <img src={googleBrand} alt="" />
        </div>
        <div className="button--facebook" onClick={handleFacebookSignIn}>
          <img src={facebookBrand} alt="" />
        </div>
      </div>
    </Container>
  );
};
