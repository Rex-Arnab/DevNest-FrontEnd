import React from 'react'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg card">
        <div className="container">
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" className="navbar-brand" />
          
            <div className="search">
                <input type="text" className="form-control border-1" placeholder="search" />
            </div>
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house-door-fill"></i>
              </a>
              <a className="nav-link" href="#">
              <i className="bi bi-chat"></i>
              </a>
              <a className="nav-link" href="#">
              <i className="bi bi-compass"></i>
              </a>
              <a className="nav-link" href="#">
              <i className="bi bi-heart"></i>
              </a>
              <a className="nav-link" href="#">
              <i className="bi bi-person-circle"></i>
              </a>
            </div>
          </div>
      </nav>
    )
}

export default Navbar
