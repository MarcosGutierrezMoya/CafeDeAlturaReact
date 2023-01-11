import { useContext, useRef } from "react";
import { FormContext } from "../../context/FormContext";

function FormPolitics() {
    const {setPolitics} = useContext(FormContext);
    const politics = useRef();
    
    function checkPolitics() {
        let politicsValue = politics.current.checked;
        if (politicsValue === true) {
            politics.current.parentElement.nextSibling.innerText = "";
            setPolitics(politicsValue);
        }
        else {
            politics.current.parentElement.nextSibling.innerText = "Debe aceptar las condiciones";
        }
    }

    return(
        <div>
            <div className="flex gap-3">
                <input type="checkbox"  name="politics" id="politics" onChange={checkPolitics} ref={politics} />
                <p className="text-politicsLetters text-14">
                    Acepto la <a className="font-semibold cursor-pointer">Política de privacidad</a> y los <a className="font-semibold cursor-pointer">Términos y condiciones</a>
                </p>
            </div>
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default FormPolitics;