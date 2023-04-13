import { useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
import { Context } from "../../contexts/Context";

import { PosterItem } from "../../components/posterItem";
import { ScrollToTopButton } from "../../components/ScrollButton";
import { Container, ContainerArea } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Favorites = () => {
  const { state, dispatch } = useContext(Context);
  const nav = useNavigate()
  const favorites = state.favorites.listFavorites;

  useEffect(() => {
    if (!state.user.user) {
      nav('/login');
    }
  }, [state.user.user, nav]);

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
              ? `Aqui estão todos os seus ${state.favorites.listFavorites.length} favoritos em um só lugar. \n Aproveite!`
              : 'Você ainda não adicionou nenhum favorito.'}
          </span>
        </div>
        {favorites.length > 0 && (
            <div className="container--favorites">
                <div className="favorites--area">
                {favorites.map((item, index) => (
                  <PosterItem key={index} data={item} showDeleteButton />
                ))}
            </div>
            <button className="button--clearAll" onClick={clearFavorites}>Limpar Favoritos &nbsp; <FontAwesomeIcon icon={faTrash} /></button>
          </div>
        )}
      </ContainerArea>
      <ScrollToTopButton />
    </Container>
  );
};
