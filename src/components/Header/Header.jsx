import './header.css'

function Header() {
    return (
        <div className="p-0 navbar navbar-expand-lg navbar-light bg-transparent shadow-sm">
            <div className="container-fluid p-0">
                <div className='clip-path'>
                    <img src="/logo.png" className='logo' alt="Logo" />
                </div>

                <ul className="position-absolute end-0 navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item m-1 text-center">
                        <button className="btn btn-light m-1 my-auto shadow-sm">
                            <img src="/profilePic.png" className='pe-2' alt="Profile Pic" />
                            <span id='company-name' className='fw-bold'>XYZ Enterprises Pvt Ltd</span>
                        </button>
                    </li>
                    <li className="nav-item m-1 text-center">
                        <button className="btn btn-light m-1 my-auto shadow-sm dropdown">
                            <img src="/downArrow.png" alt="arrow" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header