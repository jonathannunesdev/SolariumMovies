import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import { Container } from './styles';
import { Context } from '../../contexts/Context';

type Props = {
    onClick: () => void;
};


// Componente BackButton, utilizado para voltar à página anterior
export const BackButton = ({onClick}:Props) => {
    const{state} = useContext(Context);
    
    return (
        <Container onClick={onClick} theme={state.theme.status}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </Container>
    );
};

