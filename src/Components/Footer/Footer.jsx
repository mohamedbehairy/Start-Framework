import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div
            className={`${style.info} p-5 text-center text-white row align-content-center`}
          >
            <div className="location col-md-4 col-sm-6 ">
              <h3 className="text-uppercase">location</h3>
              <span>2215 John Daniel Drive</span>
              <p className="pt-3">Clark, MO 65243</p>
            </div>
            <div className="web col-md-4 col-sm-6 ">
              <h3 className="text-uppercase">AROUND THE WEB</h3>
              <div className={style.icons}>
                <i className="fa-brands fa-facebook-f border border-white d-inline-flex p-3 d-inline-flex justify-content-center align-items-center me-2 rounded-circle" />
                <i className="fa-brands fa-x-twitter border border-white d-inline-flex p-3 d-inline-flex justify-content-center align-items-center me-2 rounded-circle" />
                <i className="fa-brands fa-linkedin-in border border-white d-inline-flex p-3 d-inline-flex justify-content-center align-items-center me-2 rounded-circle" />
                <i className="fa-brands fa-internet-explorer border border-white d-inline-flex p-3 d-inline-flex justify-content-center align-items-center me-2 rounded-circle" />
              </div>
            </div>
            <div className="freelancer col-md-4 col-sm-6 ">
              <h3 className="text-uppercase">ABOUT FREELANCER</h3>
              <p className="px-3">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="copyright p-4 text-center bg-dark text-white">
          Copyright &copy; Your Website 2025
        </div>
      </footer>
    </>
  );
}
