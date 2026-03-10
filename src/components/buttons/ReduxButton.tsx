import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../../slices/counterSlice";
import { useState } from "react";
import { RootState } from "../../App";

export default function ReduxButton() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  return (
    <div className="flex gap-4 m-4 p-4 border rounded-lg">
      <p>{count}</p>
      <input type="number" onChange={(e) => setValue(Number(e.target.value))} />
      Buttons for redux
      <button onClick={() => dispatch(increase(value))}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}
