import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
    flex:1;
   h1{

   }
    .password-container {
      position: relative;
  
      .toggle-password {
        position: absolute;
        top: 50%;
        right: 0;
        background: none;
        border: none;
        cursor: pointer;
        padding: 15px;
        font-size: 20px;
        color: #fff;
        transform: translateY(-50%);
      }
    }

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
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-radius: 0;

        &::placeholder{
            color: #FFF;
        }
        
    }

    .button--signup{
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
    
    .error-message {c
        color: #F00;
        font-size: 14px;
        margin-top: -10px;
        margin-bottom: 10px;
        margin-left: 15px;
      }
    
      .social-login{
        display: flex;
        justify-content: center;

        .button--google{
          display: flex;;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
          width: 50px;
          height: 50px;
          background-color: #FFF;
          border-radius: 50%;
          cursor: pointer;

          &:hover{
            opacity: .7;
          }
        }
      }
    
      @media (max-width: 550px) {
        h1{
          font-size: 20px;
        }
        .button--signup{
          margin-top: 20px;
        }
      }
`;
