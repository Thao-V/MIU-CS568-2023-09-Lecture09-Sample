import GlobalContext from "./Context";
import React, { useContext } from "react";

const Team1 = React.memo(function Team1({ name }) {
  console.log(`Rendered ${name}`);
  const {count1} = useContext(GlobalContext);
  return (
    <p>
      {name}: {count1}
    </p>
  );
})

export default Team1;