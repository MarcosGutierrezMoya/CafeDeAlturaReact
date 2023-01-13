import tlfLogoGris from '../img/tlfLogoGris.svg';
import mailLogoGris from '../img/mailLogoGris.svg';
// import FormBox from './components/FormBox';
import FormUser from './components/Form/FormUser';
import FormMail from './components/Form/FormMail';
import FormPhone from './components/Form/FormPhone';
import FormOpinion from './components/Form/FormOpinion';
import FormPolitics from './components/Form/FormPolitics';
import FormSubmit from './components/Form/FormSubmit';
import { useContext } from "react";
import { FormContext } from "../context/FormContext";

function Form() {
    const {submit} = useContext(FormContext);

    function makeSubmit(e) {
        e.preventDefault();
        submit();
    }

    return (
        <section id="formPage" className='flex bg-homeFormBg pr-40px'>
            <article className='py-116px pl-40px pr-24px'>
                <div className='flex flex-col gap-8'>
                    <header className='flex flex-col gap-3'>
                        <h3 className='text-formInfoBold font-semibold'>Entra en contacto con nosotros</h3>
                        <p className='text-formInfoLetters'>Si tienes dudas, ponte en contacto con nosotros a través del formulario y te responderemos lo antes posible.</p>
                    </header>
                    <main className='text-formInfoLetters flex flex-col gap-6'>
                        <p>También puedes ponerte en contacto con nostros en nuestra dirección o a través del teléfono de la tienda.</p>
                        <p>742 Evergreen Terrace<br />Springfield, OR 12345</p>
                        <div className='flex flex-col gap-3'>
                            <p className='flex gap-3'><img src={tlfLogoGris} alt="telefoncito" /> +1 (555) 123-4567</p>
                            <p className='flex gap-3'><img src={mailLogoGris} alt="logo correo" /> support@example.com</p>
                        </div>
                        <p className='flex gap-1.5'>
                            ¿Buscas un trabajo?
                            <a className='text-formInfoBold font-semibold underline cursor-pointer'>Ver nuestras ofertas.</a>
                        </p>
                    </main>
                </div>
            </article>
            <aside className='bg-white w-588 py-32px pl-67px pr-48px'>
                <form onSubmit={makeSubmit} id="submit" className='flex flex-col gap-6'>
                    <FormUser text={"Nombre Completo"} />
                    <FormMail />
                    <FormPhone hasLands={true} />
                    <FormOpinion />
                    <FormPolitics />
                    <FormSubmit />
                </form>
            </aside>
        </section>
    )
}

export default Form;