import CheckLogo from '../img/CheckLogo.svg'
import camionLogo from '../img/camionLogo.svg'
import regaloLogo from '../img/regaloLogo.svg'
import BenefitBox from './components/BenefitsBox';

function Benefits() {

    return (
        <div id="Benefits" className='bg-cafeBg bg-cover bg-center px-142px py-48px text-center flex flex-col items-center gap-6'>
            <h2 className='text-white text-24 font-medium'>Café con las mejores condiciones</h2>
            <section className='flex gap-6'>
                <BenefitBox logo={CheckLogo} pos={0} />
                <BenefitBox logo={camionLogo} pos={1} />
                <BenefitBox logo={regaloLogo} pos={2} />
            </section>
        </div>
    )
}

export default Benefits;