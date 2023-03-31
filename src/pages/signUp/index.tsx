import { forwardRef } from "react";
import { SignUpForm } from "../../components/signupForm";
import movieMobile from "../../assets/bannersMobile/01.png";
import { Container } from "./styles";

export const SignUp = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <Container ref={ref}>
      <div className="left">
        <div className="mobile">
          <img src={movieMobile} alt="" />
        </div>
      </div>
      <div className="right">
        <SignUpForm />
      </div>
    </Container>
  );
});
