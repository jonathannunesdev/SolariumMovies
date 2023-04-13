import { useState, useContext } from "react";
import { Container } from "./styles";
import { Context } from "../../contexts/Context";
import { auth } from "../../firebase/firebaseConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { confirmPasswordReset, updatePassword, verifyPasswordResetCode } from "firebase/auth";
import movieMobile from "../../assets/bannersMobile/01.png";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailFromActionCode, setEmailFromActionCode] = useState("");
  const { state } = useContext(Context);

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
  
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("As senhas não conferem!");
      return;
    }
  
    if (!validatePassword(password)) {
      setError(
        "A senha precisa ter pelo menos 10 caracteres, com letras maiúsculas, minúsculas, números e caracteres especiais!"
      );
      return;
    }
  
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const actionCode = urlSearchParams.get("oobCode");
  
      if (!actionCode) {
        setError("Link inválido!");
        return;
      }
  
      // Verifica o código de ação apenas se o emailFromActionCode for vazio
      if (!emailFromActionCode) {
        const email = await verifyPasswordResetCode(auth, actionCode);
        setEmailFromActionCode(email);
      }
  
      // Redefine a senha usando o actionCode e o e-mail recuperado
      await confirmPasswordReset(auth, actionCode, password);
  
      // Verifica se o usuário atual existe antes de atualizar a senha
      if (auth.currentUser) {
        await updatePassword(auth.currentUser, password);
      }
  
      setError("");
      setPassword("");
      setConfirmPassword("");
  
      // Redireciona para a página de login
      window.location.href = "/login";
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError('O link para redefinir a senha expirou. Por favor, solicite um novo link.');
      }
    }
  };
  

  return (
    <Container theme={state.theme.status}>
       <div className="left">
        <div className="mobile">
          <img src={movieMobile} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>Redefinir senha</h1>
        <form onSubmit={handleSubmit}>
        <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nova senha"
          required
        />

        <input
          type={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirmar senha"
          required
        />

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
          {error && <p className="error-message">{error}</p>}
          <button className="button--reset" type="submit">Redefinir senha</button>
        </form>
      </div>
    </Container>
  );
};
