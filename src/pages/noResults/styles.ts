import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";
import kid from "../../assets/notfoundimg/kid3.jpg";

export const ContainerBackdrop = styled.div<{ backdrop: string }>`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  position: relative;
  min-height: 90vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ backdrop }) => `url(${backdrop})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }
`;

export const Container = styled.div<{ theme: themeType }>`
  max-width: 300px;
  min-height: 85vh;
  margin: auto;
  z-index: 999;

  .info {
    transition: all 0.3s ease-in-out;
    display: flex;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    height: 83vh;

    h2 {
      color: red;

      strong {
        color: #aedaea;
      }
    }

    .info2 {
      text-align: center;
      span {
        color: #888;
      }
    }
  }
`;
