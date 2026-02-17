import headerImg from "../assets/investment-calculator-logo.png"

export default function Header() {
    return(
        <header id="header">
            <img src={headerImg} alt="obrazek jak ta lala" />
            <h1>Investment App</h1>
        </header>
    )
}