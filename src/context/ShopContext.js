import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

function ShopContextProvider({children}) {
    const [coffes,setCoffes] = useState([]);
    const [coffePrice, setCoffePrice] = useState(0);
    const [sendPrice, seturgentSendPrice] = useState(0);

    useEffect(()=>{
        if (coffes.length !== 0) {
            console.log(coffes);
        }
    },[coffes]);

    return(
        <ShopContext.Provider value={{coffes,setCoffes,coffePrice, setCoffePrice,sendPrice, seturgentSendPrice}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;