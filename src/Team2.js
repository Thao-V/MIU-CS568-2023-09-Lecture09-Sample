import GlobalContext from "./Context";
import React, { useContext } from "react";

const Team2 = React.memo(function Team2({ name }) {
  console.log(`Rendered ${name}`);
  const {count2} = useContext(GlobalContext);
  return (
    <p>
      {name}: {count2}
    </p>
  );
}) 

export default Team2;