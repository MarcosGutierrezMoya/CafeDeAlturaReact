import { createContext, useState } from "react";

export const FormContext = createContext();

function FormContextProvider({children}) {
    const [user,setUser] = useState({});
    const [userName,setUserName] = useState("");
    const [mail,setMail] = useState("");
    const [phone,setPhone] = useState("");
    const [opinion,setOpinion] = useState("");
    const [politics,setPolitics] = useState(false);

    function submit() {
        
        setUser({ "name": userName, "email": mail, "Telephone": phone, "opinion": opinion })
        console.log(user);
    };
    
    const isBetween = (length, min, max) => length < min || length > max ? false : true;
    const isRequired = value => value === '' ? false : true;
    
    function isEmailValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    // const debounce = (fn, delay = 500) => {
    //     let timeoutId;
    //     return (...args) => {
    //         // cancel the previous timer
    //         if (timeoutId) {
    //             clearTimeout(timeoutId);
    //         }
    //         // setup a new timer
    //         timeoutId = setTimeout(() => {
    //             fn.apply(null, args)
    //         }, delay);
    //     };
    // };

    return(
        <FormContext.Provider value={{isBetween,isRequired,isEmailValid,setUserName,setMail,setPhone,setOpinion,setPolitics,submit}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;