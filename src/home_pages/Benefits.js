import BenefitBox from './components/BenefitsBox';

function Benefits() {

    return (
        <div id="Benefits" className='bg-cafe bg-cover bg-center px-142px py-48px text-center flex flex-col items-center gap-6'>
            <h2 className='text-white text-24 font-medium'>Café con las mejores condiciones</h2>
            <section className='flex gap-6'>
                <BenefitBox logo={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/taskCard.png?alt=media&token=41ad89f8-9751-4483-8d55-3c91cf3c7f8e&_gl=1*1oujc1u*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjM5NDAuNjAuMC4w"} pos={0} />
                <BenefitBox logo={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/truckCard.png?alt=media&token=1c7f03e4-8c90-4a03-9d69-7a9915516403&_gl=1*ew0sn9*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjM5ODEuMTkuMC4w"} pos={1} />
                <BenefitBox logo={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/giftCard.png?alt=media&token=1b783e72-7b35-4dd4-8073-0fd7cb6cb05d&_gl=1*10b54i1*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjQwMDIuNjAuMC4w"} pos={2} />
            </section>
        </div>
    )
}

export default Benefits;