import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Api } from "../../apis/Api";
import { Context } from "../../contexts/Context";
import { Loading } from "../../components/loading";
import { TopTenCarousel } from "../../components/topTen";
import { filterPopularity } from "../../components/helpers";

import { CarouselItemType } from "../../types/SearchType";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconStyled } from "./styles";
import * as C from "./styles";

export const Logged = () => {
  const { state, dispatch } = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [topTenItems, setTopTenItems] = useState<CarouselItemType[]>([]);
  const [noResults, setNoResults] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTopTenItems();
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (noResults) {
      navigate("/noResults");
    }
  }, [noResults, navigate]);

  const fetchTopTenItems = async () => {
    const topTenSeries = await Api.getLatestMoviesAndSeries();
    setTopTenItems(topTenSeries);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleSearch = async () => {
    if (searchTerm !== "") {
      dispatch({ type: "SET_LOADING", payload: { isLoading: true } });

      const searchList = await Api.getMoviesSeriesAndPeople(searchTerm);
      const filteredSearchList = {
        ...searchList,
        results: filterPopularity(searchList.results),
      };
      await dispatch({
        type: "SET_MOVIE_LIST",
        payload: {
          list: filteredSearchList,
        },
      });

      if (searchList.results.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        navigate("/searchlist");
      }
      dispatch({ type: "SET_LOADING", payload: { isLoading: false } });
    }
  };

  return (
    <C.Container>
      <C.ContainerArea theme={state.theme.status}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="top">
              <h1>
                Olá,{" "}
                <strong>{state.user.user?.name?.toLocaleUpperCase()}</strong>{" "}
                bem vindo!
              </h1>
              <span>
                <strong>Confira o nosso Top 10 Séries e Filmes! </strong>
              </span>
            </div>
            <TopTenCarousel items={topTenItems} />
            <div className="bottom">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setIsTyping(e.target.value.length > 0);
                }}
                onKeyDown={handleKeyDown}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIconStyled icon={faArrowRight} />
              </button>
              <span style={{ display: isTyping ? "none" : "block" }}></span>
            </div>
          </>
        )}
      </C.ContainerArea>
    </C.Container>
  );
};
