import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { FormContext } from "../../../context/FormContext";

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
                    Acepto la <Link className="font-semibold cursor-pointer">Política de privacidad</Link> y los <Link className="font-semibold cursor-pointer">Términos y condiciones</Link>
                </p>
            </div>
            <small className="text-red font-semibold text-14"></small>
        </div>
    )
}

export default FormPolitics;