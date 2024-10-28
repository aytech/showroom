import { faBars, faEnvelope, faMagnifyingGlass, faPhone, faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import "./styles.css"

export const Header = () => {

  const [ navbarClassName, setNavbarClassName ] = useState<string>( "" )

  window.addEventListener( "scroll", () => setNavbarClassName( window.scrollY !== 0 ? "navbar-shrink" : "" ) )

  return (
    <>
      <div className="preloader">
        <div className="loader"></div>
      </div>

      <header id="header">
        <nav className="header-top py-1">
          <div className="container-fluid padding-side">
            <div
              className="d-flex flex-wrap justify-content-between align-items-center"
              style={ {
                borderBottom: "1px solid #000",
                lineHeight: 1.1,
                padding: "20px 0"
              } }>
              <ul className="info d-flex flex-wrap list-unstyled m-0">
                <li className="phone d-flex align-items-center me-4" style={ { fontSize: "14px" } }>
                  <FontAwesomeIcon icon={ faPhone } style={ { color: '#ffa500' } } />&nbsp;+420 266 199 452
                </li>
                <li className="time d-flex align-items-center me-4" style={ { fontSize: "14px" } }>
                  <FontAwesomeIcon icon={ faEnvelope } style={ { color: '#ffa500' } } />&nbsp;studio@konsepti.com
                </li>
              </ul>
              <ul className="d-flex flex-wrap list-unstyled m-0 ">
                <li className="nav-item px-3 dropdown">
                  <Dropdown>
                    <Dropdown.Toggle as="a">
                      <span className="fw-bold text-decoration-underline">CZ</span> Čeština
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">EN English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">SK Slovenčina</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="ms-4">
                  <a href="#">
                    <FontAwesomeIcon icon={ faUserAlt } />
                    <span className="ms-1">Přihlásit</span>
                  </a>
                </li>
                <li className="social ms-4">
                  <a href="#">
                    <FontAwesomeIcon icon={ faShoppingCart } />
                    <span className="ms-1">Košík</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <nav id="primary-header" className="navbar navbar-expand-lg py-4">
          <div className="container-fluid padding-side">
            <div className="d-flex justify-content-between align-items-center w-100">
              <a className="navbar-brand" href="#">
                <img src="https://place-hold.it/160x30&text=LOGO&bold" className="logo img-fluid" />
              </a>
              <button className="navbar-toggler border-0 d-flex d-lg-none order-3 p-2 shadow-none" type="button"
                data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false">
                <FontAwesomeIcon icon={ faBars } />
              </button>
              <div className="header-bottom offcanvas offcanvas-end " id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
                <div className="offcanvas-header px-4 pb-0">
                  <button type="button" className="btn-close btn-close-black mt-2" data-bs-dismiss="offcanvas"
                    aria-label="Close" data-bs-target="#bdNavbar"></button>
                </div>
                <div className="offcanvas-body align-items-center justify-content-center">
                  <div className="search d-block d-lg-none m-5">
                    <form className=" position-relative">
                      <input type="text" className="form-control bg-secondary border-0 rounded-5 px-4 py-2"
                        placeholder="Search..." />
                      <a href="#" className="position-absolute top-50 end-0 translate-middle-y p-1 me-3">
                        <FontAwesomeIcon icon={ faMagnifyingGlass } />
                      </a>
                    </form>
                  </div>
                  <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
                    <li className="nav-item px-3">
                      <a className="nav-link active p-0" aria-current="page" href="#">Bydlení</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Kancelář</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Zahrada</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Svítidla</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Doplňky</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Výprodej</a>
                    </li>
                    <li className="nav-item px-3">
                      <a className="nav-link p-0" href="#">Bestsellery</a>
                    </li>
                    <li className="nav-item px-3 dropdown">
                      { true && (
                        <Dropdown className="no-decoration-dropdown">
                          <Dropdown.Toggle as="a">
                            <span className="fw-bold text-decoration-underline">...</span>
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Designéři</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Inspirace</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Značky</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      ) }
                    </li>
                  </ul>
                </div>
              </div>
              <div className="search d-lg-block d-none">
                <form className=" position-relative">
                  <input type="text" className="form-control bg-secondary border-0 rounded-5 px-4 py-2" placeholder="Search..." />
                  <a href="#" className="position-absolute top-50 end-0 translate-middle-y p-1 me-3">
                    <FontAwesomeIcon icon={ faMagnifyingGlass } />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}