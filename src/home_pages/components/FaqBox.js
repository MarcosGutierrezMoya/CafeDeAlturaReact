import flechitaAbajo from '../../img/flechitaAbajo.svg'

function FaqBox({pos}) {
    let question = "";
    let paragraph = "";

    switch (pos) {
        case 0:
            question = "¿Cómo hago el pedido?";
            paragraph = "Selecciona el café que desees probar y completa el proceso de compra. Si lo prefieres, te preguntaremos cada cuánto quieres que te lo mandemos a casa y así nunca te quedarás sin café.";
            break;
        case 1:
            question = "¿Por qué los precios son tan bajos?";
            paragraph = "Viajamos constantemente para encontrar los mejores granos y a los agricultores más exigentes. Si podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos de café recibe el mayor beneficio posible.";
            break;
        case 2:               
            question = "¿Es posible enviar café a mi oficina?";
            paragraph = "Si, pero solo si te haces VIP.";
            break;
    }

    return(
        <article className='bg-white p-24px flex flex-col gap-4 rounded-10px'>
            <section className='flex justify-between'>
                <h3 className='text-18 font-semibold text-faqLetters'>{question}</h3>
                <img id="flecha1" class="flechaFaq" src={flechitaAbajo} alt="abierto" />
            </section>
            <div className="bg-lightGrey h-px "></div>
            <p>{paragraph}</p>
        </article>
    )
}

export default FaqBox;