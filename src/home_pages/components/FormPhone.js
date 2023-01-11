import { useState } from "react";
import { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";

function FormPhone() {
    const [land,setLand] = useState("US"); 
    const {setPhone,isBetween,isRequired} = useContext(FormContext);
    const userPhone = useRef();

    function landChange(e){
        setLand(e.target.value);
    }

    function checkUserTlf() {
        const min = 9,
            max = 9;
    
        if (!isRequired(userPhone.current.value)) {
            userPhone.current.parentElement.nextSibling.innerText = `El numero de teléfono no puede estar en blanco`;
        } else if (!isBetween(userPhone.current.value.length, min, max)) {
            userPhone.current.parentElement.nextSibling.innerText = `Debe tener una longitud de ${min} números.`;
        } else {
            if (/\d*/.test(userPhone.current.value)) {
                userPhone.current.parentElement.nextSibling.innerText = "";
                setPhone(userPhone.current.value);
            }
            else {
                userPhone.current.parentElement.nextSibling.innerText = `Solo puede contener números.`;
            }
        }
    }

    return(
        <section className="flex flex-col items-start">
            <label htmlFor="telephone" className='text-12'>Teléfono</label>
            <div className="flex text-center items-center border border-inputBorder rounded-6px">
                <select name="pais" id="pais" onChange={landChange} className="px-13px py-9px shadow-sm text-12">
                    <option value="US">US</option>
                    <option value="ESP">ESP</option>
                </select>
                <p className="text-14 w-6">{land==="US"?'+1':'+34'}</p>
                <input type="number" id="telephone" name="telephone" min={0} minLength={9} maxLength={9} list="pais" required onInput={checkUserTlf} placeholder="+1 (555) 987-6543" className="px-13px py-9px shadow-sm outline-none text-14 w-350px" ref={userPhone} />
            </div>
            <small className="text-red font-semibold text-14"></small>
        </section>
    )
}

export default FormPhone;