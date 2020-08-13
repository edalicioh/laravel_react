import React from 'react';

interface ButtonProps {
    text: String;
}

const Button: React.FC<ButtonProps> = ({text}) => {
    return(
        <button  type="submit" className="btn btn-primary btn-block" >{text}</button>
    );
}

export default Button;
