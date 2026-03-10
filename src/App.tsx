import { configureStore } from "@reduxjs/toolkit";
import Buttons from "./components/buttons/Buttons";
import { Counter } from "./components/class-components/CounterClass";
import ToggleWithReducer from "./components/hooks-testing/ToggleWithReducer";
import { Provider } from "react-redux";
import { counterSlice } from "./slices/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

function App() {
  return (
    <>
      <Provider store={store}>
        <ToggleWithReducer />

        <Buttons />
        <Counter initialCount={3} />
      </Provider>
    </>
  );
}

export default App;
