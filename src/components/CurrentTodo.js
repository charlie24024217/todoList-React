import React from "react";
import styled from "@emotion/styled";

const CurrentTodoBox = styled.div`
  width: 100%;
  height: 50px;

  li {
    gap: 10px;
    span {
      font-size: 48px;
      font-weight: 0;
      color: #003164;
    }
    p {
      top: 10px;
      height: 28px;
      text-align: left;
      font: normal normal bold 24px/28px Roboto;
      letter-spacing: 0px;
      color: #003164;
      text-transform: uppercase;
      opacity: 1;
    }
  }
`;

const CurrentTodo = ({ todoList, changeStatus, workTime }) => {
  let foundItem = todoList.filter((t) => {
    return t.select === true;
  });
  if (workTime === false) {
    // console.log("休息時間");
    return (
      <CurrentTodoBox>
        <li>
          <p>休息時間</p>
        </li>
      </CurrentTodoBox>
    );
  } else {
    if (foundItem.length) {
      return (
        <CurrentTodoBox>
          {todoList.map((t, index) => {
            if (t.select === true) {
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
                  <p>{t.content}</p>
                </li>
              );
            }
          })}
        </CurrentTodoBox>
      );
    } else {
      return (
        <CurrentTodoBox>
          <li>
            <p>選擇新事項</p>
          </li>
        </CurrentTodoBox>
      );
    }
  }
};

export default CurrentTodo;
