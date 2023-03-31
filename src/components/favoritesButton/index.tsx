import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarON } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOFF } from '@fortawesome/free-regular-svg-icons';

import { Container } from './styles';

type Props = {
  onclick: () => void;
  isFavorited: boolean;
};

// Componente Favorites, utilizado para adicionar ou remover itens dos favoritos
export const FavoritesButton = ({ onclick, isFavorited }: Props) => {
  return (
    <Container>
      <button onClick={onclick}>
        <FontAwesomeIcon icon={isFavorited ? faStarON : faStarOFF} />
      </button>
      <span>{isFavorited ? 'Desfavoritar' : 'Favoritar'}</span>
    </Container>
  );
};
