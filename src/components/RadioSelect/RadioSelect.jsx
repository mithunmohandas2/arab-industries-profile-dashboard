import { useState } from "react"
import "./radioselect.css"

function RadioSelect() {
    const [monthlyStatus, setMonthlyStatus] = useState(true)
    return (
        <>
            <div className="config-select">
                <div className="fieldset">
                    <input type="radio" value="item_1" id="item_1" name="config" className="trigger" data-target="#item_1_target" checked={monthlyStatus} onClick={() => setMonthlyStatus(true)} />
                    <label htmlFor="item_1"><span>Monthly</span></label>

                    <input type="radio" value="item_2" id="item_2" name="config" className="trigger" data-target="#item_2_target" checked={!monthlyStatus} />
                    <label htmlFor="item_2" onClick={() => setMonthlyStatus(false)}><span>Annually</span> </label>
                    <span className="switch"></span>
                </div>
                    <span id="superScript">-10%</span>
            </div>
        </>
    )
}

export default RadioSelect