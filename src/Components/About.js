import React, { Component } from "react";
import Fade from "react-reveal";
import cv from "../Assets/CV-MatiasAquino.pdf";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + "profilepic.png";
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <div style={{ width: "200px", height: "150px", borderRadius: "50%", overflow: "hidden" }}>
                <img
                  className="profile-pic"
                  src={profilepic}
                  alt="Nordic Giant Profile Pic"
                  style={{ width: "100%", height: "100%", objectFit: "center" }}
                />
              </div>
            </div>
            <div className="nine columns main-col">
              <h2>Sobre mi</h2>

              <p>
                Soy Fullstack Developer con 1 año de experiencia y me gusta desarrollar sitios/aplicaciones web. Para eso me mantengo constantemente aprendiendo cosas nuevas. Disfruto mucho de codear y trabajar en equipo.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contacto</h2>
                  <p className="address">
                    <span>Matias L. Aquino</span>
                    <br />
                    <span>
                      Buenos Aires, Argentina
                    </span>
                    <br />
                    <span>+5491133236103</span>
                    <br />
                    <span>m4tias.a@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={cv} className="button" download>
                      <i className="fa fa-download"></i>Descargar CV
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
