import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { Context } from "../../contexts/Context";
import { MovieType, PersonType, SerieType } from "../../types/SearchType";
import { MediaType } from "../../reducers/favoritesReducer";
import * as C from "./styles";
import imagemIndisponivel from "../../assets/notfoundimg/kid2.jpg";

type PosterItemProps = {
  data: MediaType;
  media_type?: string;
  showDeleteButton?: boolean;
};

// Componente PosterItem, utilizado para exibir o poster e o título de um filme, série ou pessoa
export const PosterItem = ({ data, showDeleteButton }: PosterItemProps) => {
  const { state, dispatch } = useContext(Context);
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    navigate(`/detailed/${data.media_type}/${data.id}`);
  };

  const imageUrl =
    data.media_type === "person"
      ? (data as PersonType).profile_path
      : (data as MovieType | SerieType).poster_path;

  const title =
    data.media_type === "movie"
      ? (data as MovieType).title
      : (data as SerieType).name;

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: "REMOVE_FAVORITE", payload: { id: data.id } });
  };

  return (
    <C.Container
      theme={state.theme.status}
      data-id={data.id}
      onClick={handleClick}
    >
      <img
        src={`${posterBaseUrl}${imageUrl}`}
        alt={title}
        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
          e.currentTarget.src = imagemIndisponivel;
        }}
      />
      <div className="title">
        <h4>{title}</h4>
        {showDeleteButton && (
          <C.DeleteButtonContainer>
            <button onClick={(e) => handleDeleteClick(e)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </C.DeleteButtonContainer>
        )}
      </div>
    </C.Container>
  );
};
