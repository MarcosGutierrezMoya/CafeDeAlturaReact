import minusLogo from '../../img/logo-.svg'
import plusLogo from '../../img/logo+.svg'
import { useState } from 'react';

function ShopCoffe({coffePrice,setCoffePrice,coffe,setCoffes,coffes}) {
    const [cuantity, setCuantity] = useState(1);
        
    function more() {
        setCuantity(cuantity + 1);
        setCoffePrice(coffePrice + coffe.price);
        
    }
    function less() {
        if (cuantity-1<0) {
            const deleteCoffe = coffes.filter(coffeFilter=> coffeFilter.brand !== coffe.brand);
            console.log(deleteCoffe);
            setCoffes(deleteCoffe);
        }
        else{
            setCuantity(cuantity - 1);
            setCoffePrice(coffePrice - coffe.price);
        }
    }

    return(
        <article key={coffe.id} className="flex gap-6 items-center justify-between">
            <div className="flex items-center gap-2">
                <img onClick={less} className='cursor-pointer p-8px' src={minusLogo} alt="minus logo" />
                <div>
                    <p className="text-12 bg-green/10 rounded-4px p-8px" >{cuantity}</p>
                </div>
                <img onClick={more} className='cursor-pointer p-8px' src={plusLogo} alt="plus logo" />
            </div>
            <img className="w-[55.66px]" src={coffe.img_url} alt="" />
            <div className="w-[506.34px] text-14">
                <p><strong>{coffe.brand}</strong></p>
                <p>Paquete de café, 250 gr</p>
            </div>
            <h3 className="text-18 font-semibold">{`${coffe.price*cuantity},00€`}</h3>
        </article>
    )
}

export default ShopCoffe;