import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.button<{ theme: themeType }>`
  min-width: 135px;
  height: 40px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12); 
  cursor: pointer;
  background-color: ${(props) =>
    props.theme === "light" ? "#0098DA;" : "#AEDAEA;"}
  transition: all 0.3s ease-in-out;
  color: #222;
  font-size: 25px;

  &:hover{
    opacity: .7;
  }
`;
