import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
  margin-top: 10vh;
`;

export const ContainerArea = styled.div<{ theme: themeType }>`
    max-width: 1000px;
    min-height: 90vh;
    margin: auto;
    padding: 10px 20px;

    .container--favorites{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
     
      .button--clearAll{
        margin: 30px 0;
        padding:  20px;
        border-radius: 10px;
        background-color: RED;
        color: #FFF;  
        border: 1px solid #FFF;
        cursor: pointer;
        font-family: 'Ubuntu', sans-serif;
        border: 0;

        &:hover{
          opacity: .7;
        }
      }
    }
    .info{
        text-align: center;
        transition: all 0.3s ease-in-out;
        color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
        margin-bottom: 30px;
        h1{
            font-size: 40px;
        }
        span{
            font-size: 30px;
        }
        strong {
            color: ${(props) =>
              props.theme === "light" ? "#0098DA;" : "#AEDAEA;"} 
            transition: all 0.3s ease-in-out;
        }
    }

    .favorites--area{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;  
        padding-bottom: 5vh; 

          
      @media (max-width: 820px) {
        grid-template-columns: repeat(4, 1fr);
      }

      @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
      }
  
      @media (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
      }
    }
`;
