import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/Context";
import { PosterItem } from "../../components/posterItem";
import { ScrollToTopButton } from "../../components/ScrollButton";
import { Loading } from "../../components/loading";
import { BackButton } from "../../components/backButton";

import * as C from "./styles";

export const SearchList = () => {
  const { state } = useContext(Context);
  const searchList = state.search.list;
  const isLoading = state.loading.isLoading;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <C.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {state.search.list.results.length > 0 && (
            <>
              <div className="container--button">
                <BackButton onClick={handleGoBack} />
              </div>
              <div className="search--area">
                {searchList.results.map((item, index) => (
                  <PosterItem key={index} data={item} media_type="movie" />
                ))}
              </div>
            </>
          )}
        </>
      )}
      <ScrollToTopButton />
    </C.Container>
  );
};
