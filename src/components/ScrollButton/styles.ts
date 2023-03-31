import styled from "styled-components";

export const ScrollButton = styled.button<{ show: boolean }>`
  display: ${(props) => (props.show ? "block;" : "none;")}
  position: fixed;
  width: 70px;
  height: 70px;
  bottom: 10%;
  right: 10%;
  z-index: 999;
  font-size: 16px;
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.theme === "light" ? "#0098DA;" : "#444;"}
  transition: all 0.3s ease-in-out;
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  text-align: center;
  border: none;

    
  @media (max-width: 1280px) {
    top: 12%;
    right: 45%;
  }

  @media (max-width: 600px) {
    top: 12%;
    right: 40%;
  }

  &:hover{
    opacity: .7;

  }
`;
