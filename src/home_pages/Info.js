// import flechaLogo from '../img/flecha.svg'
// import restaurante from '../img/restaurante.jpg'

function Info() {
    
    return(
        <article id="info" className='bg-lightGrey'>
            <div className='flex px-40px pt-44.61px pb-45.39px gap-4'>
                <section className='flex flex-col justify-center'>
                    <h2 className='text-green text-24 font-medium'>Pruébalo en nuestro coffee shop</h2>
                    <p className='text-14'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <article>
                        <a href="">Como llegar</a>
                        <img src={"flechaLogo"} alt="flecha" />
                    </article>
                </section>
                <aside>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/nthSection.jpg?alt=media&token=d422bbbd-e25e-4801-8468-427c253628bd&_gl=1*o10ewu*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1NjcxNTAuNDIuMC4w"} alt="foto del lugar" className='rounded-20px' />
                </aside>
            </div>
        </article>
    )
}

export default Info;