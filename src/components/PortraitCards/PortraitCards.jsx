import "./portraitCards.css"

function PortraitCards(props) {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card m-4 shadow-sm border-0 p-4">

                <h3 className="fw-bold">{props?.Basic ? "Basic" : props?.Standard ? "Standard" : "Premium"}</h3>

                <p className="mb-0">$ {props?.Basic ? "88.99" : props?.Standard ? "189.99" : "389.99"}/mo</p>
                <img id="wrongMark" src="https://www.pngall.com/wp-content/uploads/14/Red-Line-180x180.png" alt="wrong marking" />

                <h3 className="">$ {props?.Basic ? "9.99" : props?.Standard ? "99.99" : "199.99"}<span>/mo</span></h3>

                <button className="btn w-75 hoverEffect zoomEffect" style={{ backgroundColor: props?.Basic ? "#FFE7A9" : props?.Standard ? "#FF9494" : "#E7A2FF" }}>Get Started  ➡️</button>
                <hr />
                <div className="featurePoints">
                    <p>what you'll get: </p>
                    <div className="d-flex featurePoints">
                        <img style={{ width: 20, height: 20 }} src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user icon" />
                        <p >Upto {props?.Basic ? "25" : props?.Standard ? "50" : "75"} Users </p>
                    </div>
                    <div className="d-flex featurePoints">
                        <img style={{ width: 16, height: 17 }} src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png" alt="cloud icon" />
                        <p>Upto {props?.Basic ? "25" : props?.Standard ? "60" : "100"}gb Storage</p>
                    </div>
                    <div className="d-flex featurePoints">
                        <img style={{ width: 16, height: 17 }} src="https://cdn-icons-png.flaticon.com/512/2767/2767188.png" alt="email icon" />
                        <p>Email{props?.Basic ? "" : props?.Standard ? "+Chat" : "+Chat+WhatsApp"} Support</p>
                    </div>
                </div>
                <h6 className="fw-bold link"><u>EXPLORE FEATURES </u> <span style={{ color: props?.Basic ? "#FFE7A9" : props?.Standard ? "#FF9494" : "#E7A2FF" }}>▶️</span> </h6>
            </div>
        </div>
    )
}

export default PortraitCards