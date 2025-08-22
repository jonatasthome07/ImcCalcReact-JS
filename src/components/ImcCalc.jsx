import "./ImcCalc.css"
import Button from "./Button"
import { useState } from "react"

const ImcCalc = () =>{

    const [height, setHeigth] = useState("")
    const [weight, setWeight] = useState("")

    const clearForm = (e) =>{
        e.preventDefault()
        setHeigth("")
        setWeight("")
    }

    const validDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) =>{
        const updatedValues = validDigits(e.target.value)
        setHeigth(updatedValues)
    }

    const handleWeightChange = (e) =>{
        const updatedValues = validDigits(e.target.value)
        setWeight(updatedValues)
    }

    return (
        <>
         <div id="calc-container">
            <h2>IMC Calculator</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Height: </label>
                        <input type="text" name="height" id="height" placeholder="Example 1,75"
                        onChange={(e)=> handleHeightChange(e)} value={height}/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Weight: </label>
                        <input type="text" name="weight" id="weight" placeholder="Example 70,5" 
                        onChange={(e) => handleWeightChange(e)} value={weight}/>
                    </div>
                </div>
            </form>
        </div>
        <div className="action-control">
            <Button id="calc-btn" text={"Calculate"}></Button>
            <Button id="clear-btn" text={"Reset"} action={clearForm}></Button>
        </div>
        </>
    )
}

export default ImcCalc