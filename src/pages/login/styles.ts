import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
  }

  h1 {
    text-align: center;
    color: #0098da;
    margin: 0;
    margin-bottom: 25px;
    font-size: 40px;

    @media (max-width: 800px) {
      margin-bottom: 15px;
      margin-top: 50px;
      font-size: 35px;
    }
  }

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 40px;

    @media (max-width: 800px) {
      margin: 0;
      flex: 2;
    }

    .mobile {
      padding: 5px;
      border-radius: 15px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
      background-color: #000;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 800px) {
        margin: 0;
        display: none;
      }

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 15px;
      }
    }
  }

  .right {
    flex: 2;
    display: flex;
    justify-content: center;
    // flex-direction: column;
    align-items: center;
    margin-left: 40px;

    @media (max-width: 800px) {
      margin: 0;
      margin-bottom: 40px;
    }
  }
`;
