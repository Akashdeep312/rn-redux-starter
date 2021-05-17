import { app } from "@constants/action-types";

const { toggleButton } = app;

const initialState = {
  clicked: false,
  
};

const App = (state = initialState, { type, payload }) => {
  switch (type) {
    case toggleButton:
      return { ...state, clicked: payload };

    default:
      return state;
  }
};

export default App;
