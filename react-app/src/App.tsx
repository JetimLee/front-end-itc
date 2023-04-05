import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Message } from "./Message";
import { ListGroup } from "./components";

function App() {
  const handleSelect = (item: string) => console.log(item);
  return (
    <>
      <ListGroup
        onSelectItem={handleSelect}
        heading="My list"
        items={["New York", "San Francisco", "Tokyo", "London", "Paris"]}
      />
    </>
  );
}

export default App;
