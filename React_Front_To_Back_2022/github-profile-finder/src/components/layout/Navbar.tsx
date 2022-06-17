import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  title?: string;
}
const Navbar: FC<Props> = ({ title = "Default Title" }: Props) => {
  return <div>{title}</div>;
};

export default Navbar;
