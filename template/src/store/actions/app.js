import { app } from "@constants/action-types";

const { toggleButton } = app;

const AppActions = {
  click: clicked => dispatch => dispatch({ type: toggleButton, payload: clicked })
};

export const { click } = AppActions;
