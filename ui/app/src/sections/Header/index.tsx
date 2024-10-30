import { faEnvelope, faMagnifyingGlass, faPhone, faShoppingCart, faUserAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap"
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
              <ul className="info-action d-flex flex-wrap list-unstyled m-0">
                <li className="nav-item px-3 dropdown">
                  <Dropdown>
                    <Dropdown.Toggle className="button-link" variant="link">
                      <span className="fw-bold text-decoration-underline">CZ</span> Čeština
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">EN English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">SK Slovenčina</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="ms-4">
                  <Button className="button-link" variant="link">
                    <FontAwesomeIcon icon={ faUserAlt } />
                    <span className="ms-1">Přihlásit</span>
                  </Button>
                </li>
                <li className="social ms-4">
                  <Button className="button-link" variant="link">
                    <FontAwesomeIcon icon={ faShoppingCart } />
                    <span className="ms-1">Košík</span>
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Navbar id="primary-header" expand="lg" className={ `navbar navbar-expand-lg py-4 ${navbarClassName}` }>
          <Container fluid className="padding-side">
            <Navbar.Brand href="#">
              <img
                alt="Logo"
                className="logo img-fluid"
                src="https://placehold.co/160x30?text=Лого" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="bdNavbar" className="primary-header-toggle" />
            <Navbar.Collapse id="bdNavbar">
              <Nav className="align-items-center mb-2 mb-lg-0 me-auto">
                <Nav.Link href="#" className="px-3" active>
                  Bydlení
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Kancelář
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Zahrada
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Svítidla
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Doplňky
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Výprodej
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
                  Bestsellery
                </Nav.Link>
                <Nav.Link href="#" className="px-3" active={ false }>
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
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="search d-lg-block d-none">
              <form className="position-relative">
                <input type="text" className="form-control bg-secondary border-0 rounded-5 px-4 py-2" placeholder="Search..." />
                <Button
                  className="position-absolute top-50 end-0 translate-middle-y p-1 me-3"
                  style={ { 
                    color: "#212529"
                   } }
                  variant="link">
                  <FontAwesomeIcon icon={ faMagnifyingGlass } />
                </Button>
              </form>
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  )
}