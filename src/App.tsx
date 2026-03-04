import Buttons from "./components/buttons/Buttons";
import { Counter } from "./components/class-components/CounterClass";
import ToggleWithReducer from "./components/hooks-testing/ToggleWithReducer";

function App() {
  return (
    <>
      <ToggleWithReducer />

      <Buttons />
      <Counter initialCount={3} />
    </>
  );
}

export default App;
