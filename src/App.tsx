import { useContext } from "react";
import { Routes } from "./routes/Routes";

import { NavbarHeader } from "./components/header";
import { NavbarFooter } from "./components/footer";
import { Context } from "./contexts/Context";

import * as C from "./App.styles";

const App = () => {
  const { state } = useContext(Context);

  return (
    <C.Container theme={state.theme.status}>
      <C.Header>
        <NavbarHeader />
      </C.Header>
      <Routes />
      <C.Footer theme={state.theme.status}>
        <NavbarFooter />
      </C.Footer>
    </C.Container>
  );
};

export default App;
