import { useEffect } from "react";
import { SignInForm } from "../../components/signInForm";
import movieMobile from "../../assets/bannersMobile/01.png";
import { Container } from "./styles";


export const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
   

  return (
    <Container>
      <div className="left">
        <div className="mobile">
          <img src={movieMobile} alt="" />
        </div>
      </div>
      <div className="right">
        <SignInForm />
      </div>
    </Container>
  );
};
