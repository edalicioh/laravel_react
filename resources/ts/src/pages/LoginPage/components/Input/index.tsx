import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon: React.ComponentType<IconBaseProps>;
}


const Input: React.FC<InputProps> = ({name, icon: Icon, ...props }) => {
    return(
        <div className="input-group mb-3">
        <input className="form-control" id={name} {...props} />

        <div className="input-group-append">
            <div className="input-group-text">
                {<Icon/>}
            </div>
        </div>
    </div>
    );
}

export default Input;
