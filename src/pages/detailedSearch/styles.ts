import styled from "styled-components";
import { themeType } from "../../reducers/themeReducer";

type ContainerBackdropProps = {
  backdropUrl: string;
};

export const ContainerBackdrop = styled.div<ContainerBackdropProps>`
  width: 100vw;
  height: 90vh;
  margin-top: 10vh;
  background-image: ${({ backdropUrl }) => `url(${backdropUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right right;
  display: flex;
  align-items: center;

  .bg--opacity {
    position: absolute;
    width: 100vw;
    height: 90vh;
    background-color: #000;
    opacity: 0.8;
  }
`;

export const Container = styled.div<{ theme: themeType }>`
  max-width: 1000px;
  min-height: 90vh;
  margin: auto;
  z-index: 999;
  display: flex;
  align-items: center;
  padding: 0 20px;
  
  .details{
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
    background-color: ${(props) =>
      props.theme === "light" ? "#AEDAEA;" : "#222;"}
    transition: all 0.3s ease-in-out;
    display: flex;
    padding: 40px 20px;
    max-height: 500px;

    .details--left{
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 20px;


      .rating{
        display: flex;
        align-items: center;
        flex-direction: column;

        strong{
          color: ${(props) =>
            props.theme === "light" ? "#0098DA;" : "#AEDAEA;"}
          transition: all 0.3s ease-in-out;
          margin-bottom: 10px;
          font-size: 20px;
        }
      }

      .tv--trailer{
        background-color: #FFF;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
        margin-bottom: 50px;
        
        padding: 5px;

        .info{
          min-height: 60px;
          padding: 0 5px;
          color: #555;
          text-align: center;
        }

        .trailer{
          display: flex; 
          flex-direction: column; 
          width: 100%;
          height: 56.25%;
          position: relative;
          box-sizing: border-box;
          border-radius: 10px;
          overflow: hidden;
          
          
          .trailer iframe{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          
       
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
