import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })
    function handleChangeInput(inputIdentifier, newValue) {
        setUserInput((prevData) => {
            return {
                ...prevData,
                [inputIdentifier]: newValue
            }

        })
    }
  return (
    <>
      <Header />
      <UserInput userInputProp={userInput} onChangeInput={handleChangeInput}/>
      <Results  input={userInput}/>
    </>
  );
}

export default App;
