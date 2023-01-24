import Memoji from '../../assets/memoji.png'
import './styles.scss'

function Hero() {
  return (
    <section className='hero mt-4'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 text-left text-md-center order-2 order-md-1">
            <img src={Memoji} alt="Memoji" className='memoji' />
          </div>
          <div className="col-6 mb-4 mb-md-0 order-1 order-md-2">
            <p className="badge bg-success ps-3 pe-3 pt-2 pb-2 mt-0 mb-3">
              Hello there!
            </p>

            <h1 className='m-0'>I'M Lucho Web</h1>

            <h3 className='mb-3'>Web Developer</h3>

            <ul className="contact list-unstyled m-0 mb-2 p-0">
              <li className="address mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Colombia
              </li>
              <li className="phone mb-2">
                <i className="bi bi-telephone-inbound-fill me-2"></i>
                +57 324-680-2829
              </li>
              <li className="email mb-2">
                <i className="bi bi-envelope-fill me-2"></i>
                luchoweb.dev@gmail.com
              </li>
              <li className="website">
                <i className="bi bi-window-sidebar me-2"></i>
                luchoweb.dev
              </li>
            </ul>

            <ul className="social-list list-unstyled m-0 mt-3 p-0 d-flex align-items-center gap-3">
              <li className='item'>
                <a href="https://github.com/luchoweb" target="_blank" rel='noopener'>
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li className='item'>
                <a href="https://www.linkedin.com/in/luchowebdev" target="_blank" rel='noopener'>
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className='item'>
                <a href="https://youtube.com/hablemosdecodigo" target="_blank" rel='noopener'>
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
              <li className='item'>
                <a href="https://wa.me/573246802829?text=Hi%20Lucho%20Web!" target="_blank" rel='noopener'>
                  <i className="bi bi-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
