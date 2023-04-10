import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #ecb733;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  
  button {
    outline: none;
    background: none;
    border: none;
    color: #ecb733;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      font-size: 25px;
    }
  }
`;
