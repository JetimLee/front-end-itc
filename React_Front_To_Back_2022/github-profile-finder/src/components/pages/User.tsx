import { FC, useEffect, useContext } from "react";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../../context/github/GithubContext";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../layout";

export const User: FC = () => {
  const { getUser, user, loading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login!);
  }, []);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back to Search
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className="rounded-lg shadow-xl card image-full">
                <figure>
                  <img src="" alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
