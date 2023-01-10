
function BenefitBox({logo,pos}) {
    let tittle = "";
    let paragraph = "";
    let newClass = "";

    switch (pos) {
        case 0:
            tittle = "Recibe tu pedido sin preocuparte";
            paragraph = "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.";
            newClass = "flex flex-col gap-4 items-center bg-white p-24px rounded-8px w-316px";
            break;
        case 1:
            tittle = "Envío en 24/48h";
            paragraph = "Pide tu café antes de las 12h y lo recibirás al día siguiente.";
            newClass = "flex flex-col gap-4 items-center bg-white px-24px py-40px rounded-8px w-316px";
            break;
        case 2:
            tittle = "Descuentos y beneficios";
            paragraph = "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.";
            newClass = "flex flex-col gap-4 items-center bg-white p-24px rounded-8px w-316px";
            break;
    }
    return(
        <div className={newClass}>
            <div>
                <img src={logo} alt="logo check" className='bg-green px-20.33px py-17px rounded-20px'/>
            </div>
            <h3>{tittle}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default BenefitBox;