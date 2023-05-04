import React from "react";
import styled from "@emotion/styled";

const CounterText = styled.p`
  top: 297px;
  left: 80px;
  width: 100%;
  text-align: center;
  font: normal normal bold 176px/176px Roboto;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.color};
  opacity: 1;
`;

const Counter = ({ remainTime }) => {
  return (
    <CounterText>
      {Math.floor(remainTime / 60)
        .toString()
        .padStart(2, "0")}
      :
      {Math.floor(remainTime % 60)
        .toString()
        .padStart(2, "0")}
    </CounterText>
  );
};

export default Counter;
