import LandscapeCards from "../LandscapeCards/LandscapeCards"
import PortraitCards from "../PortraitCards/PortraitCards"
import RadioSelect from "../RadioSelect/RadioSelect"
import "./mainContent.css"

function MainContent() {
    return (
        <div id='mainContent container' className="col py-3 bg-light">
            <h3 className="fw-bold mx-4 mt-4">Choose a plan that's just right for you !</h3>

            <div className="position-absolute end-0 me-3">
                <RadioSelect />
            </div>

            <div className="row mt-5">
                <PortraitCards Basic />
                <PortraitCards Standard />
                <PortraitCards Premium />
            </div>

            <div className="row mt-5">
                <LandscapeCards Starter />
                <LandscapeCards Enterprise />
            </div>

            <div className="text-end">
                <p id="conditionsText">*some unique features are provided as add-ons with individual plans for each features</p>
            </div>

        </div>
    )
}

export default MainContent