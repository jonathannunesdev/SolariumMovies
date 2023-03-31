import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  padding: 20px 30px;
`;

export const movingPlaceholder = keyframes`
  0% {
    transform: translateX(100%);
  }
  90%, 100% {
    transform: translateX(-100%);
  }
`;

export const ContainerArea = styled.div<{ theme: themeType }>`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;

    .top {
      text-align: center;
      margin: 15px 0;
      color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
      transition: all 0.3s ease-in-out;
      font-size: 30px;  
        
      @media (max-width: 600px) {
        font-size: 18px; 
      }
      
     
      h1{
        font-size: 40px; 
          @media (max-width: 600px) {
            font-size: 18px; 
          }
      }
      
      strong {
          color: ${(props) =>
            props.theme === "light" ? "#0098DA;" : "#AEDAEA;"} 
          transition: all 0.3s ease-in-out;
      }

      span strong{
          font-size: 30px;

          @media (max-width: 600px) {
            font-size: 18px; 
          }
      }
  }

  .bottom {
    position: relative;
      margin: 40px 0;
      display: flex;
      align-items: center;
      width: 100%;
      border-radius: 40px;
      background-color: ${(props) =>
        props.theme === "light" ? "#B4E0F0;" : "#222;"}
      transition: all 0.3s ease-in-out;

      
       input{
          width: 100%;
          height: 70px;
          padding: 20px 40px;
          box-sizing: border-box;
          cursor: pointer;
          border: none;
          outline: none;
          font-family: 'Ubuntu', sans-serif;
          color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")}
          background-color: ${(props) =>
            props.theme === "light" ? "#B4E0F0;" : "#222;"}
          transition: all 0.3s ease-in-out;
          font-size: 20px;
          border-radius: 40px;

         
            &::placeholder,
            &::-webkit-input-placeholder {
              display: none;
            }   
        }
  
       button{
          height: 70px;
          width: auto;
          padding: 20px 30px;
          border-radius: 40px;
          border: none;
          font-family: 'Ubuntu', sans-serif;
          color: #FFF;
          cursor: pointer;
          background-color: #0098DA;
          font-size: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
          z-index: 999;
          &:hover{
             opacity: .8;
          }
      }

      
      span {
        
        position: absolute;
        left: 40px;
        top: 50%;
        transform: translateY(-50%);
        overflow: hidden;
        width: calc(100% - 80px);
        white-space: nowrap;
        font-size: 20px;
        font-family: "Ubuntu", sans-serif;
        color: ${(props) => (props.theme === "light" ? "#000;" : "#FFF;")};
        pointer-events: none;
        z-index: 0;

        
      }
      
    
      span::before {
        content: "Busque seu Filme, Série ou Pessoa...";
        animation: ${movingPlaceholder} 7s linear infinite;
        display: inline-block;
        white-space: nowrap;
    
        @media (min-width: 500px) {
          animation: none;
        }
      }
    }
  }      

`;

export const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  font-size: 25px;
`;
