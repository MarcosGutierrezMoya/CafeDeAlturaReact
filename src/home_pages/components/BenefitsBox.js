
function BenefitBox({logo,pos}) {
    let tittle = "";
    let paragraph = "";

    switch (pos) {
        case 0:
            tittle = "Recibe tu pedido sin preocuparte";
            paragraph = "Tienes cosas más importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana.";
            break;
        case 1:
            tittle = "Envío en 24/48h";
            paragraph = "Pide tu café antes de las 12h y lo recibirás al día siguiente.";
            break;
        case 2:
            tittle = "Descuentos y beneficios";
            paragraph = "Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.";
            break;
    }
    return(
        <div className="flex flex-col justify-center gap-4 items-center bg-white p-24px rounded-8px w-316px">
            <div>
                <img src={logo} alt="logo check" className='bg-green px-20.33px py-17px rounded-20px'/>
            </div>
            <h3>{tittle}</h3>
            <p>{paragraph}</p>
        </div>
    )
}

export default BenefitBox;