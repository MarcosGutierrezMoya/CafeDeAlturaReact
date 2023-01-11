import { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";

function FormMail() {
    const {setMail,isEmailValid,isRequired} = useContext(FormContext)
    const userMail = useRef();

    function checkEmail() {
    
        if (!isRequired(userMail.current.value)) {
            userMail.current.nextSibling.innerText = `El email no puede estar en blanco.`;
        } else if (!isEmailValid(userMail.current.value)) {
            userMail.current.nextSibling.innerText = `Este e no es valido.`;
        } else {
            userMail.current.nextSibling.innerText = "";
            setMail(userMail.current.value);
        }
    }

    return(
        <div className="flex flex-col items-start">
            <label htmlFor="email" className='text-12'>Email</label>
            <input type="email" id="email" name="email" required onInput={checkEmail} placeholder="Email" className="border border-inputBorder px-13px py-9px rounded-6px shadow-sm outline-none text-12 w-full" ref={userMail}/>
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default FormMail;