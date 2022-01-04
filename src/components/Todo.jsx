import React from "react";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";
const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left !important;

  &:hover {
    .check-icon {
      display: inline-block;
    }
  }

  .check-icon {
    display: none;

    &:hover {
      background-color: #e2e2e2;
      border-radius: 3px;
    }
  }
`;

const Todo = ({ todo, onCheckBtnClick }) => {
  return (
    <ButtonStyled
      shouldFitContainer
      iconAfter={
        !todo.isCompleted ? (
          <span className="check-icon" onClick={() => onCheckBtnClick(todo.id)}>
            <CheckIcon primaryColor="#4fff4f"></CheckIcon>
          </span>
        ) : (
          <CheckIcon primaryColor="#FF0000"></CheckIcon>
        )
      }
    >
      {todo.name}
    </ButtonStyled>
  );
};

export default Todo;
