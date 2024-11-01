import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faArrowRight, faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Footer = () => {
  return (
    <section id="footer" className="padding-medium">
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
  )
}