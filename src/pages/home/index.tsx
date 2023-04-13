import { useContext, useState, useEffect } from "react";
import { useRef } from "react";

import { Context } from "../../contexts/Context";
import { SignUp } from "../signUp";
import { Logged } from "../logged/index";
import { SliderBanner } from "../../components/sliderBanner";
import { Loading } from "../../components/loading";

import * as C from "./styles";

export const Home = () => {
  const { state } = useContext(Context);
  const signUpRef = useRef<HTMLDivElement>(null);
  const [isLoading] = useState(false);

  const scrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const isUserLoggedIn = () => {
    return state.user.user && state.user.user.isFormSubmitted;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  },[])

  return (
    <C.Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {isUserLoggedIn() ? (
            <Logged />
          ) : (
            <>
              <SliderBanner onArrowDownClick={scrollToSignUp} />
              <SignUp ref={signUpRef} />
            </>
          )}
        </>
      )}
    </C.Container>
  );
};
