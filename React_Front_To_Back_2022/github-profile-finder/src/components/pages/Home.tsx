import { FC } from "react";
import { UserResults, UserSearch } from "../users";

export const Home: FC = () => {
  return (
    <>
      <UserSearch />
      <UserResults />
    </>
  );
};
