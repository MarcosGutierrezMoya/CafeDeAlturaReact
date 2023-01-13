import { useContext, useRef } from "react";
import { FormContext } from "../../../context/FormContext";

function FormOpinion() {
    const {setOpinion,isRequired,isBetween} = useContext(FormContext)
    const userOpinion = useRef();

    function checkUserOpinion() {
        const min = 10;
    
        if (!isRequired(userOpinion.current.value)) {
            userOpinion.current.nextSibling.innerText = `Necesitamos saber en que podemos ayudarte.`;
        } else if (!isBetween(userOpinion.current.value.length, min)) {
            userOpinion.current.nextSibling.innerText = `Debe tener una longitud mínima de ${min} caracteres.`;
        } else {
            if (/(.*[a-zA-Z0-9]{3,}$)/gm.test(userOpinion.current.value)) {
                userOpinion.current.nextSibling.innerText = "";
                setOpinion(userOpinion.current.value);
            }
            else {
                userOpinion.current.nextSibling.innerText = `Tu opinion no puede contener caracteres extraños.`;
            }
        }
    }

    return(
        <div className="flex flex-col items-start">
            <textarea name="opinion" id="opinion" cols="50" rows="4" placeholder="¿En qué podemos ayudarte?" onInput={checkUserOpinion} className="border border-inputBorder px-13px py-9px rounded-6px shadow-sm outline-none text-14" ref={userOpinion} />
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default FormOpinion;