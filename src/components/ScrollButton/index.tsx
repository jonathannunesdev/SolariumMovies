import { useState, useEffect, useContext } from "react";
import { ScrollButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../contexts/Context";

//component que sobe para o topo da página.
export const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { state } = useContext(Context);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setShowScrollButton(position > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollButton
      theme={state.theme.status}
      show={showScrollButton}
      onClick={handleScrollToTop}
    >
      <span>
        <FontAwesomeIcon icon={faArrowUpLong} />
      </span>
    </ScrollButton>
  );
};
