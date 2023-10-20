import { Link } from 'react-router-dom';
import NavPages from './components/NavPages';

function Footer() {
    
    return(
        <footer className="bg-tittleBtnBlack text-white">
            <div className='px-40px pt-28.61px pb-37.73px'>
                <section className='flex flex-col gap-4 pr-67px'>
                    <div className='flex gap-2 items-center'>
                        <Link to={"/"} className='text-23.46'>cafedealtura.com</Link>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/cup.png?alt=media&token=8f86ac03-c85e-4487-885d-5ce1da5cf4d8&_gl=1*1v1oq2t*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjM0MzUuMTAuMC4w"} alt="simbolo cafe" />
                    </div>
                    <div className='flex justify-between pr-76.67px'>
                        <aside className='flex flex-col gap-4'>
                            <p>Te ayudamos en</p>
                            <div className='flex bg-navBtnGrey px-24px py-12px rounded-4px w-fit gap-2 items-center'>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/wPhone.png?alt=media&token=9a5885b5-3bb0-4f85-a48b-8f55406656c1&_gl=1*1gzpbvk*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjMzODcuNTguMC4w"} alt="" />
                                <p>+34 919 49 05 18</p>
                            </div>
                            <div className='flex bg-navBtnGrey px-24px py-12px rounded-4px gap-2 items-center'>
                                <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/whiteMail.png?alt=media&token=9d862f3d-8f0a-4399-a4ee-3b3931556fe8&_gl=1*1qr25w5*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzU2NTgwOS4xMi4xLjE2OTc1Njc1MDEuNjAuMC4w"} alt="" />
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