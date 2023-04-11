import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BackButton } from "../../components/backButton";
import { Container, ContainerBackdrop, ContainerArea } from "./styles";
import { Context } from "../../contexts/Context";
import { convertDate, calculateAge } from "../helpers";
import { CreditType, PersonType } from "../../types/SearchType";
import { Loading } from "../../components/loading";
import imagemIndisponivel from "../../assets/notfoundimg/kid2.jpg";
import { PosterItem } from "../posterItem";
import { ScrollToTopButton } from "../ScrollButton";
import { FavoritesButton } from "../favoritesButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCross, faLink } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

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
      <div className='area--backbutton'>
            <BackButton onClick={handleGoBack} />
          </div>
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
                  <div className="social_networks">
                  {personData.external_ids?.instagram_id ? <a href={`https://www.instagram.com/${personData.external_ids.instagram_id}/`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a> : ''}
                  {personData.external_ids?.facebook_id ? <a href={`https://www.facebook.com/${personData.external_ids.facebook_id}/`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a> : ''}
                  {personData.external_ids?.tiktok_id ? <a href={`https://www.tiktok.com/@${personData.external_ids.tiktok_id}/`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTiktok}/></a> : ''}
                  {personData.external_ids?.twitter_id ? <a href={`https://twitter.com/${personData.external_ids.twitter_id}/`} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a> : ''}
                  {personData.homepage ? <a href={personData.homepage} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLink}/></a> : ''}
              </div>
            </div>
              </div>
        
            <div className="details--right">
              <h2>{personData.name}</h2>
              {personData.gender === 1 ? 'Atriz' : 'Ator'}
              <span>{personData.original_name}</span> <br />
              <span>
                {personData.birthday ? <span><FontAwesomeIcon icon={faStar}/> {convertDate(personData.birthday)} | {calculateAge(personData.birthday)} Anos</span> : ''}
              </span>
              <span>{personData.gender === 1 ? 'Nascida em ' : 'Nascido em ' }{personData.place_of_birth}</span>
              <span>
                {personData.deathday !== null ? <span><FontAwesomeIcon icon={faCross}/> {convertDate(personData.deathday)}</span> : ''}
              </span>
              <strong>Gênero:</strong>
              <span>{personData.gender === 1 ? 'Feminino' : 'Masculino'}</span>
              <strong>Biografia: </strong>
              <span className="biography">
                {personData.biography ? personData.biography : noInfoMessage}
              </span>
              {personData.also_known_as ? (
                <>
                {personData.gender === 2 ? (
                   <strong>Conhecido também por:</strong>
                ): 
                  <strong>Conhecida também por:</strong>
                }
                    <ul className="also--known--as">{personData.also_known_as.map((item, index) => (
                      <li key={index}>{index + 1}- {item}</li>
                    ))}</ul>
                </>
                  ) : ''}

            </div>
            <div className="favorite">
                <FavoritesButton onclick={handleFavoriteClick} isFavorited={isFavorited} />
            </div>
          </div>
          <div className="cast">
            <strong>Seus Principais Trabalhos:</strong>
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
