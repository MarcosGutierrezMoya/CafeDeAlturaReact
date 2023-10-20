// import plantaCafe from '../img/Planta-de-café.jpg'

function Title() {

    return (
        <header id="head" className='bg-homeTittleBg px-40px py-48px w-100%'>
            <section>
                <div id="secTittle" className='flex gap-6 justify-center'>
                    <article className='flex flex-col items-start gap-4 w-588'>
                        <h3 className='text-green text-18 font-semibold drop-shadow-letters'>De la planta a tu taza</h3>
                        <h1 className='text-black text-40 font-semibold drop-shadow-letters'>El mejor café del mundo, ahora en tu casa.</h1>
                        <p className='text-14 font-normal drop-shadow-letters'>Trabajamos con agricultores de todo el mundo para seleccionar los mejores granos de café y que puedas viajar desde la comodidad de tu hogar.</p>
                        <div className='text-white flex flex-row gap-4 text-14'>
                            <input type="button" value="Descubrir Orígenes" className='bg-tittleBtnBlack basis-1/5 px-24px py-12px rounded-4px drop-shadow-buttons cursor-pointer'/>
                            <input type="button" value="Comprar café" className='bg-green basis-1/5 px-24px py-12px rounded-4px drop-shadow-buttons cursor-pointer'/>
                        </div>
                    </article>
                    <aside className='drop-shadow-images'>
                        <img src={"https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/mainSection.jpg?alt=media&token=84ad7509-fae9-4af4-91ea-d3402f76a055&_gl=1*1hvcgx4*_ga*MTI3MTkxMDI0MS4xNjg1MzU3Mzg4*_ga_CW55HF8NVT*MTY5NzQ2MTQzMS4xMS4xLjE2OTc0NjM1ODYuNjAuMC4w"} alt="Planta de café" id="imgPlantaCafe" className='w-588 rounded-20px drop-shadow-2xl'/>
                    </aside>
                </div>
            </section>
        </header>
    )
}

export default Title;