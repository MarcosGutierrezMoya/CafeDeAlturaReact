import cafeLogo from '../img/cafeLogo.svg'
import tlfLogo from '../img/tlfLogo.svg'
import tiendaLogo from '../img/tiendaLogo.svg'
import NavPages from './components/NavPages';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function NavBar({rutas}) {
    const {coffes} = useContext(ShopContext);

    return (
        <nav id="navBar" className="flex justify-between bg-navGrey text-white px-40px py-3.5">
            <section className='tittle'>
                <Link to="/" className='text-23.46'>cafedealtura.com</Link>
                <img src={cafeLogo} alt="simbolo cafe" />
            </section>
            {rutas?
            <section className='routes'>
                <NavPages routePage={"Tienda"} />
                <NavPages routePage={"Suscripción"} />
                <NavPages routePage={"paraEmpresas"} />
                <NavPages routePage={"sobreNosotros"} />
                <NavPages routePage={"contacto"} />
            </section>
            :
            <div className='w-[30rem]'></div>
            }
            <section className='phoneNumber'>
                <img src={tlfLogo} alt="Logo de teléfono" />
                <a href="tel:+34919490518">+34 919 49 05 18</a>
                <div>
                    <input type="button" value="Iniciar sesión" id="initSesion" className='bg-navBtnGrey px-24px py-12px rounded-4px'/>
                </div>
            </section>
            <section>
                <div>
                {coffes.length !==0?
                    <Link to="/Cesta">
                        <div className='flex gap-2'>
                            <input type="image" src={tiendaLogo} alt="Logo de la cesta" />
                            <p className='text-white text-14 bg-lightGrey/10 px-9px py-4px rounded-200px'>{coffes.length}</p>
                        </div>
                    </Link>:
                    <Link to="/Cesta">
                        <input type="image" src={tiendaLogo} alt="Logo de la cesta" />
                    </Link>
                }
                </div>
                <p id="cuentaProductos"></p>
            </section>
        </nav>
    )
}

export default NavBar;