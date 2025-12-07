import React from "react";
import "./Contact.css";


export default function Contact() {
  return (
    <>
      <section className="contact mb-5">
        <div className="container">
          <div className="title text-center pt-4">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              Contact component
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="title-line me-3"></div>
              <i className="fa-solid fa-star"></i>
              <div className="title-line ms-3"></div>
            </div>
          </div>

          <form className="contact-form px-3 py-4 mx-auto mt-5 w-50">
            <div className="userName">
              <input
                id="userName"
                type="text"
                placeholder="userName"
                name="userName"
                className="form-control border-0 border-bottom py-3"
              />
              <label htmlFor="userName" className="position-relative mb-3">
                userName :
              </label>
            </div>

            <div className="userAge">
              <input
                id="userAge"
                type="number"
                min="0"
                max="80"
                placeholder="userAge"
                name="userAge"
                className="form-control border-0 border-bottom py-3"
              />
              <label htmlFor="userAge" className="position-relative">
                userAge :
              </label>
            </div>

            <div className="userEmail">
              <input
                id="userEmail"
                type="text"
                placeholder="userEmail"
                name="userEmail"
                className="form-control border-0 border-bottom py-3"
              />
              <label htmlFor="userEmail" className="position-relative">
                userEmail :
              </label>
            </div>

            <div className="userPassword">
              <input
                id="userPassword"
                type="password"
                placeholder="userPassword"
                name="userPassword"
                className="form-control border-0 border-bottom py-3 position-relative "
              />

              <label htmlFor="userPassword" className="position-relative mb-3">
                userPassword :
              </label>
            </div>

            <button
              type="button"
              className="btn  text-white"
              style={{ backgroundColor: "rgb(86, 166, 180)" }}
            >
              send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
