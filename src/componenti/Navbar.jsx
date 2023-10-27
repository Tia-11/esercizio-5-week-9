import * as Icon from 'react-bootstrap-icons';
import logo from '../logo.png'



function MyNavbar() {
  return (
<nav
  className="navbar navbar-expand-lg bg-dark"
  data-bs-theme="dark"
  style={{ backgroundColor: '#221f1f' }}
>
    <div className="container-fluid pe-0">
      <a className="navbar-brand" href="#home"
        ><img src={logo} style={{ width: "100px", height: "55px" }} alt='logo'/></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active fw-bold" href="#homr">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#home">TV Shows</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#home">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#home">Recently Added</a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#home">My List</a>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <Icon.Search className='text-white me-3 fs-5'/>
          <div id="kids" className="fw-bold me-3 ">KIDS</div>
          <Icon.Bell className='text-white me-3 fs-5'/>
          <Icon.PersonCircle className='text-white me-3 fs-5'/>
        </div>
      </div>
    </div>
  </nav>
  );
}

export default MyNavbar;