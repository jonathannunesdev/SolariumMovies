import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../../components/backButton";
import { Container, ContainerBackdrop, ContainerArea } from "./styles";
import { Context } from "../../contexts/Context";
import { convertDate } from "../helpers";
import { CreditType, MovieType, PersonType } from "../../types/SearchType";
import { Loading } from "../../components/loading";
import imagemIndisponivel from "../../assets/notfoundimg/kid2.jpg";
import { PosterItem } from "../posterItem";
import { ScrollToTopButton } from "../ScrollButton";
import { FavoritesButton } from "../favoritesButton";

type Props = {
  personData: PersonType;
  creditData?: CreditType | undefined;
};

// Componente PersonDetails, utilizado para exibir os detalhes de uma pessoa específica.
export const PersonDetails = ({ personData, creditData }: Props) => {
  const { state, dispatch } = useContext(Context);
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const profilePath = personData.profile_path;
  const imageUrl = profilePath ? `${posterBaseUrl}${profilePath}` : "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleFavoriteClick = () => {
    const isFavorited = state.favorites.listFavorites.some(
      (item) => item.id === personData.id
    );

    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: { id: personData.id } });
    } else {
      dispatch({
        type: "ADD_FAVORITE",
        payload: { listFavorites: personData },
      });
    }
  };

  const isFavorited = state.favorites.listFavorites.some(
    (item) => item.id === personData.id
  );
  const noInfoMessage = `Sinto muito ${state.user.user?.name?.toUpperCase()}, não temos informações disponíveis.`;

  return personData && creditData ? (
    <ContainerBackdrop backdropUrl={imageUrl}>
      <ContainerArea>
        <Container theme={state.theme.status}>
          <div className="details">
            <div className="details--left">
              <div className="poster">
                <img
                  src={imageUrl}
                  alt={personData.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = imagemIndisponivel;
                  }}
                />
              </div>
            </div>
            <div className="details--right">
              <h2>{personData.name}</h2>
              {personData.known_for_department
                ? personData.known_for_department
                : ""}
              <span>{personData.original_name}</span> <br />
              <span>
                {personData.birthday ? convertDate(personData.birthday) : ""} |{" "}
                {personData.deathday ? convertDate(personData.deathday) : ""}{" "}
              </span>
              <span>{personData.place_of_birth}</span>
              <strong>Biografia: </strong>
              <span>
                {personData.biography ? personData.biography : noInfoMessage}
              </span>
              <strong>Popularidade: </strong>
              <span>
                {personData.popularity ? personData.popularity : noInfoMessage}
              </span>
            </div>
            <div className="favorite">
              <BackButton onClick={handleGoBack} />
              <FavoritesButton
                onclick={handleFavoriteClick}
                isFavorited={isFavorited}
              />
            </div>
          </div>
          <div className="cast">
            <strong>Conhecido por:</strong>
            <div className="knownFor--area">
              {creditData && creditData.cast && creditData.cast.length > 0 ? (
                creditData.cast.map((item, index) => (
                  <PosterItem key={index} data={item} />
                ))
              ) : (
                <li>{noInfoMessage}</li>
              )}
            </div>
          </div>
        </Container>
      </ContainerArea>
      <ScrollToTopButton />
    </ContainerBackdrop>
  ) : (
    <Loading />
  );
};
