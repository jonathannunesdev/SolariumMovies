import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  position: relative;
  padding: 20px;

  .number h1 {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 165px;
    color: rgba(255, 255, 255, 0.3);
    -webkit-text-stroke: 1px transparent;
    text-shadow: none;
    z-index: 1;

    @media (max-width: 480px) {
      top: 0%;
      right: 0;
      font-size: 250px;
      z-index: 999;
    }
    
    @media (max-width: 395px) {
      top: -40%;
      right: 10%;
      font-size: 250px;
      z-index: 999;
    }
    
    @media (max-width: 300px) {
      top: -65%;
      right: 10%;
      font-size: 200px;
      z-index: 999;
    }
  }
}
 
`;

export const BannerImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  z-index: -1;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
  cursor: pointer;

  &:hover {
    box-shadow: 0.2em 0.3em 0.4em -0.4em black;
    transform: translateY(-0.25em);
    opacity: 0.8;
  }

  @media (max-width: 400px) {
    width: 65%;
  }
`;
