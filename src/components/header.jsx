import React from "react";
import ParticlesBg from "particles-bg";
import converseaLogo from "../assets/img/conversea-logo.png";

export const Header = props => {
  return (
    <header id="header">
      <div className="intro">
        <ParticlesBg
          type="circle"
          bg={{ zIndex: 0, position: "absolute", top: 0 }}
        />
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src={converseaLogo} alt="logo" width={350} />
                <p style={{ fontWeight: "600" }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Află mai multe
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
