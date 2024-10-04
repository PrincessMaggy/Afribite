import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";

function Homepage() {
  return (
    <>
      <div className="flex flex-col gap-5 p-8">
        <p className="text-2xl font-bold underline">homepage</p>
        <p className="text-2xl font-bold underline">
          <Link to="/Adminhome/Dashboard">Admin Home page</Link>
        </p>
        <p className="rounded-md border w-fit">
          {/* Remove the wrapping <Link> and pass the 'to' prop directly */}
          <Button text="Sign up as Admin" to="/Sign-up" />
        </p>
      </div>
    </>
  );
}

export default Homepage;
