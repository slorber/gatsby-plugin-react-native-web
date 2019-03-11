/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TodosFilter, Pagination } from "./globalTypes";

// ====================================================
// GraphQL query operation: GET_TODOS
// ====================================================

export interface GET_TODOS_todos {
  __typename: "Todo";
  id: string;
  text: string;
  checked: boolean;
}

export interface GET_TODOS {
  todos: GET_TODOS_todos[];
  todosCount: number;
}

export interface GET_TODOSVariables {
  filter: TodosFilter;
  pagination: Pagination;
}
