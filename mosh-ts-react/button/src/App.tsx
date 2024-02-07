import { Button } from "./Button";
import { Alert } from "./Alert";
import { useState } from "react";

function App() {
  const [shouldShow, setShouldShow] = useState(false);

  const handleShouldShow = (): void => {
    setShouldShow(!shouldShow);
  };

  return (
    <>
      {shouldShow && <Alert onClick={handleShouldShow} />}
      <Button
        color="btn-danger"
        onClick={handleShouldShow}
        children="Hello Button"
      />
    </>
  );
}

export default App;
