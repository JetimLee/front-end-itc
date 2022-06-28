import { FC, useContext, useEffect } from "react";
import { user } from "../../interfaces/userInterface";
import { Spinner } from "../layout";
import { UserItem } from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
export const UserResults: FC = () => {
  const { loading, userList } = useContext(GithubContext);

  // useEffect(() => {
  //   getUsers();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      {loading ? (
        <div className="grid place-items-center h-screen">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {userList.map((user: user) => {
            return (
              <UserItem
                key={user.id}
                avatarUrl={user.avatar_url}
                userLogin={user.login}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
