import { useContext, useEffect, useRef } from "react";
import ShopCoffe from "./CartCoffe";
import {ShopContext} from '../../context/ShopContext';
import ShopCheck from "./CartCheck";

function ShopZone() {
    const {coffes,setCoffes,coffePrice, setCoffePrice,sendPrice, seturgentSendPrice, setTotalCoffees} = useContext(ShopContext);
    const standarSend = useRef();
    const urgentSend = useRef();
    let sumPrices = 0;
    
    useEffect(()=>{
        if (sumPrices===0) {
            for (let i = 0; i < coffes.length; i++) {
                sumPrices += parseInt(coffes[i].price * coffes[i].__v);
            }
            setCoffePrice(sumPrices);
            standarSend.current.checked = true;
        }
    },[]);

    function standardSendMode(){
        standarSend.current.checked = true;
        urgentSend.current.checked = false;
        seturgentSendPrice(0);
    }

    function urgentSendMode(){
        standarSend.current.checked = false;
        urgentSend.current.checked = true;
        seturgentSendPrice(9);
    }

    return(
        <main className='flex flex-col gap-6 px-40px items-center justify-center h-full'>
            <h2 className="text-center text-green text-24 font-medium">Cesta({coffes.length})</h2>
            <div className='flex gap-6'>
                <article className="flex flex-col gap-6 w-[792px]">
                    <h3 className="text-18 font-semibold">Productos</h3>
                    {coffes?.map((coffe,i)=>{
                        if (i<coffes.length-1) {
                            return(
                                <div className="flex flex-col gap-6" key={i}>
                                    <ShopCoffe coffes={coffes} setCoffes={setCoffes} coffePrice={coffePrice} setCoffePrice={setCoffePrice} coffe={coffe} setTotalCoffees={setTotalCoffees}/>
                                    <div className="bg-homeFormBg h-px rounded-4px transition-opacity duration-700"></div>
                                </div>
                            )
                        }
                        else{
                            return(
                                <ShopCoffe coffes={coffes} setCoffes={setCoffes} coffePrice={coffePrice} setCoffePrice={setCoffePrice} coffe={coffe} key={i} setTotalCoffees={setTotalCoffees}/>
                            )
                        }
                    })}
                    <h3 className="text-18 font-semibold">Seleccionar envío</h3>
                    <section className='flex justify-between items-center gap-4'>
                        <input type="radio" id="send" onClick={standardSendMode} ref={standarSend} />
                        <div className='w-[657px]'>
                            <p><strong>Envío 5-7 días</strong></p>
                            <p className='text-14'>Opción estándar sin seguimiento</p>
                        </div>
                        <p><strong id="sendPrice">GRATIS</strong></p>
                    </section>
                    <div className="bg-homeFormBg h-px rounded-4px transition-opacity duration-700"></div>
                    <section className='flex justify-between items-center gap-4'>
                        <input type="radio" id="urgentSend" onClick={urgentSendMode} ref={urgentSend} />
                        <div className='w-[666px]'>
                            <p><strong>Envío urgente 24h </strong></p>
                            <p className='text-14'>Recibe tu pedido en las siguientes 24h (Para pedidos realizados antes de las 13:00).</p>
                        </div>
                        <p id="urgentSendPrice"><strong >9,00€</strong></p>
                    </section>
                </article>
                <ShopCheck sendPrice={sendPrice} coffePrice={coffePrice} place={"Cart"} />
            </div>
        </main>
    )
}

export default ShopZone;