import flechaBlanca from '../img/flechaBlanca.svg'
import FaqBox from './components/FaqBox';

function Faq() {
    
    return(
        <article id="faq" className='bg-green flex flex-col gap-6 px-306px py-48px items-center'>
        <h2 className='text-white'>Preguntas frecuentes</h2>
        <main className='flex flex-col gap-4'>
            <FaqBox pos={0} />
            <FaqBox pos={1} />
            <FaqBox pos={2} />
        </main>
        <article className='flex text-white gap-4 underline'>
            <a href="assets/pages/sobreNosotros.html">Resolvemos tus dudas</a>
            <img src={flechaBlanca} alt="flecha" />
        </article>
    </article>
    )
}

export default Faq;