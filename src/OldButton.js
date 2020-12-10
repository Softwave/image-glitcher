import './Button.css';

const Button = props => {
    const { name } = props 
    const btnLabel = name
    const cName = "Button-button " + String(btnLabel)
    return (
        <a href="#" className={cName}>{btnLabel}</a>
    );
}

export default Button;