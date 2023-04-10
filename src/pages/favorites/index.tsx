import { useContext } from "react";
import { Context } from "../../contexts/Context";

import { PosterItem } from "../../components/posterItem";
import { ScrollToTopButton } from "../../components/ScrollButton";
import { Container, ContainerArea } from "./styles";

export const Favorites = () => {
  const { state, dispatch } = useContext(Context);

  const favorites = state.favorites.listFavorites;

  const clearFavorites = () => {
    dispatch({ type: "CLEAR_FAVORITES" });
  };

  return (
    <Container>
      <ContainerArea theme={state.theme.status}>
        <div className="info">
          <h1>
            Olá! <strong>{state.user.user?.name?.toUpperCase()}</strong>{" "}
          </h1>
          <span>
            {favorites.length > 0
              ? 'Aqui estão todos os seus favoritos em um só lugar. \n Aproveite!'
              : 'Você ainda não adicionou nenhum favorito.'}
          </span>
        </div>
        {favorites.length > 0 && (
          <div className="favorites--area">
            {favorites.map((item, index) => (
              <PosterItem key={index} data={item} showDeleteButton />
            ))}
            <button onClick={clearFavorites}>Apagar todos os favoritos</button>
          </div>
        )}
      </ContainerArea>
      <ScrollToTopButton />
    </Container>
  );
};
