import cafeLogo from '../img/cafeLogo.svg'
import tlfLogo from '../img/tlfLogo.svg'
import tiendaLogo from '../img/tiendaLogo.svg'
import PageRuote from './components/PageRoute';

function NavBar() {

    return (
        <nav id="navBar" className="bg-navGrey text-white px-40px py-3.5">
            <section className='tittle'>
                <a href="index.html" className='text-23.46'>cafedealtura.com</a>
                <img src={cafeLogo} alt="simbolo cafe" />
            </section>
            <section className='routes'>
                <PageRuote routePage={"Tienda"} />
                <PageRuote routePage={"Suscripción"} />
                <PageRuote routePage={"paraEmpresas"} />
                <PageRuote routePage={"sobreNosotros"} />
                <PageRuote routePage={"contacto"} />
            </section>
            <section className='phoneNumber'>
                <img src={tlfLogo} alt="Logo de teléfono" />
                <a href="tel:+34919490518">+34 919 49 05 18</a>
                <div>
                    <input type="button" value="Iniciar sesión" id="initSesion" className='bg-navBtnGrey px-24px py-12px rounded-4px'/>
                </div>
            </section>
            <section>
                <div>
                    <a href="./pages/cesta.html">
                        <input type="image" src={tiendaLogo} alt="Logo de la cesta" />
                    </a>
                </div>
                <p id="cuentaProductos"></p>
            </section>
        </nav>
    )
}

export default NavBar;