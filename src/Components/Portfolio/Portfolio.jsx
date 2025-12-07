import React, { useState } from "react";
import style from "./Portifolio.module.css";
import img1 from "../../assets/imgi_1_poert1.png";
import img2 from "../../assets/imgi_2_port2.png";
import img3 from "../../assets/imgi_3_port3.png";

export default function Portfolio() {
  const [modalImg, setModalImg] = useState("");

  return (
    <>
      {modalImg && (
        <div className="modal d-block" onClick={() => setModalImg("")}>
          <div className="w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center">
            <img
              alt=""
              src={modalImg}
              className="w-50"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <section className={`${style.portfolio} mb-5`}>
        <div className="container">
          <div className="title text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              portfolio component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="title-line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="title-line ms-3"></div>
            </div>
          </div>
          <div className="row g-5">
            {[img1, img2, img3, img1, img2, img3].map((img, index) => (
              <div key={index} className="col-md-4 col-sm-6">
                <div
                  className={`card position-relative ${style.portfolioCard}`}
                >
                  <img
                    onClick={() => setModalImg(img)}
                    className="w-100"
                    src={img}
                    alt=""
                  />
                  <div className={style.cardLayout}>
                    <i className="fa-solid fa-plus" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
