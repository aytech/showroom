import './styles.css'
import navbarLogo from './assets/navbar-logo.svg'
import closeIcon from './assets/close-icon.svg'
import portfolio1 from './assets/1.jpg'
import portfolio2 from './assets/2.jpg'
import portfolio3 from './assets/3.jpg'
import portfolio4 from './assets/4.jpg'
import portfolio5 from './assets/5.jpg'
import portfolio6 from './assets/6.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faLaptop, faLock, faPlus, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export const App = () => {

  const [ navbarShrunk, setNavbarShrunk ] = useState<boolean>(false)
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ modalImage, setModalImage ] = useState<string>()
  const [ modalClients, setModalClients ] = useState<string>()
  const [ modalCategory, setModalCategory ] = useState<string>()

  window.addEventListener("scroll", () => setNavbarShrunk(window.scrollY !== 0))

  return (
    <>
      <nav className={ `navbar navbar-expand-lg navbar-dark fixed-top ${navbarShrunk ? "navbar-shrink" : ""}` } id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={ navbarLogo } alt="..." />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead */ }
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
      </header>
      {/* Services */ }
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className='fa-stack-2x text-primary' />
                <FontAwesomeIcon icon={ faShoppingCart } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">E-Commerce</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={ faLaptop } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">Responsive Design</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={ faLock } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">Web Security</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */ }
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 1 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio1)
                  setModalClients("Threads")
                  setModalCategory("Illustration")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio1 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Threads</div>
                  <div className="portfolio-caption-subheading text-muted">Illustration</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 2 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio2)
                  setModalClients("Explore")
                  setModalCategory("Graphic Design")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio2 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Explore</div>
                  <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 3 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio3)
                  setModalClients("Finish")
                  setModalCategory("Identity")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio3 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Finish</div>
                  <div className="portfolio-caption-subheading text-muted">Identity</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/* Portfolio item 4 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio4)
                  setModalClients("Lines")
                  setModalCategory("Branding")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio4 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Lines</div>
                  <div className="portfolio-caption-subheading text-muted">Branding</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/* Portfolio item 5 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio5)
                  setModalClients("Southwest")
                  setModalCategory("Website Design")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio5 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Southwest</div>
                  <div className="portfolio-caption-subheading text-muted">Website Design</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Portfolio item 6 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio6)
                  setModalClients("Window")
                  setModalCategory("Photography")
                  setShowModal(true)
                } }>
                <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio6 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Window</div>
                  <div className="portfolio-caption-subheading text-muted">Photography</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */ }
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Our Humble Beginnings</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 className="subheading">An Agency is Born</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li>
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>December 2015</h4>
                  <h4 className="subheading">Transition to Full Service</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>July 2020</h4>
                  <h4 className="subheading">Phase Two Expansion</h4>
                </div>
                <div className="timeline-body"><p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Team */ }
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
          </div>
        </div>
      </section>
      {/* Clients */ }
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!"><img className="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */ }
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <form id="contactForm">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" />
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" />
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Your Message *"></textarea>
                </div>
              </div>
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
            <div className="text-center"><button className="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Send Message</button></div>
          </form>
        </div>
      </section>
      {/* Footer */ }
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Portfolio Modals */ }
      <Modal
        dialogClassName="portfolio-modal"
        show={ showModal }
        size="xl"
        onHide={ () => setShowModal(false) }>
        <Modal.Header>
          <div className="close-modal">
            <img src={ closeIcon } alt="Close modal" onClick={ () => setShowModal(false) } />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="modal-body">
                  {/* Project details */ }
                  <h2 className="text-uppercase">Project Name</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src={ modalImage } alt="..." />
                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Client:</strong> { modalClients }
                    </li>
                    <li>
                      <strong>Category:</strong> { modalCategory }
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    onClick={ () => setShowModal(false) }
                    type="button">
                    <FontAwesomeIcon icon={ faXmark } className="me-1" />
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
