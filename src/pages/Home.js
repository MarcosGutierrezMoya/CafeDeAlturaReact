import Benefits from '../home_pages/Benefits';
import CoffeBags from '../home_pages/CoffeBags';
import Faq from '../home_pages/Faq';
import Footer from '../home_pages/Footer';
import Form from '../home_pages/Form';
import Info from '../home_pages/Info';
import NavBar from '../home_pages/NavBar';
import Title from '../home_pages/Title';

function Home() {

    return(
        <div className='w-[100%]'>
            <NavBar rutas={true} />
            <Title />
            <Benefits />
            <CoffeBags cuantity={4} />
            <Faq />
            <Info />
            <Form />
            <Footer />
        </div>
    )
}

export default Home;