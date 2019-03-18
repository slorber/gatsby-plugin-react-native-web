/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UPDATE_TODO
// ====================================================

export interface UPDATE_TODO_updateTodo {
  __typename: "Todo";
  id: string;
  text: string;
  checked: boolean;
}

export interface UPDATE_TODO {
  updateTodo: UPDATE_TODO_updateTodo;
}

export interface UPDATE_TODOVariables {
  id: string;
  text: string;
  checked: boolean;
}
