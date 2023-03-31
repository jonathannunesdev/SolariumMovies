import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

export const Container = styled.div<{ theme: themeType }>`
    a{
        list-style: none;
        text-decoration: none;
    }
    width: 100%
    height: auto;
    background-color: #FFF;
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) =>
      props.theme === "light" ? "#FFF;" : "#AEDAEA;"}
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.12); 
    cursor: pointer;
    
    transition: all 0.3s ease-in-out; 

    &:hover{
        box-shadow: 0.2em 0.3em 0.4em -0.4em black;
        transform: translateY(-0.25em);
        opacity: .8;
        }

    .title{
        padding: 10px;
        text-align: center;
        color: #333; 
    }

    img{
        min-height: 70%;
        width: 100%;
        object-fit: cover;
        
    }
`;

export const DeleteButtonContainer = styled.div`
  button {
    outline: none;
    background: none;
    border: none;
    color: #888;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      font-size: 25px;
    }
  }
`;
