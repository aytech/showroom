import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../Header"
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

export const App = () => {

  return (
    <>
      <Header />

      <section>
        <div className="container-fluid padding-side">
          <div className="row">
            <div className="col-sm-6" style={ { alignContent: "center", paddingBottom: "1rem" } }>
              <img
                alt="main"
                className="img-fluid"
                src="https://placehold.co/1000x600?text=Главная+картинка" />
            </div>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-12 text-end" style={ { backgroundColor: "#fff", paddingBottom: "1rem" } }>
                  <img
                    alt="secondary"
                    className="img-fluid"
                    src="https://placehold.co/500x300?text=Второстепенная+картинка" />
                </div>
                <div className="col-sm-12 text-end" style={ { backgroundColor: "#fff", paddingBottom: "1rem" } }>
                  <img
                    alt="secondary"
                    className="img-fluid"
                    src="https://placehold.co/500x300?text=Второстепенная+картинка" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-large">
        <div className="row">
          <div className="col-sm-2 offset-sm-1" style={ {
            borderLeft: "1px solid #000",
            paddingTop: "1rem",
            textAlign: "center"
          } }>
            <img
              alt="logo"
              className="img-fluid"
              src="https://placehold.co/200x180?text=Лого" />
          </div>
          <div className="col-sm-2" style={ {
            borderLeft: "1px solid #000",
            paddingTop: "1rem",
            textAlign: "center"
          } }>
            <img
              alt="logo"
              className="img-fluid"
              src="https://placehold.co/200x180?text=Лого" />
          </div>
          <div className="col-sm-2" style={ {
            borderLeft: "1px solid #000",
            paddingTop: "1rem",
            textAlign: "center"
          } }>
            <img
              alt="logo"
              className="img-fluid"
              src="https://placehold.co/200x180?text=Лого" />
          </div>
          <div className="col-sm-2" style={ {
            borderLeft: "1px solid #000",
            paddingTop: "1rem",
            textAlign: "center"
          } }>
            <img
              alt="logo"
              className="img-fluid"
              src="https://placehold.co/200x180?text=Лого" />
          </div>
          <div className="col-sm-2" style={ {
            borderLeft: "1px solid #000",
            paddingTop: "1rem",
            textAlign: "center"
          } }>
            <img
              alt="logo"
              className="img-fluid"
              src="https://placehold.co/200x180?text=Лого" />
          </div>
        </div>
      </section>

      <section id="footer">
        <div className="container-fluid padding-side padding-small pt-0">
          <footer className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <img src="https://placehold.co/180x43?text=Лого" alt="logo-footer" className="img-fluid" />
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="social-links d-flex flex-wrap list-unstyled mt-4 mb-0">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={ faFacebook } className="icon" style={ { marginRight: "1rem" } } />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={ faTwitter } className="icon" style={ { marginRight: "1rem" } } />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={ faLinkedin } className="icon" style={ { marginRight: "1rem" } } />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={ faInstagram } className="icon" style={ { marginRight: "1rem" } } />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={ faYoutube } className="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 offset-lg-1 mb-4 mb-lg-0">
              <h4 className="display-6 fw-normal">Designové novinky</h4>
              <form className=" position-relative">
                <input type="email" className="form-control px-4 py-3 bg-transparent" placeholder="Váš e-mail" />
                <div className="d-grid">
                  <button className="btn btn-arrow btn-primary mt-3">
                    <span>Odeslat
                      <FontAwesomeIcon icon={ faArrowRight } />
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 col-lg-3 offset-lg-1 mb-4 mb-lg-0">
              <h4 className="display-6 fw-normal">Our Info</h4>
              <ul className="nav flex-column">
                <li className="location text-capitalize d-flex align-items-center">
                  <FontAwesomeIcon icon={ faLocationDot } className="icon" />&nbsp;Konsepti
                </li>
                <li className="text-capitalize ms-4">
                  Somewhere in Prague
                </li>
                <li className="phone text-capitalize d-flex align-items-center mt-2">
                  <FontAwesomeIcon icon={ faPhone } className="icon" />&nbsp;+666 333 9999, +444 777 666
                </li>
                <li className="email text-capitalize d-flex align-items-center mt-2">
                  <FontAwesomeIcon icon={ faEnvelope } className="icon" />&nbsp;yourdomain@email.com
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <hr className="text-black" />
        <div className="container-fluid padding-side padding-small">
          <footer className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <h4 className="display-6 fw-normal">Konsepti</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="/" className="p-0 "> Naše showroomy </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> O nás </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Značky </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Realizace </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Náš tým </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Volná místa </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 offset-lg-1 mb-4 mb-lg-0">
              <h4 className="display-6 fw-normal">Služby</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="/" className="p-0 "> Pronájem Konsepti Stage </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Návrhy interiérů </a></li>
                <li className="nav-item"><a href="/" className="p-0 "> Rekonstrukce a přestavby </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> B2B projekty </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Projekt kuchyně </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 offset-lg-1 mb-4 mb-lg-0">
              <h4 className="display-6 fw-normal">Odkazy</h4>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="/" className="p-0 "> Kontakty </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Pro architekty </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Obchodní podmínky </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Ochrana osobních údajů </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="p-0 "> Reklamační řád </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </section>

    </>
  )
}
