import React from "react";
import error1 from "/src/assets/404error1.svg";

export default function NotFound() {
  return (
    <>
      <div className="container-fluid d-inline-flex justify-content-center">
        <img src={error1} style={{ width: "30rem" }} alt="" />
      </div>
    </>
  );
}
