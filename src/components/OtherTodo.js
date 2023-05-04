import React from "react";
import styled from "@emotion/styled";

const OtherTodosBox = styled.div`
  width: 100%;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  flex-grow: 10;
  gap: 10px;
  overflow: hidden;

  li {
    height: 32px;
    display: flex;
    border-bottom: 1px solid #003164;
    width: 100%;
    gap: 5px;
    p {
      flex-grow: 1;
      display: flex;
      align-items: start;
      text-align: left;
      font: normal normal bold 16px/24px Roboto;
      letter-spacing: 0px;
      color: $darkBlue;
      text-transform: uppercase;
    }
    span {
      display: flex;
      font-size: 24px;
      align-items: start;
    }
  }
`;

const OtherTodo = ({
  todoList,
  changeStatus,
  removeTodo,
  setCurrentTodo,
  workTime,
}) => {
  return (
    <OtherTodosBox>
      {todoList.map((t, index) => {
        if (t.select === false) {
          return (
            <li key={index}>
              <span
                className="material-icons"
                onClick={() => {
                  changeStatus(t);
                }}
              >
                radio_button_unchecked
              </span>
              <p style={{ textDecoration: t.done && "line-through" }}>
                {t.content}
              </p>
              {workTime ? (
                <span
                  className="material-icons"
                  style={{ display: t.done && "none" }}
                  onClick={() => {
                    setCurrentTodo(t);
                  }}
                >
                  play_circle_outline
                </span>
              ) : (
                ""
              )}
              <span
                className="material-icons"
                onClick={() => {
                  removeTodo(t);
                }}
              >
                remove_circle_outline
              </span>
            </li>
          );
        }
      })}
    </OtherTodosBox>
  );
};

export default OtherTodo;
