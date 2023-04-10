import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import * as C from "./styles";
import { Theme } from "../theme";
import { Context } from "../../contexts/Context";

export const NavbarHeader = () => {
  const { state, dispatch } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();


  const handleLogout = () => {
    dispatch({ type: "LOGOUT_USER" });
    navigate('/')
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <C.Header theme={state.theme.status}>
      <C.MenuToggle onClick={toggleMenu} theme={state.theme.status}>
              <C.MenuIcon menuOpen={menuOpen} theme={state.theme.status} />
        </C.MenuToggle>
      <C.HeaderContainer theme={state.theme.status}>
        <Link to="/">
          <h1>
            Solarium<b>Movies</b>
          </h1>
        </Link>
        <C.Nav>
          <C.NavList theme={state.theme.status} menuOpen={menuOpen}>
            <C.NavListItem theme={state.theme.status} onClick={toggleMenu}>
              <Link to="/">{state.user.user?.isFormSubmitted ? 'Busca' : 'Home'}</Link>
            </C.NavListItem>

            {state.user.user?.isFormSubmitted && (
              <C.NavListItem theme={state.theme.status} onClick={toggleMenu}>
                <Link to="/favorites">
                  <strong>Favoritos</strong>
                </Link>
              </C.NavListItem>
            )}

            <C.NavListItemBox
              theme={state.theme.status}
              onClick={() => {
                if (state.user.user?.isFormSubmitted) {
                  handleLogout();
                }
                toggleMenu();
              }}
            >
              {state.user.user?.isFormSubmitted ? "Logout" : "Login"}
            </C.NavListItemBox>
            <Theme onClick={toggleMenu} />
          </C.NavList>
     
        </C.Nav>
      </C.HeaderContainer>
    </C.Header>
  );
};
