import styled from "styled-components";

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-top: 10vh;
  z-index: 0;

  @media (max-width: 912px) {
    height: 100vh;
  }
`;

export const ArrowDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #555;
  background-color: #AEDAEA;
  border-radius: 20px;
  width: 130px;
  height: 35px;
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 40px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Subtitle = styled.h2`
  position: absolute;
  font-size: 10vw;
  text-align: center;
  color: #FFF;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  white-space: nowrap;

  strong{
    color: #AEDAEA;
  }

  @media (min-width: 912px) {
    font-size: 5vw;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
  min-height: 100vh;
  max-width: 100vw;
`;

export const ImageContainer = styled.div`
  position: relative;
  max-height: 90vh;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  overflow-x: hidden;
  margin-bottom: 10vh;
`;
