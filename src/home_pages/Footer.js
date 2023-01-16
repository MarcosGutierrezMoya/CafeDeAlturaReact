import cafeLogo from '../img/cafeLogo.svg'
import tlfLogo from '../img/tlfLogo.svg'
import mail from '../img/Mail.png'
import { Link } from 'react-router-dom';
import NavPages from './components/NavPages';

function Footer() {
    
    return(
        <footer className="bg-tittleBtnBlack text-white">
            <div className='px-40px pt-28.61px pb-37.73px'>
                <section className='flex flex-col gap-4 pr-67px'>
                    <div className='flex gap-2'>
                        <Link to={"/"} className='text-23.46'>cafedealtura.com</Link>
                        <img src={cafeLogo} alt="simbolo cafe" />
                    </div>
                    <div className='flex justify-between pr-76.67px'>
                        <aside className='flex flex-col gap-4'>
                            <p>Te ayudamos en</p>
                            <div className='flex bg-navBtnGrey px-24px py-12px rounded-4px w-fit gap-2'>
                                <img src={tlfLogo} alt="" />
                                <p>+34 919 49 05 18</p>
                            </div>
                            <div className='flex bg-navBtnGrey px-24px py-12px rounded-4px gap-2'>
                                <img src={mail} alt="" />
                                <p>hola@cafedealtura.com</p>
                            </div>
                        </aside>
                        <article className='flex justify-between gap-32'>
                            <section className='flex flex-col gap-4'>
                                <NavPages routePage={"Tienda"} />
                                <NavPages routePage={"Suscripción"} />
                                <NavPages routePage={"Para empresas"} />
                                <NavPages routePage={"Sobre nosotros"} />
                                <NavPages routePage={"contacto"} />
                            </section>
                            <section className='flex flex-col gap-4 pr-51px'>
                                <Link to="assets/pages/tienda.html">Política de privacidad</Link>
                                <Link to="assets/pages/Suscripción.html">Política de cookies</Link>
                                <Link to="assets/pages/paraEmpresas.html">Términos y condiciones</Link>
                            </section>
                        </article>
                    </div>
                </section>
            </div>
            <div className='text-center bg-navGrey py-12px'>
                <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
            </div>
        </footer>
    )
}

export default Footer;