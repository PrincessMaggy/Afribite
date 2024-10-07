import Custom_Button from "./_components/button";
import { Customer_Review_Card } from "./_components/customer_review_card";
import * as reviewstyles from "./review.module.css";

function Review() {
  return (
    <div className={reviewstyles.review}>
      {/* top */}
      <div className={reviewstyles.top}>
        {/* left - image */}
        <div className={reviewstyles.left}></div>
        {/* right - details */}
        <div className={reviewstyles.right}>
          <h1>Amala-Gbegiri-Ewedu with Assorted Meat</h1>
          <p className={reviewstyles.side}>with chilled coke</p>

          {/* stars */}
          <div></div>

          <p className={reviewstyles.description}>
            Delicious plate of Amala-Gbegiri-Ewedu and assorted meat, a
            traditional Nigerian dish packed with rich flavors and a perfect
            blend of soft, savory textures.
          </p>
          {/* buttons */}
          <div className={reviewstyles.btn_group}>
            <Custom_Button text={"Extra wrap of amala"} />
            <Custom_Button text={"Extra meat"} />
            <Custom_Button text={"Turkey"} />
          </div>

          <div className={reviewstyles.price}>
            <p>
              Price <span className={reviewstyles.bold}>$172</span>
            </p>
            <div>
              {/* circle group */}
              <div className={reviewstyles.circle_group}>
                <p>Servings</p>

                <div className={reviewstyles.circle_filled}>1</div>
                <div className={reviewstyles.circle_border}>2</div>
                <div className={reviewstyles.circle_border}>3</div>
                <div className={reviewstyles.circle_border}>4</div>
                <div className={reviewstyles.circle_border}>5</div>
              </div>
            </div>
          </div>

          {/* add to cart button */}
          <div className="">
            <button className={reviewstyles.addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className={reviewstyles.review_section}>
        <h1 className={reviewstyles.title}>Our customer&apos;s review</h1>

        <div className={reviewstyles.card_group}>
          <Customer_Review_Card
            user_name={"Mikel Merino"}
            user_location={"Manchester"}
            text={
              "I truly enjoyed this meal. As a Nigerian, I’ve strugggled to find foods that reminded me of home. However, this took me back home and brought back fond memories of Sunday evenings when my mum made us this delicacy. Thank you so much for this. It’s the best Nigerian meal I’ve eaten ever since I got here which was 3 years ago."
            }
          />

          <Customer_Review_Card
            user_name={"Mikel Merino"}
            user_location={"Manchester"}
            text={
              "I truly enjoyed this meal. As a Nigerian, I’ve strugggled to find foods that reminded me of home. However, this took me back home and brought back fond memories of Sunday evenings when my mum made us this delicacy. Thank you so much for this. It’s the best Nigerian meal I’ve eaten ever since I got here which was 3 years ago."
            }
          />

          <Customer_Review_Card
            user_name={"Mikel Merino"}
            user_location={"Manchester"}
            text={
              "I truly enjoyed this meal. As a Nigerian, I’ve strugggled to find foods that reminded me of home. However, this took me back home and brought back fond memories of Sunday evenings when my mum made us this delicacy. Thank you so much for this. It’s the best Nigerian meal I’ve eaten ever since I got here which was 3 years ago."
            }
          />

          <Customer_Review_Card
            user_name={"Mikel Merino"}
            user_location={"Manchester"}
            text={
              "I truly enjoyed this meal. As a Nigerian, I’ve strugggled to find foods that reminded me of home. However, this took me back home and brought back fond memories of Sunday evenings when my mum made us this delicacy. Thank you so much for this. It’s the best Nigerian meal I’ve eaten ever since I got here which was 3 years ago."
            }
          />
        </div>

        <div className={reviewstyles.view_all}>
          <button className={reviewstyles.addToCart}>See all reviews</button>
        </div>
      </div>
    </div>
  );
}

export default Review;

{
  /*testimonial */
}
