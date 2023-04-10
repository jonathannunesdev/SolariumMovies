import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";


export const Header = styled.header<{ theme: themeType }>`
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: ${(props) =>
      props.theme === "light" ? "#FFF;" : "#222;"}
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
      transition: all 0.3s ease-in-out;
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1000;

    a{
        text-decoration: none;
        color: #AAA;
    }

`;

export const HeaderContainer = styled.div<{ theme: themeType }>`
    max-width: 1000px;
    margin: auto;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    h1{
        color: #AEDAEA;
        &:hover{
            cursor: pointer;

        }
        @media (max-width: 700px) {
          font-size: 20px;
        }
    }

    h1 b{
        color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
        transition: all 0.3s ease-in-out;
    }
    @media (max-width: 700px) {
      justify-content: center;
    }
`;

export const Nav = styled.nav`
  position: relative;
`;

export const MenuIcon = styled.span<{ menuOpen: boolean; theme: themeType }>`
  display: block;
  width: 25px;
  height: 3px;
  background-color: ${(props) => (props.menuOpen ? "#0098DA" : "#AEDAEA")};
  transition: all 0.3s ease-in-out;
  position: absolute;
  left: 25;
  top: 50%;
  transform: translateY(-50%);  
  

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${(props) => (props.menuOpen ? "#0098DA" : "#AEDAEA")};
    transition: all 0.3s ease-in-out;
  }

  &::before {
    transform: translateY(-10px);
  }

  &::after {
    transform: translateY(10px);
  }

  @media (max-width: 700px) {
    display: block;
  }
`;

export const MenuToggle = styled.button<{ theme: themeType }>`
  display: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;


  @media (max-width: 700px) {
    display: block;
  }
`;

export const NavList = styled.ul<{ menuOpen: boolean; theme: themeType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  text-align: center;
  
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    background-color: ${(props) =>
      props.theme === "light" ? "#FFF;" : "#222;"}
    transition: all 0.3s ease-in-out, transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    width: 90vw;
    height: 100vh;
    position: fixed;
    right: 10%;
    top: 0px;
    transform: ${(props) => (props.menuOpen ? "translateX(0)" : "translateX(-100%)")};
    opacity: ${(props) => (props.menuOpen ? "0.98" : "0")};
    font-size: 20px;
    padding: 10px;
    z-index: -2;
  }

`;

export const NavListItem = styled.li<{ theme: themeType }>`
  padding-right: 30px;
  color: #aaa;
  cursor: pointer;

  a{
    color: #888;
  }
  strong {
    font-weight: 100;
    color: ${(props) => (props.theme === "light" ? "#ECB733;" : "#AEDAEA;")};
  }
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

export const NavListItemBox = styled.li<{ theme: themeType }>`
  text-align: center;
  color: #FFF;
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "#AEDAEA;" : "#0098DA;"}
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
    width: 100px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 17px;
    margin-right: 50px;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 700px) {
    scale: 1.2;
    font-size: 20px;
    margin-right: 0;
  }
`;
