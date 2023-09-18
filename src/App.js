import React, { useContext, useEffect, useReducer, useState } from "react";
import "./App.css";
import GlobalContext, {GlobalContext2} from "./Context";
import counterReducer, {ACTION_TYPES} from "./reducer";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
const KEY = "CS568-2023";

const Team = React.memo(function Team({ name }) {
  console.log(`Rendered ${name}`);
  const count = useContext(GlobalContext);
  return (
    <p>
      {name}: {count}
    </p>
  );
})


function App() {
  //const [state, setState] = useState({count1: 0, count2: 0});
  const [state, dispatch] = useReducer(counterReducer, {count1: 0, count2: 0});
  const increase1 = () => {
    //setState({...state, count1: state.count1+1});
    dispatch({type: ACTION_TYPES.INC_C1, payload: state.count1 + 1});
    localStorage.setItem(KEY, JSON.stringify({...state, count1: state.count1+1}));
  };
  const increase2 = () => {
    //setState({...state, count2: state.count2+1});
    dispatch({type: ACTION_TYPES.INC_C2});
    localStorage.setItem(KEY, JSON.stringify({...state, count2: state.count2+1}));
  };

  useEffect(() => {
    const res = localStorage.getItem(KEY);
    if(res){
      let obj = JSON.parse(res);
      dispatch({type: ACTION_TYPES.INIT, payload: obj})
    }
  }, [])

  return (
    <div className="App">
      <h3>Game Time</h3>
      <GlobalContext.Provider value={state.count1}>
        <Team name="Chicago" />
      </GlobalContext.Provider>

      <GlobalContext.Provider value={state.count2}>
        <Team name="Iowa" />
      </GlobalContext.Provider>
      <p>
        Current Result: {state.count1} - {state.count2}
      </p>
      <button onClick={increase1}>Increase 1</button>
      <button onClick={increase2}>Increase 2</button>
    </div>
  );
}

export default App;
