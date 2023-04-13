import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
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

  form label input.input-email,
  form label input.input-password {
    width: 100%;
    padding-right: 40px;
    margin-bottom: 15px;
    padding: 15px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-bottom: 1px solid #FFF;
    font-family: "Ubuntu", sans-serif;
    color: #FFF;
    cursor: pointer;
    background-color: ${(props) =>
      props.theme === "light" ? "#AEDAEA;" : "#333;"};
    transition: all 0.3s ease-in-out;
    font-size: 20px;
    border-radius: 0;

    &::placeholder {
      color: #FFF;
    }
  }

  .login--button {
    margin: 40px 0px 20px 0px;
    padding: 20px;
    border-radius: 10px;
    border: none;
    font-family: "Ubuntu", sans-serif;
    color: #FFF;
    cursor: pointer;
    background-color: #0098DA;
    font-size: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);

    &:hover {
      opacity: 0.8;
    }
  }

  .error-message {
    color: #F00;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: 10px;
    margin-left: 15px;
  }

  .without--account {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;

    .remember-login {
      color: #888;
      cursor: pointer;
    }

    .forgotPassword {
      color: #888;
      text-decoration: underline;
      cursor: pointer;
    }

    span {
      a {
        color: #888;
        cursor: pointer;
        padding: 10px;
        line-height: 30px;

        &:hover {
          opacity: 0.8;
        }
      }
    }

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

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
