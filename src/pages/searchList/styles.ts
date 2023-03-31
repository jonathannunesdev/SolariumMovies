import styled from "styled-components";


export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  padding: 0px 20px;
  min-height: 100vh;

  .container--button {
    height: 20vh;
    display: flex;
    align-items: center;
  }

  .search--area {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-bottom: 5vh;

    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

`;
