import { useEffect, FC, useState } from "react";
import { UserResults } from "../users";
import { user } from "../../interfaces/userInterface";

export const Home: FC = () => {
  return (
    <>
      <UserResults />
    </>
  );
};
