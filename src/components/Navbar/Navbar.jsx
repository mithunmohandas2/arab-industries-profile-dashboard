import "./navbar.css"

function Navbar() {
    return (
        <>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2 px-0 bg-white">

                <div className="text-center shadow-sm ">
                    <div data-bs-toggle="collapse" className="nav-link px-0 align-middle leftBar">
                        <img className="my-4" id="profilePic" src="https://leadershipcircle.com/wp-content/uploads/2022/07/Tyson-Andrus.png" alt="profile pic" /> <br />
                        <h6 className="d-none d-sm-inline text-dark fw-bold">Ram Mohan  <span className="text-primary">{">"}</span> </h6> <br />
                        <p className="d-none d-sm-inline text-dark"> <span className="email">rammohan2@gmail.com</span></p>
                    </div>
                </div>

                <div className="d-flex flex-column align-items-center align-items-sm-start pe-3 mt-3 min-vh-100 leftBar">
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
                        <li className="selectedTab pe-3 my-2">
                            <div data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 mx-2">
                                    <img src="/dashboard.png" alt="dashboard" />
                                </i>
                                <span className="ms-3 d-none d-sm-inline text-dark fw-bold">Dashboard</span>
                            </div>
                        </li>

                        <li className="selectedTab bg-white border pe-3 my-2">
                            <div data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 mx-2">
                                    <img src="/perks.png" alt="perks" />
                                </i>
                                <span className="ms-3 d-none d-sm-inline text-dark fw-bold">Perks</span>
                            </div>
                        </li>

                        <li className="selectedTab bg-white border pe-3 my-2">
                            <div data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 mx-2">
                                    <img src="/Addons.png" alt="Addons" />
                                </i>
                                <span className="ms-3 d-none d-sm-inline text-dark fw-bold">Addons</span>
                            </div>
                        </li>

                        <li className="selectedTab bg-white border pe-3 my-2">
                            <div data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 mx-2">
                                    <img src="/FAQ.png" alt="FAQ" />
                                </i>
                                <span className="ms-3 d-none d-sm-inline text-dark fw-bold">FAQ</span>
                            </div>
                        </li>

                        <li className="selectedTab bg-white border pe-3 my-2">
                            <div data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 mx-2">
                                    <img src="/support.png" alt="support" />
                                </i>
                                <span className="ms-3 d-none d-sm-inline text-dark fw-bold">Support</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="logoutTab text-center">
                    <div data-bs-toggle="collapse" className="nav-link px-0 align-middle leftBar">
                        <span className="ms-3 d-none d-sm-inline text-primary fw-bold">Logout</span>
                        <span className="mx-2 fw-bold">
                            🕛
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar