import React from 'react'

const SecondAppbar = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Repair <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trade in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Data Recovery</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Home Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Warrnaty</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">In Store Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">HT help</a>
                </li>
                
                </ul>
                <ul className="navbar-nav">
                <li className="nav-item ml-auto">
                    <a className="nav-link" href="#">Login</a>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default SecondAppbar
