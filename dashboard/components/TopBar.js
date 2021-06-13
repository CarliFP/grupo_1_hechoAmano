import React from 'react';


function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					{/*<!-- Sidebar Toggle (Topbar) -->*/}
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav ml-auto">

						<li>Dashboard HECHO A MANO</li>

						<div className="topbar-divider d-none d-sm-block"></div>

					</ul>

				</nav>
	

        </React.Fragment>
    )
}
export default TopBar;