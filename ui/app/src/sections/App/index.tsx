import './styles.css'
import closeIcon from './assets/close-icon.svg'
import portfolio1 from './assets/portfolio/1.jpg'
import portfolio2 from './assets/portfolio/2.jpg'
import portfolio3 from './assets/portfolio/3.jpg'
import portfolio4 from './assets/portfolio/4.jpg'
import portfolio5 from './assets/portfolio/5.jpg'
import portfolio6 from './assets/portfolio/6.jpg'
import about1 from './assets/about/1.jpg'
import about2 from './assets/about/2.jpg'
import about3 from './assets/about/3.jpg'
import about4 from './assets/about/4.jpg'
import team1 from './assets/team/1.jpg'
import team2 from './assets/team/2.jpg'
import team3 from './assets/team/3.jpg'
import facebook from './assets/logos/facebook.svg'
import google from './assets/logos/google.svg'
import ibm from './assets/logos/ibm.svg'
import microsoft from './assets/logos/microsoft.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faLaptop, faLock, faPlus, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Navigation } from '../Navigation'

export const App = () => {

  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ modalImage, setModalImage ] = useState<string>()

  return (
    <>
      <Navigation />
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">добро пожаловать!</div>
          <div className="masthead-heading text-uppercase">мы рады вас видеть</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">услуги</a>
        </div>
      </header>
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">услуги</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className='fa-stack-2x text-primary' />
                <FontAwesomeIcon icon={ faShoppingCart } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">услуга</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={ faLaptop } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">услуга</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <FontAwesomeIcon icon={ faCircle } className="fa-stack-2x text-primary" />
                <FontAwesomeIcon icon={ faLock } className="fa-stack-1x" inverse />
              </span>
              <h4 className="my-3">услуга</h4>
              <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid */ }
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">портфолио</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 1 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio1)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio1 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 2 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio2)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio2 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 3 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio3)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio3 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/* Portfolio item 4 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio4)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio4 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/* Portfolio item 5 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio5)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio5 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Portfolio item 6 */ }
              <div
                className="portfolio-item"
                onClick={ () => {
                  setModalImage(portfolio6)
                  setShowModal(true)
                } }>
                <a className="portfolio-link" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <FontAwesomeIcon icon={ faPlus } size="3x" />
                    </div>
                  </div>
                  <img className="img-fluid" src={ portfolio6 } alt="..." />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">клиент</div>
                  <div className="portfolio-caption-subheading text-muted">описание</div>
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
            <h2 className="section-heading text-uppercase">о нас</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={ about1 } alt="..." />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 className="subheading">Заголовок</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={ about2 } alt="..." />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2011</h4>
                  <h4 className="subheading">Заголовок</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={ about3 } alt="..." />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2015</h4>
                  <h4 className="subheading">Заголовок</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={ about4 } alt="..." />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020</h4>
                  <h4 className="subheading">Заголовок</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  <br />
                  Заголовок
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
            <h2 className="section-heading text-uppercase">наша команда</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={ team1 } alt="..." />
                <h4>Parveen Anand</h4>
                <p className="text-muted">Lead Designer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile">
                  <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile">
                  <FontAwesomeIcon icon={ faFacebookF } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile">
                  <FontAwesomeIcon icon={ faLinkedinIn } />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={ team2 } alt="..." />
                <h4>Diana Petersen</h4>
                <p className="text-muted">Lead Marketer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile">
                  <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile">
                  <FontAwesomeIcon icon={ faFacebookF } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile">
                  <FontAwesomeIcon icon={ faLinkedinIn } />
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={ team3 } alt="..." />
                <h4>Larry Parker</h4>
                <p className="text-muted">Lead Developer</p>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile">
                  <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile">
                  <FontAwesomeIcon icon={ faFacebookF } />
                </a>
                <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile">
                  <FontAwesomeIcon icon={ faLinkedinIn } />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Clients */ }
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src={ microsoft } alt="..." aria-label="Microsoft Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src={ google } alt="..." aria-label="Google Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src={ facebook } alt="..." aria-label="Facebook Logo" />
              </a>
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              <a href="#!">
                <img className="img-fluid img-brand d-block mx-auto" src={ ibm } alt="..." aria-label="IBM Logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact */ }
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">свяжитесь с нами</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <form id="contactForm">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Ваше имя *" />
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Ваша электронная почта *" />
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Ваш телефон *" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea className="form-control" id="message" placeholder="Ваше сообщение *"></textarea>
                </div>
              </div>
            </div>
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
              </div>
            </div>
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">Error sending message!</div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">
                отправить
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */ }
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Автор &copy; Олег 2022</div>
            <div className="col-lg-4 my-3 my-lg-0">
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter">
                <FontAwesomeIcon icon={ faTwitter } />
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook">
                <FontAwesomeIcon icon={ faFacebookF } />
              </a>
              <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn">
                <FontAwesomeIcon icon={ faLinkedinIn } />
              </a>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">Политика конфиденциальности</a>
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
                  <h2 className="text-uppercase">название проекта</h2>
                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                  <img className="img-fluid d-block mx-auto" src={ modalImage } alt="..." />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                  <ul className="list-inline">
                    <li>
                      <strong>Клиент:</strong> клиент
                    </li>
                    <li>
                      <strong>Категория:</strong> описание
                    </li>
                  </ul>
                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    onClick={ () => setShowModal(false) }
                    type="button">
                    <FontAwesomeIcon icon={ faXmark } className="me-1" />
                    закрыть
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
