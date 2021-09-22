import { AiFillHome, AiFillStar, AiFillLike } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { MdEdit, MdRssFeed } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

export const AppColors = {
  primary: "#1564bf",
  light: "#5e91f2",
  dark: "#003b8e",
  white: "#fff",
  neutral: "#aaa",
  error: "#f44336",
};

export const AppSizes = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1440px",
};

export const AppFontSizes = {
  small: "12px",
  default: "16px",
  medium: "18px",
  large: "24px",
};

export const AppIcons = {
  home: <AiFillHome />,
  world: <BiWorld />,
  favorite: <AiFillStar />,
  subscription: <BsFillBookmarkFill />,
  profile: <CgProfile />,
  like: <AiFillLike />,
  add: <IoMdAdd />,
  edit: <MdEdit />,
  close: <IoMdClose />,
  feed: <MdRssFeed />,
};
