import React from "react";
import styled from "@emotion/styled";

const AddInput = styled.div`
  width: 445px;
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;

  input {
    top: 48px;
    left: 85px;
    width: 100%;
    height: 100%;
    background: #ffffff 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 17px;
    border: none;
    outline: none;
    &::placeholder {
      font: italic normal bold 16px/19px Roboto;
      letter-spacing: 0px;
      text-transform: uppercase;
      opacity: 1;
      color: ${({ theme }) => theme.color};
    }
  }

  span {
    position: absolute;
    font-size: 24px;
    right: 17px;
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.color};
    opacity: 1;
  }
`;

const AddNewTodo = ({ input, setInput, addNewTodo }) => {
  return (
    <AddInput>
      <input
        type="text"
        value={input}
        placeholder="ADD A NEW MISSION"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <span className="material-icons" onClick={addNewTodo}>
        add
      </span>
    </AddInput>
  );
};

export default AddNewTodo;
