import CheckUser from "./CheckForm/CheckUser";
import CheckCard from "./CheckForm/CheckCard";
import CheckCvc from "./CheckForm/CheckCvc";
import CheckExpiration from "./CheckForm/CheckExpiration";

import FormUser from "./Form/FormUser";
import FormPhone from "./Form/FormPhone";
import FormMail from "./Form/FormMail";
import CheckLands from "./CheckForm/CheckLands";

function CheckForm() {
 
    return(
        <form className="flex flex-col gap-6 w-[792px]">
            <h3 className="text-18 font-semibold">Seleccionar método de pago</h3>
            <section className="flex gap-4">
                <input type={"radio"} defaultChecked={true} name="paidMethod"/>
                <div>
                    <p className="text-14 font-semibold">Tarjeta de débito</p>
                    <p className="text-14">Opción estándar sin seguimiento</p>
                </div>
            </section>
            <section className="w-[279px] flex flex-col gap-2">
                <CheckUser />
                <CheckCard />
                <div className="flex items-center gap-4">
                    <CheckExpiration />
                    <CheckCvc text={"CVC"} />
                </div>
            </section>
            <section className="flex gap-4">
                <input type={"radio"} name="paidMethod"/>
                <div>
                    <p className="text-14 font-semibold">Transferencia bancaria a la cuenta ES12 1234 1234 123457890</p>
                    <p className="text-14">Será necesario recibir el comprobante de la transferencia para preparar tu pedido</p>
                </div>
            </section>
            <section className="flex gap-4">
                <input type={"radio"} name="paidMethod"/>
                <div className="flex gap-4 items-center">
                    <p className="text-14 font-semibold">Bizum</p>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/Bizumimg.png?alt=media&token=ce97dbe4-d5c0-411a-a07f-94aaa246f3ff&_gl=1*992k2x*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1Njc4MzUuNjAuMC4w"} />
                </div>
            </section>
            <section className="flex flex-col gap-2 w-[521px]">
                <h3 className="text-18 font-semibold">Dirección de envío</h3>
                <FormUser text={"Nombre"} />
                <FormUser text={"Apellidos"} />
                <FormPhone hasLands={false} />
                <FormMail />
                <article>
                    <p>País</p>
                    <CheckLands españa={"España"} portugal={"Portugal"} francia={"Francia"} />
                </article>
                <div className="flex justify-center gap-4">
                    <FormUser text={"Población"} />
                    <CheckCvc text={"CP"} />                 
                </div>
                <div className="flex justify-center gap-4">
                    <FormUser text={"Calle"} />
                    <CheckCvc text={"Nº"} />                 
                    <CheckCvc text={"Piso"} />                 
                    <FormUser text={"Puerta"} />                    
                </div>
            </section>
        </form>
    )
}

export default CheckForm;