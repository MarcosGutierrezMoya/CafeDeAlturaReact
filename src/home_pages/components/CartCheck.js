import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function ShopCheck({coffePrice,sendPrice,place}) {
    const {coffes} = useContext(ShopContext);
    
    return(
        <aside className='bg-coffeeHover p-24px flex flex-col gap-4 h-fit w-[384px]'>
            <h3 className="text-18 font-semibold">Total del carrito</h3>
            <div className="bg-homeFormBg h-px rounded-4px transition-opacity duration-700"></div>
            <section className="flex justify-between">
                <p>SUBTOTAL</p>
                <p><strong id="subtotal">{coffePrice},00€</strong></p>
            </section>
            <section className="flex justify-between">
                <p>ENVÍO</p>
                <p><strong id="sendTotalPrice">GRATIS</strong></p>
            </section>
            <div className="bg-homeFormBg h-px rounded-4px transition-opacity duration-700"></div>
            <section className="flex justify-between">
                <p><strong>TOTAL</strong></p>
                <div className="text-right">
                    <p><strong id="total">{coffePrice + sendPrice},00€</strong></p>
                    <p className="text-[#515051] text-12px font-400;">Incluye {coffePrice*0.21}€ de IVA</p>
                </div>
            </section>
            {place==="Cart"?
            <div className="flex items-center gap-4">
                {coffes.length>0?
                    <Link to={"/Checkout"}> <button className="bg-green text-white px-24px py-12px rounded-4px font-semibold text-14 tracking-wider">Ir a checkout</button></Link>
                    :
                    <Link> <button className="bg-green text-white px-24px py-12px rounded-4px font-semibold text-14 tracking-wider cursor-default">Ir a checkout</button></Link>
                }
                <Link to={"/Tienda"} className="px-24px py-12px text-green font-semibold text-14">Seguir comprando</Link>
            </div>
            :
            <Link to={"/"}> <button className="bg-green/70 text-white px-24px py-12px rounded-4px font-semibold text-14 tracking-wider">Pagar y realizar pedido</button></Link>
            }
        </aside>
    )
}

export default ShopCheck;