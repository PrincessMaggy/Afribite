import react from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link to={props.to}>
      <button
        className={`bg-p-button p-3 rounded-md text-n-n7 text-xs lg:text-sm font-pop border-2 hover:border-p-button hover:text-p-button hover:bg-n-n7 ${props.className}`}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </Link>
  );
};

export default Button;
