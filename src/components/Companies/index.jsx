import { iwLogo, i2bLogo, endavaLogo, toolboxLogo } from '../../assets/companies'
import './styles.scss'

function Companies() {
  return (
    <section className="companies bg-light pt-4 pb-4 text-center">
      <div className="container">
        <h5 className='companies__subhead mb-0'>Freelance or Full-time</h5>
        <h3 className="companies__title m-0 mb-3">I have worked with</h3>

        <ul className="companies__list list-unstyled m-0 p-0 d-flex align-items-center justify-content-center gap-4">
          <li className="company">
            <img src={i2bLogo} alt="I2B" title="I2B (Chile)" height={60} />
          </li>
          <li className="company">
            <img src={endavaLogo} alt="Endava" title="Endava (Colombia)" height={60} />
          </li>
          <li className="company">
            <img src={iwLogo} alt="Ideaware" title="Ideaware (Colombia)" height={60} />
          </li>
          <li className="company">
            <img src={toolboxLogo} alt="Toolbox" title="Toolbox (Uruguay)" height={60} />
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Companies
