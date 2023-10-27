import * as Icon from 'react-bootstrap-icons';


const Genres = () => {
    return (
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 text-white ms-3">TV Shows</h2>
            <div className="btn-group" role="group">
              <div className="dropdown ms-4 mt-1">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: '#221f1f' }}
                >
                  Genres
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#home">Comedy</a></li>
                  <li><a className="dropdown-item" href="#home">Drama</a></li>
                  <li><a className="dropdown-item" href="#home">Thriller</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
             <Icon.Grid className='text-white fs-5 me-5'/>
             <Icon.Grid3x3  className='text-white fs-5 me-5'/>
          </div>
        </div>
    )
}

export default Genres