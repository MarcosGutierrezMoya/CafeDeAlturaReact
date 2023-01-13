import { useRef, useState } from 'react';
import flechitaAbajo from '../../img/flechitaAbajo.svg'

function FaqBox({pos}) {
    let question = "";
    let paragraph = "";
    const divider = useRef();
    const p = useRef();
    const [openBox,setOpenBox] = useState(false);
    
    function openCloseFaq(){
        setOpenBox(!openBox);
        if (p.current.innerText !== "") {
            p.current.innerText = "";
        }
        else{
            switch (pos) {
                case 0:
                    p.current.innerText = "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.";
                    break;
                case 1:
                    p.current.innerText = "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.";
                    break;
                case 2:               
                    p.current.innerText = "Si, pero solo si te haces VIP.";
                    break;
            }  
        }
    }
    
    switch (pos) {
        case 0:
            question = "¿Cómo hago el pedido?";
            break;
        case 1:
            question = "¿Por qué los precios son tan bajos?";
            break;
        case 2:               
            question = "¿Es posible enviar café a mi oficina?";
            break;
    }

    return(
        <article className={`bg-white p-24px flex flex-col gap-4 rounded-10px ${openBox?"":"h-20"} transition-[height] duration-500 w-[688px]`}>
            <section className='flex justify-between'>
                <h3 className='text-18 font-semibold text-faqLetters'>{question}</h3>
                <img id={`flecha${pos}`} className={`${openBox?"":"rotate-180"} cursor-pointer`} onClick={openCloseFaq} src={flechitaAbajo} alt="abierto" />
            </section>
            <div className={`bg-lightGrey h-1 rounded-4px ${openBox?"opacity-100":"opacity-0"} transition-opacity duration-700`} ref={divider}/>
            <p className={`${openBox?"opacity-100":"opacity-0"} transition-opacity duration-700`} ref={p}>{paragraph}</p>
        </article>
    )
}

export default FaqBox;