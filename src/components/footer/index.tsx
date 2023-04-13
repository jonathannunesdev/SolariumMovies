import { useContext } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import * as C from './styles';
import { FontAwesomeIconStyled } from './styles';
import { Context } from '../../contexts/Context';
import { Link } from 'react-router-dom';



// Componente NavbarFooter, utilizado para renderizar o rodapé da aplicação
export const NavbarFooter = () => {
  const {state} = useContext(Context);

  return (
    <C.Footer theme={state.theme.status}>
      <C.Nav theme={state.theme.status}>
        <h1>Solarium<b>Movies</b></h1>
        <C.NavList>
          <C.NavListItem theme={state.theme.status}><span> Developed By <strong>Jonathan Nunes Ribeiro</strong></span></C.NavListItem>
          <C.NavListItem theme={state.theme.status}>@ SolariumMovies | Todos os Direitos Reservados 2023 </C.NavListItem>
        </C.NavList>
        <C.SocialNetwork>
            <C.NavListItem theme={state.theme.status}><a href="https://www.linkedin.com/in/jonathan-nunes-6328a4b6/" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faLinkedin} /></a></C.NavListItem>
            <C.NavListItem theme={state.theme.status}><a href="https://github.com/jonathannunesdev" target="_blank" rel="noreferrer"><FontAwesomeIconStyled icon={faGithub} /></a></C.NavListItem>
            <C.NavListItem ><Link to='/privacy-policy'>Política de Privacidade</Link></C.NavListItem>
        </C.SocialNetwork>
      </C.Nav>
    </C.Footer>
  );
};

