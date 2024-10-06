import { Customer_Ratings_Card } from "./_components/customer_ratings_card";
import * as ratingstyles from "./rating.module.css";

export function Rating() {
  return (
    <div className={ratingstyles.main}>
      <div className={ratingstyles.top}>
        <div>
          <h1 className={ratingstyles.heading}>Ratings & Reviews</h1>
          <p className={ratingstyles.cuisines}>Tenoshi African cuisine </p>
        </div>

        <div className={ratingstyles.profile_pic}></div>
      </div>

      <div className={ratingstyles.card_group}>
        <Customer_Ratings_Card
          user_name={"Gabriel Martinelli"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum."
          }
        />
        <Customer_Ratings_Card
          user_name={"Gabriel Martinelli"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum."
          }
        />
        <Customer_Ratings_Card
          user_name={"Gabriel Martinelli"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum."
          }
        />
        <Customer_Ratings_Card
          user_name={"Gabriel Martinelli"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Ultricies maecenas eget convallis vel. Vestibulum sed vitae mauris sagittis convallis. Mattis enim venenatis pharetra hac. Nam urna viverra quisque tempus ac sed lacus urna. A quis sed aliquet nisi ultricies. Id et venenatis fringilla cursus posuere vestibulum."
          }
        />
      </div>
    </div>
  );
}
