import { useReducer } from "react";

export default function ToggleWithReducer() {
  const [greet, dispatch] = useReducer(
    (state, action) => (state = action.payload),
    "Initial state",
  );
  return (
    <div>
      ToggleWithReducer {greet.toString()}
      <button onClick={() => dispatch({ type: "Hello", payload: "hello" })}>
        Hello
      </button>
      <button onClick={() => dispatch({ type: "Bye", payload: "Bye" })}>
        Bye
      </button>
    </div>
  );
}
