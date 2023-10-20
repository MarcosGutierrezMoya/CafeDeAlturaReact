import { useState } from 'react';

function ShopCoffe({coffePrice,setCoffePrice,coffe,setCoffes,coffes,setTotalCoffees}) {
    const [cuantity, setCuantity] = useState(1);

        
    function more() {
        coffes[coffes.findIndex(thisCoffe=> thisCoffe.brand === coffe.brand)].__v += 1
        setCoffePrice(coffePrice + coffe.price);
        localStorage.setItem("coffees",JSON.stringify(coffes));
        setTotalCoffees(prev=>prev+1);
        
    }
    function less() {
        if (coffe.__v-1===0) {
            const deleteCoffe = coffes.filter(coffeFilter=> coffeFilter.brand !== coffe.brand);
            console.log(deleteCoffe);
            setCoffes(deleteCoffe);
            localStorage.setItem("coffees",JSON.stringify(deleteCoffe));
        }
        else{
            coffes[coffes.findIndex(thisCoffe=> thisCoffe.brand === coffe.brand)].__v -= 1
            localStorage.setItem("coffees",JSON.stringify(coffes));
        }
        setTotalCoffees(prev=>prev-1);
        setCoffePrice(coffePrice - coffe.price);
    }

    return(
        <article key={coffe.id} className="flex gap-6 items-center justify-between">
            <div className="flex items-center gap-2">
                <img onClick={less} className='cursor-pointer p-8px' src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/minus.png?alt=media&token=d7f084c1-25c3-42cc-87b8-b20e32ccf65f&_gl=1*9crr8i*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1Njg0NDQuNjAuMC4w"} alt="minus logo" />
                <div>
                    <p className="text-12 bg-green/10 rounded-[100%] py-1 w-6 text-center" >{coffe.__v}</p>
                </div>
                <img onClick={more} className='cursor-pointer p-8px' src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/plus.png?alt=media&token=39526968-7b8a-407b-b7d3-be549631db1c&_gl=1*ltnkch*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1Njg0NjAuNDQuMC4w"} alt="plus logo" />
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