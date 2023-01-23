import Memoji from '../../assets/memoji.png'
import './styles.scss'

function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center">
            <img src={Memoji} alt="Memoji" />
          </div>
          <div className="col-12 col-lg-6">
            <p className="badge bg-success mt-0 mb-3">
              Hello there!
            </p>

            <h1 className='m-0'>I'M Lucho Web</h1>

            <h3 className='mb-3'>Web Developer</h3>

            <ul className="contact list-unstyled m-0 mb-2 p-0">
              <li className="address mb-2">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Barranquilla, Colombia
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
