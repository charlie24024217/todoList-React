import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import AddNewTodo from "./AddNewTodo";
import CurrentTodo from "./CurrentTodo";
import Counter from "./Counter";
import OtherTodo from "./OtherTodo";
import ButtonCircle from "./ButtonCircle";
import useCounter from "../hooks/useCounter";

const TodoListBox = styled.div`
  display: flex;
`;
const LeftPart = styled.div`
  width: 50vw;
  height: 100vh;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
const LeftContainer = styled.div`
  max-width: 445px;
  margin-left: 90px;
  height: 100vh;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
`;
const MainTodo = styled.div`
  width: 100%;
  margin: 16vh 0 0 0;
`;
const RightPart = styled.div`
  width: 33%;
  height: 100vh;
  background-color: #003164;
`;

const TodoList = ({ workTime, setWorkTime, start, setStart }) => {
  // const CounterStatus = {
  //   workTime: true,
  //   start: false,
  // };
  // const [workTime, setWorkTime] = useState(CounterStatus.workTime);
  // const [start, setStart] = useState(CounterStatus.start);

  const remainTime = useCounter({ workTime, start });

  const checkTime = () => {
    // console.log("檢查剩餘時間");
    if (remainTime < 0) {
      setWorkTime(!workTime);
      setStart(false);

      // console.log("時間到");
      setTodoList(
        todoList.map((t) => {
          return { ...t, select: false };
        })
      );
    }
  };

  useEffect(() => {
    checkTime(remainTime);
  }, [remainTime]);

  const toggleStart = () => {
    setStart(!start);
    // console.log("開始/暫停倒數");
  };

  //------------------------------------------

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([
    { content: "the First thing to do today", done: false, select: true },
    { content: "the second thing to do today", done: false, select: false },
    { content: "the third thing to do today", done: true, select: false },
  ]);

  const addNewTodo = () => {
    if (input.trim() !== "") {
      setTodoList(
        todoList.concat({ content: input.trim(), done: false, select: false })
      );
    }
    setInput("");
  };
  const changeStatus = (todo) => {
    let newAry = todoList.map((t) => {
      if (t === todo) {
        return { content: t.content, done: !t.done, select: false };
      } else {
        return t;
      }
    });
    setTodoList(newAry);
  };
  const setCurrentTodo = (todo) => {
    let newAry = todoList.map((t) => {
      if (t === todo) {
        return { content: t.content, done: t.done, select: true };
      } else {
        return { content: t.content, done: t.done, select: false };
      }
    });
    setTodoList(newAry);
  };
  const removeTodo = (todo) => {
    setTodoList(todoList.filter((t) => t !== todo));
  };

  return (
    <TodoListBox>
      <LeftPart>
        <LeftContainer>
          <AddNewTodo
            input={input}
            setInput={setInput}
            addNewTodo={addNewTodo}
          />
          <MainTodo>
            <CurrentTodo
              todoList={todoList}
              changeStatus={changeStatus}
              workTime={workTime}
            />
            <Counter remainTime={remainTime} />
          </MainTodo>
          <OtherTodo
            todoList={todoList}
            changeStatus={changeStatus}
            removeTodo={removeTodo}
            setCurrentTodo={setCurrentTodo}
            workTime={workTime}
          />
        </LeftContainer>
      </LeftPart>
      <RightPart></RightPart>
      <ButtonCircle toggleStart={toggleStart} start={start} />
    </TodoListBox>
  );
};

export default TodoList;
