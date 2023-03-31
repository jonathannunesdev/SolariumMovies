import React from "react";
import { CircularProgressContainer, CircularProgressText } from "./styles";
import { useContext } from "react";
import { Context } from "../../contexts/Context";

interface CircularProgressProps {
  percentage: number;
}

//componente que renderiza o rating do filme ou serie.
export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
}) => {
  const { state } = useContext(Context);
  const progress = 314.16 - (percentage / 100) * 314.16;

  return (
    <CircularProgressContainer>
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(60,60)">
          <circle r="54" fill="transparent" stroke="#ccc" strokeWidth="12" />
          <circle
            r="54"
            fill="transparent"
            stroke="#27AE60"
            strokeWidth="12"
            strokeDasharray="314.16"
            strokeDashoffset={progress}
            transform="rotate(-90)"
          />
        </g>
      </svg>
      <CircularProgressText theme={state.theme.status}>
        {percentage}%
      </CircularProgressText>
    </CircularProgressContainer>
  );
};
