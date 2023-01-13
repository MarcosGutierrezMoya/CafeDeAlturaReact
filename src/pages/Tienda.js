import Benefits from "../home_pages/Benefits";
import CoffeBags from "../home_pages/CoffeBags";
import Footer from "../home_pages/Footer";
import NavBar from "../home_pages/NavBar";

function Shop() {
    
    return(
        <div>
            <NavBar rutas={true} />
            <CoffeBags cuantity={8} />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Shop;