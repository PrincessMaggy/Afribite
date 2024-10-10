import * as reviewstyles from "./reviews_components.module.css";

export function Customer_Review_Card({ text, user_name, user_location }) {
  return (
    <div className={reviewstyles.customer_card}>
      {/* details */}
      <div>
        {/* image */}
        <div className={reviewstyles.heading}>
          <div className={reviewstyles.profile_pic}></div>
          <div className={reviewstyles.details}>
            <p className={reviewstyles.username}>{user_name}</p>
            <p className={reviewstyles.location}>{user_location}</p>
          </div>
        </div>

        {/* stars */}
        <div></div>

        {/* name and location */}
        <div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
