import React from 'react';
import style from "./ButtonContainer.module.css";

export default function ButtonContainer({ onButtonClick }) {
    const buttonName = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

    return (
        <div>
            <div className={style.buttonsContainer}>
                {buttonName.map((buttonName, index) => (
                    <button key={index} className={style.buttons} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>
                ))}
            </div>
        </div>
    );
}
