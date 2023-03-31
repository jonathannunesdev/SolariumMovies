import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";
import { Container } from "./styles";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { state, dispatch } = useContext(Context);

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
        <label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
        </label>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </Container>
  );
};
