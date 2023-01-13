import ShopZone from "../home_pages/components/CartZone";
import NavBar from "../home_pages/NavBar";

function Cart() {
    
    return(
        <div className="h-screen flex flex-col justify-between">
            <NavBar rutas={false} />
            <ShopZone />
            <div className='text-center text-white bg-navGrey py-12px'>
                <p>Todos los derechos reservados - Café de Altura SL - 2022</p>
            </div>
        </div>
    )
}

export default Cart;