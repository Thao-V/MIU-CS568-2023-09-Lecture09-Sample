import { useContext, useEffect, useState } from "react"
import GlobalContext from "./Context";

export default function Counter(){
  const {state, setState} = useContext(GlobalContext);

  const increase = () => {
    setState({...state, count: state.count+1});
  }
  return(
    <div>
      <p>{state.count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  )
}