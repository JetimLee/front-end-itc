import { FC, useEffect, useContext } from "react";
import { FaCode, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import GithubContext from "../../context/github/GithubContext";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../layout";
import { RepoList } from "../repos";
export const User: FC = () => {
  const { getUser, getUserRepos, user, loading, repos } =
    useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login!);
    getUserRepos(params.login!);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <img src={user.avatar_url} alt="Avatar for a Gihub User" />
                </figure>
                <div className="card-body justify-end">
                  <h2 className="card-title mb-0">{user.name}</h2>
                  <p className="grow-0">{user.login}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title">
                  {user.name}{" "}
                  <div className="ml-2 mr-1 badge badge-success">
                    {user.type}
                  </div>
                  {user.hireable && (
                    <div className="mx-1 badge badge-info"></div>
                  )}
                </h1>
                <p>{user.bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                  >
                    Visit Github Profile
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg shadow-md bg-base-100 stats">
                {user.location && (
                  <div className="stat">
                    <div className="stat-title text-md">Location</div>
                    <div className="text-lg stat-value">{user.location}</div>
                  </div>
                )}
                {user.company && (
                  <div className="stat">
                    <div className="stat-title text-md">Company</div>
                    <div className="text-lg stat-value">{user.company}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.followers}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.following}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCode className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.public_repos}
              </div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {user.public_gists}
              </div>
            </div>
          </div>
          <RepoList repos={repos} />
        </div>
      )}
    </>
  );
};
