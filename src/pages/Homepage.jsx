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
          {" "}
          <Link to="/Sign-up">
            <Button text="Sign up as Admin" />
          </Link>
        </p>
      </div>
    </>
  );
}

export default Homepage;
