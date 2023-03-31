import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
    flex:1;
   
    form{
        display: flex;
        flex-direction: column;
    }

  
    form label input{
        width: 100%;
        margin-bottom: 15px;
        padding: 15px;
        box-sizing: border-box;
        border: none;
        outline: none;
        border-bottom: 1px solid #FFF;
        font-family: 'Ubuntu', sans-serif;
        color: #FFF;
        cursor: pointer;
        background-color: ${(props) =>
          props.theme === "light" ? "#AEDAEA;" : "#333;"}
        transition: all 0.3s ease-in-out;
        font-size: 20px;
  

        &::placeholder{
            color: #FFF;
        }
        
    }

    form button{
        margin-top: 40px;
        padding: 20px;
        border-radius: 10px;
        border: none;
        font-family: 'Ubuntu', sans-serif;
        color: #FFF;
        cursor: pointer;
        background-color: #0098DA;
        font-size: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);

        &:hover{
           opacity: .8;
        }
    }
    
    .error-message {
        color: #F00;
        font-size: 14px;
        margin-top: -10px;
        margin-bottom: 10px;
        margin-left: 15px;
      }
    

    
`;
