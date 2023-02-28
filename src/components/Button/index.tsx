import { Link } from "react-router-dom";
import cx from "classnames";


interface ButtonProps {
  color: "green" | "red" | "lightblue" | "yellow" | "purple" | "brown";
  content: string;
  link: string;

}

export default function Button({ color, content, link }: ButtonProps) {
  return <Link to={link} className={cx("button", color)}>{content}</Link>;
}
