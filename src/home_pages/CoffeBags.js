import flechaLogo from '../img/flecha.svg'
import { useContext, useState } from 'react';
import {ShopContext} from '../context/ShopContext';
import { ApiCoffes } from '../ApiFiles/Api';

function CoffeBags({cuantity}) {
    const {coffes,setCoffes} = useContext(ShopContext);
    const [allCoffes,setAllCoffes] = useState([]);
    ApiCoffes().then(response=> setAllCoffes(response.products));

    function buyCoffe(newCoffe) {
        if (!coffes.find(coffe=> coffe.brand === newCoffe.brand)) {
            setCoffes([...coffes,newCoffe]);            
        }
    }

    return (
        <main id="bolsasCafe">
            <section className='flex flex-col items-center p-40px gap-10'>
                <h2 id="News" className='drop-shadow-letters text-24 text-green font-medium'>Novedades</h2>
                <div id="coffeePlace" className='flex flex-wrap gap-6'>
                    {allCoffes.map((coffe,i)=>{if(i<cuantity){
                        return(
                            <article key={coffe._id} className={`shadow-images flex flex-col items-center px-31.3px py-24px gap-6 text-center group/coffee ${coffe.available?'hover/coffee:bg-coffeeHover':'grayscale-[60%]'}`}>
                                <img src={coffe.img_url} className={`${coffe.available?'':'grayscale-[60%]'}`} alt={`bolsa cafe ${coffe.brand}`} />
                                <div>
                                    <input type="button" value={coffe.brand} className='font-semibold' />
                                    <p>{`${coffe.price},00€`}</p>
                                </div>
                                <input type="button" value="Añadir" onClick={()=>buyCoffe(coffe)} className={`bg-green/70 text-white text-14 font-semibold p-8px rounded-4px ${coffe.available?'group-hover/coffee:bg-green cursor-pointer ':'grayscale-[60%]'}`} />
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