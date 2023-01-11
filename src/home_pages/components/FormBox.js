
function FormBox({input}) {
    let inputType = "";

    switch (input) {
        case "Nombre completo":
            inputType = "text";
            break;
        case "Email":
            inputType = "email";
            break;
        case "Teléfono":
            inputType = "number";
            break;
        case "politicas":
            inputType = "checkbox";
            break;
        case "Enviar":
            inputType = "submit";
            break;
    }
    return(
        <div className="text-black">
            {input==="Teléfono"?
            <section className="flex flex-col items-start">
                <label htmlFor={input} className='text-12'>{input}</label>
                <div className="border border-inputBorder rounded-6px">
                    <select name="pais" id="pais" className="px-13px py-9px shadow-sm text-12">
                        <option value="US">US</option>
                        <option value="ESP">ESP</option>
                    </select>
                    <input type={inputType} id={input} name={input} min={0} minLength={9} maxLength={9} list="pais" required autoComplete="off" placeholder="+1 (555) 987-6543" className="px-13px py-9px shadow-sm outline-none text-12 w-350px" />
                </div>
            </section>
                :input==="opinion"?
                <div className="flex flex-col items-start">
                    <textarea name={input} id={input} cols="50" rows="4" placeholder="¿En qué podemos ayudarte?" className="border border-inputBorder px-13px py-9px rounded-6px shadow-sm outline-none text-14" />
                    <small></small>
                </div>
                :input==="politicas"?
                <div className="flex gap-3">
                    <input type={inputType}  name={input} id={input} />
                    <p className="text-politicsLetters text-14">
                        Acepto la <a className="font-semibold cursor-pointer">Política de privacidad</a> y los <a className="font-semibold cursor-pointer">Términos y condiciones</a>
                    </p>
                </div>
                :input==="Enviar"?
                <button type={inputType} className="bg-green rounded-4px px-24px py-12px text-white">{input}</button>
                :
                <div className="flex flex-col items-start">
                    <label htmlFor={input} className='text-12'>{input}</label>
                    <input type={inputType} id={input} name={input} required autoComplete="off" placeholder={input} className="border border-inputBorder px-13px py-9px rounded-6px shadow-sm outline-none text-12" />
                </div>
            }
            <small></small>
        </div>
    )
}

export default FormBox;