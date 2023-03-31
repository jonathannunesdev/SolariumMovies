import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) =>
    props.theme === "light" ? "row-reverse;" : "row;"}
  border-radius: 15px;
  border: 1px solid #333;
  width: 60px;
  height: 30px;
  background-color: #333;
  color: #ECB733;
  font-size: 14px;
  text-align: end;

  @media (max-width: 700px) {
    scale: 1.5;
    margin-top: 100px;
  }

  button{
    transition: all 3s linear;
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 0;
    position: relative;

    &:active::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 50%;
      box-shadow: 0 0 5px 5px rgba(0, 152, 218, 0.7);
      transition: box-shadow 0.3s ease-in-out;
    }

  }
`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  margin: 0 5px;
  font-size: 19px;
`;
