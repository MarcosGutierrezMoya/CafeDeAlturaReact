import { useState } from "react";
import { useContext, useRef } from "react";
import { FormContext } from "../../../context/FormContext";

function FormPhone({hasLands}) {
    const [land,setLand] = useState("US"); 
    const {setPhone,isBetween,isRequired} = useContext(FormContext);
    const userPhone = useRef();
    const [valid,setValid] = useState(0);

    function landChange(e){
        setLand(e.target.value);
    }

    function checkUserTlf() {
        const min = 9,
            max = 9;
    
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
        <section className="flex flex-col items-start">
            <label htmlFor="telephone" className='text-12'>Teléfono</label>
            {hasLands?
                <div className={`flex text-center items-center border ${valid===0?"border-inputBorder":valid===1?"border-green":"border-red"} rounded-6px`}>
                    <select name="pais" id="pais" onChange={landChange} className="px-13px py-9px shadow-sm text-12">
                        <option value="US">US</option>
                        <option value="ESP">ESP</option>
                    </select>
                    <p className="text-14 w-6">{land==="US"?'+1':'+34'}</p>
                    <input type="number" id="telephone" name="telephone" min={0} minLength={9} maxLength={9} list="pais" required onInput={checkUserTlf} placeholder="+1 (555) 987-6543" className="px-13px py-9px shadow-sm outline-none text-14 w-350px" ref={userPhone} />
                </div>
            :
            <input type="number" id="telephone" name="telephone" min={0} minLength={9} maxLength={9} list="pais" required onInput={checkUserTlf} placeholder="+34 600 6000 600" className={`px-13px py-9px shadow-sm outline-none text-14 w-full items-center border ${valid===0?"border-inputBorder":valid===1?"border-green":"border-red"} rounded-6px`} ref={userPhone} />
            }
            <small className="text-red font-semibold text-14"></small>
        </section>
    )
}

export default FormPhone;