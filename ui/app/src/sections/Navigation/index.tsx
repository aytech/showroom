import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Nav, Navbar } from "react-bootstrap"

export const Navigation = () => {

  const [ navbarClassName, setNavbarClassName ] = useState<string>("")

  window.addEventListener("scroll", () => setNavbarClassName(window.scrollY !== 0 ? "navbar-shrink" : ""))
  
  return (
    <Navbar expand="lg" variant="dark" fixed="top" id="mainNav" className={ navbarClassName }>
        <div className="container">
          <Navbar.Brand href="#page-top" className="text-uppercase">
            Konsepti
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={ faBars } size="2x" />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="ms-auto py-4 py-lg-0">
              <Nav.Item>
                <Nav.Link href="#">Bydlení</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Kancelář</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Zahrada</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Svítidla</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Doplňky</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Výprodej</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Bestsellery</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Inspirace</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Značky</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Designéři</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}