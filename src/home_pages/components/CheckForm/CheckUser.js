import { useContext, useRef, useState } from "react";
import { FormContext } from "../../../context/FormContext";

function CheckUser() {
    const {setUserName,isRequired,isBetween} = useContext(FormContext);
    const [valid,setValid] = useState(0);
    const userName = useRef();

    function checkUsername() {
        const min = 3,
        max = 20;
        
        if (!isRequired(userName.current.value)) {
            userName.current.nextSibling.innerText = `El nombre de usuario no puede estar en blanco`;
            setValid(2);
        } else if (!isBetween(userName.current.value.length, min, max)) {
            userName.current.nextSibling.innerText =  `Debe tener una longitud de entre ${min} y ${max} letras.`;
            setValid(2);
        } else {
            if (/(.*[a-zA-Z]{3,20}$)/gm.test(userName.current.value)) {
                userName.current.nextSibling.innerText = "";
                setValid(1);
                setUserName(userName.current.value);
            }
            else {
                userName.current.nextSibling.innerText = `Tu nombre no puede contener números.`;
                setValid(2);
            }
        }
    }

    return(
        <div className="flex flex-col items-start">
            <label htmlFor="userName" className='text-12'>Nombre Completo</label>
            <input type="text" id="userName" name="userName" onInput={checkUsername} required placeholder="Nombre del titular" className={`border ${valid===0?"border-inputBorder":valid===1?"border-green":"border-red"} px-13px py-9px rounded-6px shadow-sm outline-none text-12 w-full`} ref={userName}/>
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default CheckUser;