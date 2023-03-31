import styled from "styled-components";
import { themeType } from "./reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
    background-color: ${(props) =>
      props.theme === "light" ? "#AEDAEA;" : "#333;"}
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
`;

export const Header = styled.div`
`;

export const Footer = styled.div<{ theme: themeType }>`
    background-color: ${(props) =>
      props.theme === "light" ? "#0098DA;" : "#222;"}
    transition: all 0.3s ease-in-out;
`;

