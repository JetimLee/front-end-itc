import React, { useContext, useState } from "react";

import GithubContext from "../../context/github/GithubContext";

export const UserSearch = () => {
  const { userList, searchUsers, clearUsers } = useContext(GithubContext);
  //no reason to move this to context since it doesn't need to be made globally available
  const [text, setText] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("There isn't anything in the search bar");
      //could have an element show up that says there must be some text
      return;
    }
    //search for users otherwise - TO DO
    searchUsers(text);
    setText("");
  };
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                //Doing it like this gets rid of an uncontrolled element being controlled warning
                value={text || ""}
                onChange={(e) => handleChange(e)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {userList.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
