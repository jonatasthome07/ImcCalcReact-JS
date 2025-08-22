const ImcCalc = () =>{
    return (
        <>
         <div id="calc-container">
            <h2>IMC Calculator</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Height: </label>
                        <input type="text" name="height" id="height" placeholder="Example 1,75"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="weight">Weight: </label>
                        <input type="text" name="weight" id="weight" placeholder="Example 70,5"/>
                    </div>
                </div>
            </form>
        </div>
        <div className="action-control">
            <button>Calculate</button>
            <button>Reset</button>
        </div>
        </>
    )
}

export default ImcCalc