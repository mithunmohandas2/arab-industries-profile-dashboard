import "./landscapeCards.css"

function LandscapeCards(props) {
    const starterBg = "#C6FF8E"
    const enterpriseBg = "#8AB9FF"

    return (
        <div className="col-lg-6">
            <div className="card m-1 shadow-sm border-0 p-4">
                <div className="row">
                    <div className="col-md-6">
                        <button className="fw-bold highlight" style={{ backgroundColor: props?.Starter ? starterBg : enterpriseBg }}>{props?.Starter ? "Free Forever" : "Let's Connect"}</button>
                        <h3 className="fw-bold">{props?.Starter ? "Free Starter" : "Enterprise Plan"}</h3>

                        <p className="featurePoints">{props?.Starter ? "The quickest and easiest way to try Protocols with basic functionalities" : "Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success"}</p>

                        <button className="btn w-75 hoverEffect zoomEffect mb-4" style={{ backgroundColor: props?.Starter ? starterBg : enterpriseBg }}>{props?.Starter ? "Get Started" : "Contact Us"} ➡️</button>

                    </div>
                    <hr className="seperator" />
                    <div className="col-md-6">
                        <div className="featurePoints">
                            <p>what you'll get: </p>
                            <div className="d-flex featurePoints">
                                <img style={{ width: 20, height: 20 }} src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png" alt="user icon" />
                                <p >Upto {props?.Starter ? "8" : "75"} Users </p>
                            </div>

                            {props?.Starter ?
                                <>
                                    <div className="d-flex featurePoints">
                                        <img style={{ width: 16, height: 17 }} src="https://www.freeiconspng.com/thumbs/cloud-icon/cloud-icon-8.png" alt="cloud icon" />
                                        <p>Upto 3gb Storage</p>
                                    </div>

                                    <div className="d-flex featurePoints">
                                        <img style={{ width: 16, height: 17 }} src="https://cdn-icons-png.flaticon.com/512/2767/2767188.png" alt="email icon" />
                                        <p> Email Support </p>
                                    </div>

                                </> : null}

                            <div className="d-flex featurePoints">
                                <img style={{ width: 16, height: 17 }} src="https://cdn-icons-png.flaticon.com/512/60/60727.png" alt="benefits" />
                                <p> {props?.Starter ? "Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management Included" : "Customization of all other features"}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandscapeCards