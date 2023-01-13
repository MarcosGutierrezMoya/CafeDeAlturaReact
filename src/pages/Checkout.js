import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import CheckForm from "../home_pages/components/CheckForm";
import ShopCheck from "../home_pages/components/CartCheck";
import NavBar from "../home_pages/NavBar";

function Checkout() {
    const {sendPrice,coffePrice} = useContext(ShopContext);

    return(
        <div>
            <NavBar />
            <section className="flex flex-col p-40px gap-6">
                <h2 className="text-24 text-green font-semibold text-center">Checkout</h2>
                <div className="flex justify-center gap-6">
                    <CheckForm />
                    <ShopCheck sendPrice={sendPrice} coffePrice={coffePrice} place={"Checkout"} />
                </div>
            </section>
            <div className='text-center bg-navGrey py-12px text-white'>
                <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
            </div>
        </div>
    )
}

export default Checkout;