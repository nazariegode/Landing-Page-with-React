import React from "react";
import logo from "../../img/iconavbar.png"

//create your first component

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#" id="home">
					<img src={logo} style={{ width: '50px', height: '50px' }} alt="logo" />
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#home">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#jumbo">About Us</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#pets">Pets</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#contact">Contact Us</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;