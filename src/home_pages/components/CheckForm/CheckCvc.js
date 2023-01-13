import { useContext, useRef, useState } from "react";
import { FormContext } from "../../../context/FormContext";

function CheckCvc({text}) {
    const {setPhone,isRequired,isBetween} = useContext(FormContext);
    const [valid,setValid] = useState(0);
    const userPhone = useRef();

    function checkUserTlf() {
        const min = 16,
            max = 16;
    
        if (!isRequired(userPhone.current.value)) {
            userPhone.current.parentElement.nextSibling.innerText = `El numero de teléfono no puede estar en blanco`;
            setValid(2);
        } else if (!isBetween(userPhone.current.value.length, min, max)) {
            userPhone.current.parentElement.nextSibling.innerText = `Debe tener una longitud de ${min} números.`;
            setValid(2);
        } else {
            if (/\d*/.test(userPhone.current.value)) {
                userPhone.current.parentElement.nextSibling.innerText = "";
                setValid(1);
                setPhone(userPhone.current.value);
            }
            else {
                userPhone.current.parentElement.nextSibling.innerText = `Solo puede contener números.`;
                setValid(2);
            }
        }
    }

    return(
        <div className="flex flex-col items-start w-full">
            <label htmlFor="userPhone" className='text-12'>{text}</label>
            <input type="number" id="userPhone" name="userPhone" onInput={checkUserTlf} required placeholder="123" className={`border ${valid===0?"border-inputBorder":valid===1?"border-green":"border-red"} px-13px py-9px rounded-6px shadow-sm outline-none text-12 w-full`} ref={userPhone}/>
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default CheckCvc;