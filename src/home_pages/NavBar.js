// import cafeLogo from '../img/cafeLogo.svg'
// import tlfLogo from '../img/tlfLogo.svg'
// import tiendaLogo from '../img/tiendaLogo.svg'
import NavPages from './components/NavPages';
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';    

function NavBar({ rutas }) {
    const { coffes, totalCoffees } = useContext(ShopContext);

    return (
        <nav id="navBar" className="flex justify-between bg-navGrey text-white px-40px py-3.5">
            <section className='tittle'>
                <Link to="/" className='text-23.46'>cafedealtura.com</Link>
                <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/cup.png?alt=media&token=8f86ac03-c85e-4487-885d-5ce1da5cf4d8&_gl=1*1v1oq2t*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjM0MzUuMTAuMC4w"} alt="simbolo cafe" />
            </section>
            {rutas ?
                <section className='routes'>
                    <NavPages routePage={"Tienda"} />
                    <NavPages routePage={"Suscripción"} />
                    <NavPages routePage={"Para empresas"} />
                    <NavPages routePage={"Sobre nosotros"} />
                    <NavPages routePage={"contacto"} />
                </section>
                :
                <div className='w-[30rem]'></div>
            }
            <section className='phoneNumber'>
                <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/wPhone.png?alt=media&token=9a5885b5-3bb0-4f85-a48b-8f55406656c1&_gl=1*1gzpbvk*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjMzODcuNTguMC4w"} alt="Logo de teléfono" />
                <a href="tel:+34919490518">+34 919 49 05 18</a>
                <div>
                    <input type="button" value="Iniciar sesión" id="initSesion" className='bg-navBtnGrey px-24px py-12px rounded-4px' />
                </div>
            </section>
            <section>
                <div>
                    {totalCoffees !== 0 ?
                        <Link to="/Cesta">
                            <div className='flex gap-2'>
                                <input type="image" src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/bolsa.png?alt=media&token=5d53b6ff-2890-4370-a3fe-9247d134aac1&_gl=1*1ja2ss*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjMyMjIuNTUuMC4w"} alt="Logo de la cesta" />
                                <p className='text-white text-14 bg-lightGrey/10 px-9px py-2px rounded-200px'>{totalCoffees}</p>
                            </div>
                        </Link> :
                        <Link to="/Cesta">
                            <input type="image" src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/bolsa.png?alt=media&token=5d53b6ff-2890-4370-a3fe-9247d134aac1&_gl=1*1ja2ss*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjMyMjIuNTUuMC4w"} alt="Logo de la cesta" />
                        </Link>
                    }
                </div>
            </section>
        </nav>
    )
}

export default NavBar;