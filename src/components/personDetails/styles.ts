import styled from 'styled-components';
import { themeType } from '../../reducers/themeReducer';

type ContainerBackdropProps = {
  backdropUrl: string;
}

export const ContainerBackdrop = styled.div<ContainerBackdropProps>`
  width: 100vw;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  position: relative;
  
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
  }
`;

export const ContainerArea = styled.div`
    z-index: 999;
    max-width: 1000px;
    min-height: 90vh;
    margin: auto;
    padding: 0 30px;
`;

export const Container = styled.div<{theme: themeType}>`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme === 'light' ? '#AEDAEA;' : '#222;'}
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.12);
  flex-direction: column;
  

 

  strong{
    color: ${props => props.theme === 'light' ? '#0098DA;' : '#AEDAEA;'}
    transition: all 0.3s ease-in-out;
    margin-bottom: 10px;
    font-size: 20px;
  }
  
  .cast{
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    .knownFor--area{
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
    @media (max-width: 820px) {
      display: flex;
      flex-direction: column-reverse;
      align-items: space-around;

    }
  }
  
  .details{
    display: flex;
    padding: 40px 20px;


    @media (max-width: 820px) {
      flex-direction: column;

    }

    

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
          color: ${props => props.theme === 'light' ? '#0098DA;' : '#AEDAEA;'}
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
      flex: 2;
      padding: 0 20px;
      color: #888;
      max-height: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      overflow: hidden;
      text-align: justify;

      strong{
        color: ${props => props.theme === 'light' ? '#0098DA;' : '#AEDAEA;'}
        transition: all 0.3s ease-in-out;
        padding: 10px 0;
      }

      h2{
        color: ${props => props.theme === 'light' ? '#555;' : '#FFF;'}
        transition: all 0.3s ease-in-out;
        margin: none;
        padding: none;
      }
     }


  }
`;



