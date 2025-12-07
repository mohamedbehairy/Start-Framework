import React from "react";
import person from "../../assets/imgi_1_avataaars.svg";
export default function Home() {
  return (
    <>
      <section className="home py-5 d-flex justify-content-center align-items-center">
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
          <img src={person} alt="" className="home-img" />
          <div className="title text-center pt-4 text-white">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              start Framework
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="title-line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="title-line ms-3"></div>
            </div>
          </div>
          <span className="text-white">
            Graphic Artist - Web Designer - Illustrator
          </span>
        </div>
      </section>
    </>
  );
}
