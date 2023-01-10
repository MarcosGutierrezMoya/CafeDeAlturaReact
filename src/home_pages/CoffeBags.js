import coffeDB from '../jsonFiles/coffeeDB.json' 
import flechaLogo from '../img/flecha.svg'

function CoffeBags() {

    const coffes = coffeDB;

    return (
        <main id="bolsasCafe">
            <section className='flex flex-col items-center p-40px gap-10'>
                <h2 id="News" className='drop-shadow-letters text-24 text-green font-medium'>Novedades</h2>
                <div id="coffeePlace" className='flex gap-6'>
                    {coffes.map((coffe,i)=>{if(i<4){
                        return(
                            <article key={coffe._id} className='shadow-images flex flex-col items-center px-31.3px py-24px gap-6 text-center group/coffee hover/coffee:bg-coffeeHover'>
                                <img src={coffe.img_url} alt={`bolsa cafe ${coffe.brand}`} />
                                <div>
                                    <input type="button" value={coffe.brand} className='font-semibold' />
                                    <p>9,00 €</p>
                                </div>
                                <input class="masProducto" type="button" value="Añadir" className='bg-green/70 text-white text-14 font-semibold p-8px rounded-4px group-hover/coffee:bg-green cursor-pointer' />
                            </article>
                        )
                    }})}
                </div>
                <article className='flex gap-4'>
                    <a href="" className=' text-14 font-semibold underline'>Ver todos</a>
                    <img src={flechaLogo} alt="flecha" />
                </article>
            </section>
        </main>
    )
}

export default CoffeBags;