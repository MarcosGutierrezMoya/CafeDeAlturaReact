import flechaLogo from '../img/flecha.svg'
import restaurante from '../img/restaurante.jpg'

function Info() {
    
    return(
        <article id="info" className='bg-lightGrey'>
            <div className='flex px-40px pt-44.61px pb-45.39px gap-4'>
                <section className='flex flex-col justify-center'>
                    <h2 className='text-green text-24 font-medium'>Pruébalo en nuestro coffee shop</h2>
                    <p className='text-14'>Visita nuestra cafetería en el centro de la ciudad para probar los granos de café antes de hacer tu pedido y llévate un descuento</p>
                    <article>
                        <a href="">Como llegar</a>
                        <img src={flechaLogo} alt="flecha" />
                    </article>
                </section>
                <aside>
                    <img src={restaurante} alt="foto del lugar" className='rounded-20px' />
                </aside>
            </div>
        </article>
    )
}

export default Info;