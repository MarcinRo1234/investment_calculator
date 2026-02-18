

export default function UserInput({onChangeInput, userInputProp}) {
    
    
    return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input required type="number" onChange={(event) => onChangeInput("initialInvestment", event.target.value )} value={userInputProp.initialInvestment}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input required type="number" onChange={(event) => onChangeInput("annualInvestment", event.target.value)} value={userInputProp.annualInvestment}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input required type="number" onChange={(event) => onChangeInput("expectedReturn", event.target.value)} value={userInputProp.expectedReturn}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input required type="number" onChange={(event) => onChangeInput("duration", event.target.value)} value={userInputProp.duration}/>
                </p>
            </div>
        </section>
    )
}