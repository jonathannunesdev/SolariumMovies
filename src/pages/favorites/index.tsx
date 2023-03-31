import { useContext } from "react";
import { Context } from "../../contexts/Context";

import { PosterItem } from "../../components/posterItem";
import { ScrollToTopButton } from "../../components/ScrollButton";
import { Container, ContainerArea } from "./styles";

export const Favorites = () => {
  const { state } = useContext(Context);

  const favorites = state.favorites.listFavorites;

  return (
    <Container>
      <ContainerArea theme={state.theme.status}>
        <div className="info">
          <h1>
            Olá! <strong>{state.user.user?.name?.toUpperCase()}</strong>{" "}
          </h1>
          <span>
            Aqui estão todos os seus favoritos em um só lugar. <br />{" "}
            <strong>Aproveite!</strong>
          </span>
        </div>
        <div className="favorites--area">
          {favorites.map((item, index) => (
            <PosterItem key={index} data={item} showDeleteButton />
          ))}
        </div>
      </ContainerArea>
      <ScrollToTopButton />
    </Container>
  );
};
