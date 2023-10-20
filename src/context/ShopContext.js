import { createContext, useEffect, useState } from "react";
import { ApiCoffes } from "../ApiFiles/Api";

export const ShopContext = createContext();

function ShopContextProvider({children}) {
    const [coffes,setCoffes] = useState([]);
    const [allCoffes, setAllCoffes] = useState([]);

    const [totalCoffees, setTotalCoffees] = useState(0);
    const [coffePrice, setCoffePrice] = useState(0);
    const [sendPrice, seturgentSendPrice] = useState(0);

    useEffect(() => {
        ApiCoffes().then(response => setAllCoffes(response.products.sort((a, b) => {
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
            return 0;
          }).sort((a,b)=>a.available===true?-1:1)));
    }, []);
    useEffect(() => {
        setCoffes(JSON.parse(localStorage.getItem("coffees")));
    }, [totalCoffees]);

    function buyCoffe(newCoffee) {
        if (!coffes.find(coffe=> coffe.brand === newCoffee.brand)) {
            setCoffes([...coffes,{...newCoffee,__v:1}]);  
            setTotalCoffees(prev=>prev+1);
        }
        else{
            coffes[coffes.findIndex(coffe=> coffe.brand === newCoffee.brand)].__v += 1;
            localStorage.setItem("coffees",JSON.stringify(coffes));
            setTotalCoffees(prev=>prev+1)          
        }
    }


    return(
        <ShopContext.Provider value={{coffes,setCoffes,coffePrice, setCoffePrice,sendPrice, seturgentSendPrice, totalCoffees, setTotalCoffees, buyCoffe, allCoffes}}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;