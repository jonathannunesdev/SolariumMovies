import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Context } from "../../contexts/Context";
import { BackButton } from "../../components/backButton";

import { Container, ContainerBackdrop } from "./styles";

export const NoResults = () => {
  const { state } = useContext(Context);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ContainerBackdrop>
      <Container>
        <div className="info">
          <div className="info2">
            <h2>
              AWWW... DON'T CRY <br />
              <strong>{state.user.user?.name?.toUpperCase()},</strong> <br />
            </h2>
            <span>
              Não encontramos resultados. <br /> Mas tente novamente com outros
              termos.
            </span>
          </div>
          <BackButton onClick={handleGoBack} />
        </div>
      </Container>
    </ContainerBackdrop>
  );
};
