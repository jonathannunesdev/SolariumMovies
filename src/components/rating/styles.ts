import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const CircularProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 100px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const CircularProgressText = styled.span<{ theme: themeType }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.theme === "light" ? "#0098DA;" : "#FFF;")};
`;
