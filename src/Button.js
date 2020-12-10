import './Button.css';

const Button = props => {
    const { name } = props 
    const btnLabel = name
    const cName = "Button-button " + String(btnLabel)
    const clicked = () => {
        alert(cName)
        if (cName == "Button-button Load Image") {
            // Load image 
        }
    }
    return (
        <a href="#" onClick={clicked} className={cName}>{btnLabel}</a>
    );
}

export default Button;