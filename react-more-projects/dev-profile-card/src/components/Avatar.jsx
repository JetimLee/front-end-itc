import PropTypes from "prop-types";
export const Avatar = ({ avatarImage }) => {
  return (
    <div>
      <img className="avatar" src={avatarImage} alt="profile avatar" />
    </div>
  );
};

Avatar.propTypes = {
  avatarImage: PropTypes.string.isRequired,
};
