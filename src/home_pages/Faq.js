// import flechaBlanca from '../img/flechaBlanca.svg'
import FaqBox from './components/FaqBox';

function Faq() {

    return (
        <article id="faq" className='bg-green flex flex-col gap-6 px-306px py-48px items-center '>
            <h2 className='text-white'>Preguntas frecuentes</h2>
            <main className='flex flex-col gap-4'>
                <FaqBox pos={0} />
                <FaqBox pos={1} />
                <FaqBox pos={2} />
            </main>
            <article className='flex text-white gap-4 underline items-center'>
                <a href="assets/pages/sobreNosotros.html">Resolvemos tus dudas</a>
                <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/rightArrowWhite.png?alt=media&token=4d07e913-2143-4b6a-8e4e-e68f6fa11e2d&_gl=1*1dtmhq8*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1NjYxNjguNjAuMC4w"} alt="flecha" />
            </article>
        </article>
    )
}

export default Faq;