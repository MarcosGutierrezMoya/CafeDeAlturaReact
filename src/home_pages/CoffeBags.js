import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function CoffeBags({ cuantity }) {
    const { coffes, buyCoffe, allCoffes } = useContext(ShopContext);


    useEffect(() => {
        localStorage.setItem("coffees", JSON.stringify(coffes));
    }, [coffes]);

    return (
        <main id="bolsasCafe">
            <section className='flex flex-col items-center p-40px gap-10'>
                <h2 id="News" className='drop-shadow-letters text-24 text-green font-medium'>Novedades</h2>
                <div id="coffeePlace" className='flex flex-wrap gap-6'>
                    {allCoffes.map((coffe, i) => {
                        if (i < cuantity) {
                            return (
                                <article key={coffe._id} className={`shadow-images flex flex-col items-center px-31.3px py-24px gap-6 text-center group/coffee ${coffe.available ? 'hover/coffee:bg-coffeeHover' : 'grayscale-[60%]'}`}>
                                    <img src={coffe.img_url} className={`${coffe.available ? '' : 'grayscale-[60%]'}`} alt={`bolsa cafe ${coffe.brand}`} />
                                    <div>
                                        <input type="button" value={coffe.brand} className='font-semibold' />
                                        <p>{`${coffe.price},00€`}</p>
                                    </div>
                                    <input type="button" value="Añadir" onClick={() => coffe.available ? buyCoffe(coffe) : ""} className={`bg-green/70 text-white text-14 font-semibold p-8px rounded-4px ${coffe.available ? 'group-hover/coffee:bg-green cursor-pointer ' : 'grayscale-[60%]'}`} />
                                </article>
                            )
                        }
                        return (
                            <></>
                        )
                    })}
                </div>
                <article className='flex gap-4 justify-center items-center'>
                    <Link to="/Tienda" className=' text-14 font-semibold underline'>Ver todos</Link>
                    <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/rightArrow.png?alt=media&token=8dc9864d-d8d5-422c-95c4-a19da82b9368&_gl=1*1fm27aj*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4wLjE2OTc1NjU4MDkuNjAuMC4w"} alt="flecha" />
                </article>
            </section>
        </main>
    )
}

export default CoffeBags;