import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-content">
        <p>Bem vindos ao meu portfólio!</p>
        <h1>THAISSA CAMPOS DOMICIANO</h1>
        <p>Desenvolvimento Front-End</p>
      </div>
      <div className="banner-image">
        <img src="/photo.png" className="banner-img"/>
        <img src="/detail-2.png" className="banner-detail"/>
      </div>
    </section>
  );
};

export default Banner;
