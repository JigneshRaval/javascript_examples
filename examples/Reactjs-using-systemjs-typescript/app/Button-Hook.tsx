import React from "react";

const Button = () => {
    const [buttonText, setButtonText] = React.useState("Click me, please Hook");

    return (
        <button onClick={() => setButtonText("Thanks Hook, been clicked!")}>
            {buttonText}
        </button>
    );
}

export default Button;
