import React from "react";
import IButtonProps from "../interfaces/IButtonProps";

export const Button: React.FC<IButtonProps> = (props) => {
    return (
        <div className="button">
            <li className={props.enabled ? 'enabled' : 'disabled'}>
                {props.label}
            </li>
        </div>
    )
}
export default Button;