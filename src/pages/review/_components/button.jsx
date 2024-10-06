import * as reviewstyles from "./reviews_components.module.css";

function Custom_Button({ text }) {
  return <button className={reviewstyles.btn_border}>{text}</button>;
}

export default Custom_Button;
