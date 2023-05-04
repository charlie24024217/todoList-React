import React from "react";
import styled from "@emotion/styled";

const CircleBorder = styled.div`
  position: absolute;
  top: calc(50vh - 20vw);
  right: 13%;
  width: 40vw;
  aspect-ratio: 1/1;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.color};
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Circle = styled.div`
  width: 94%;
  height: 94%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 96px;
    color: #ffffff;
    cursor: pointer;
    transition: 0.1s;
    &:hover {
      transform: scale(1.2);
    }
    &:active {
      transform: scale(0.8);
    }
  }
`;

const ButtonCircle = ({ toggleStart, start }) => {
  return (
    <CircleBorder>
      <Circle>
        <span className="material-icons" onClick={toggleStart}>
          {start ? "pause_circle_filled" : " play_circle_filled"}
        </span>
      </Circle>
    </CircleBorder>
  );
};

export default ButtonCircle;
