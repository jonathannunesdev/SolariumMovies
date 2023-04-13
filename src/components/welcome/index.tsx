import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from "./styles";

type Props = {
  setShowWelcome: (value: boolean) => void;
};

export const Welcome = ({ setShowWelcome }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    let timer: number | undefined;
    timer = window.setTimeout(() => {
      navigate('/logged'); // Adicione esta linha
    }, 5000);

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, [navigate]); // Adicione 'navigate' às dependências do useEffect

  return (
    <Container>
      <div>
        <span>Olá, bem-vindo!</span>
      </div>
    </Container>
  );
};
