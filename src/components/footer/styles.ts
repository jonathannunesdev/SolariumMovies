import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeType } from "../../reducers/themeReducer";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 20px;
  max-width: 1000px;
  margin: auto;
`;

export const Nav = styled.nav<{ theme: themeType }>`
    display: flex;
    flex:1;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        color: ${(props) => (props.theme === "light" ? "#000;" : "#AEDAEA;")} 
        transition: all 0.3s ease-in-out;
        margin: none;


        @media (max-width: 550px) {
          font-size: 18px;
        }
    }

    h1 b{
        color: ${(props) => (props.theme === "light" ? "#AEDAEA;" : "#FFF;")}
        transition: all 0.3s ease-in-out;
    }

    span{
        color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
        transition: all 0.3s ease-in-out;
        font-weight: 100;

        @media (max-width: 550px) {
          font-size: 14px;
        }
    }

`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
  text-align: center;

  strong {
    font-weight: 100;
    color: #555;
  }
`;

export const NavListItem = styled.li<{ theme: themeType }>`
    padding-right: 20px;
    color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
    transition: all 0.3s ease-in-out; 

`;

export const SocialNetwork = styled.div`
    list-style: none;
    display: flex;
    align-items: center;

    a{
      color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
      transition: all 0.3s ease-in-out; 
    }
  `;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 25px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
