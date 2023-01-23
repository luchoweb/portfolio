import Menu from './menu';

import './styles.scss'

function Header() {
  return (
    <header className="pt-3 pb-3 mb-3">
        <div className='container'>
          <div className="row">
            <div className="col-12 text-center text-md-start col-md-3 mb-2 mb-md-0">
              <p className='title m-0'><strong>Lucho Web</strong></p>
            </div>
            <div className="col-12 col-md-9">
              <Menu />
            </div>
          </div>
        </div>
      </header>
  );
}

export default Header
