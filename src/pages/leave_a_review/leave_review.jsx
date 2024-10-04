import { useState } from "react";
import * as leavereviews from "./leavereviews.module.css";

const LeaveReview = () => {
  const [review, setReview] = useState("");

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the review submission
    console.log("Review submitted:", review);
    setReview(""); // Reset the input field after submission
  };

  return (
    <div className={leavereviews.container}>
      <h1 className={leavereviews.heading}>Leave a Review</h1>
      <p>
        Your input is important in helping us curate our meals and services to
        satisfy your needs and hunger.
      </p>
      <form className={leavereviews.review_form} onSubmit={handleSubmit}>
        <textarea
          value={review}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
          className={leavereviews.review_textarea}
        />
        <button type="submit" className={leavereviews.submit_button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveReview;
