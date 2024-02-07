import { useState } from "react";
import { Like } from "./Like";
function App() {
  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <>
      <Like liked={liked} onClick={handleLike} />
    </>
  );
}

export default App;
