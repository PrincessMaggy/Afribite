import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div>
        <p className="text-2xl font-bold underline">homepage</p>
        <p className="rounded-md border w-fit"> <Link to="/Sign-in">sign in</Link></p>
      </div>
    </>
  );
}

export default Homepage;
