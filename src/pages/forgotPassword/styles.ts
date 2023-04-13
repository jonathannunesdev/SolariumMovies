import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .password-container {
    position: relative;

    .toggle-password {
      position: absolute;
      top: 70%;
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
    flex-direction: column;
    align-items: center;
    margin-left: 40px;

    @media (max-width: 800px) {
      margin: 0;
      margin-bottom: 40px;
    }
  }

  form input{
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

.button--reset{
  width: 100%;
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
