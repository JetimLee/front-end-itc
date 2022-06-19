import { FC } from "react";
import { Link } from "react-router-dom";
import "./UserItem.css";

interface Props {
  userLogin: string;
  avatarUrl: string;
}

export const UserItem: FC<Props> = ({
  userLogin = "Something",
  avatarUrl,
}: Props) => {
  return (
    <div className="card shadow-cyan-500/50 compact side bg-cyan-800">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatarUrl} alt="A github profile avatar" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{userLogin}</h2>
          <Link
            className="text-base-content text-opacity-40 link-underline link-underline-black"
            to={`/users/${userLogin}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
