import { useContext, } from "react";
import { Container } from "./styles";
import { FontAwesomeIconStyled } from "./styles";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../contexts/Context";

type Props = {
  onClick: () => void;
}
export const Theme = ({onClick}: Props) => {
  const { state, dispatch } = useContext(Context);

  const handleChangeTheme = () => {
    if (state.theme.status === "light") {
      dispatch({
        type: "CHANGE_THEME",
        payload: {
          status: "dark",
        },
      });
    } else {
      dispatch({
        type: "CHANGE_THEME",
        payload: {
          status: "light",
        },
      });
    }
  };

  return (
    <Container theme={state.theme.status} onClick={onClick}>
      <FontAwesomeIconStyled
        icon={state.theme.status === "dark" ? faMoon : faSun}
      />
      <button onClick={handleChangeTheme}></button>
    </Container>
  );
};
