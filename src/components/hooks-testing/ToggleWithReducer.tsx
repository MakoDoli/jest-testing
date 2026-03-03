import { useReducer } from "react";

export default function ToggleWithReducer() {
  const [greet, dispatch] = useReducer(
    (_state: string, action: { payload: string; }) => (_state = action.payload),
    "Initial state",
  );
  return (
    <div>
      ToggleWithReducer {greet.toString()}
      <button onClick={() => dispatch({  payload: "hello" })}>
        Hello
      </button>
      <button onClick={() => dispatch({  payload: "Bye" })}>
        Bye
      </button>
    </div>
  );
}
