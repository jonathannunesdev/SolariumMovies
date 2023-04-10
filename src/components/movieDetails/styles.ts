import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

type ContainerBackdropProps = {
  backdropUrl: string;
};

export const ContainerBackdrop = styled.div<ContainerBackdropProps>`
  width: 100%;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  position: relative;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right right;
    opacity: 0.5;
    filter: blur(2px);

    @media (max-width: 700px) {
      background-position: center;
    }
    
  }
`;

export const ContainerArea = styled.div`
    z-index: 999;
    max-width: 1000px;
    min-height: 90vh;
    margin: auto;
    padding: 0 30px;

    .area--backbutton{
      padding: 20px 0px;
    }
`;

export const Container = styled.div<{ theme: themeType }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
  background-color: ${(props) =>
    props.theme === "light" ? "#AEDAEA;" : "#222;"}
  transition: all 0.3s ease-in-out;
  
  strong{
    color: ${(props) => (props.theme === "light" ? "#0098DA;" : "#AEDAEA;")}
    transition: all 0.3s ease-in-out;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .cast{
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .cast--area{
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;  
      padding-bottom: 5vh;
      font-size: 14px;
     
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
    }
  }

  .favorite{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 20px;

    .rating{
      display: flex;
      align-items: center;
      flex-direction: column;


      strong{
        color: ${(props) =>
          props.theme === "light" ? "#0098DA;" : "#AEDAEA;"}
        transition: all 0.3s ease-in-out;
        font-size: 20px;
      }
    }
  }

  
  .details{
    display: flex;
    padding: 40px 20px;

    @media (max-width: 820px) {
      flex-direction: column;
    }

    .details--left{
      flex:3;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;
      

      @media (min-width: 1024px) {
        .tv--trailer {
          width: 100%;
        }
      }
      

   
      }

      .tv--trailer{
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
        margin-bottom: 50px;
        padding: 5px;

          
        @media (max-width: 820px) {
          width: 100%;
        }

     
        .info{
          min-height: 60px;
          padding: 0 5px;
          color: #555;
          text-align: center;
        }

        .trailer{
          width: 100%;
          padding-top: 56.25%; 
          position: relative;
          box-sizing: border-box;
          border-radius: 10px;
          overflow: hidden;
        }
        
        .trailer iframe{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
         
        
        }
      }

      .poster{
        display: flex; 
        flex-direction: column; 
        flex: 1;
        


        img{
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-sizing: border-box;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
          transition: all 0.3s ease-in-out;
          object-fit: cover;
          margin-bottom: 30px;
          }
      }
    }
  
   
    .details--right{
      flex: 3;
      padding: 0 20px;
      color: #888;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow: hidden;
      text-align: justify;
      
      strong{
        color: ${(props) => (props.theme === "light" ? "#0098DA;" : "#AEDAEA;")}
        transition: all 0.3s ease-in-out;
        padding: 10px 0;
      }

      h2{
        color: ${(props) => (props.theme === "light" ? "#555;" : "#FFF;")}
        transition: all 0.3s ease-in-out;
        margin: none;
        padding: none;
      }
     }


  }
`;
