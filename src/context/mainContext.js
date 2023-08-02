import React, { useState, createContext, useEffect } from "react";

//create and export global state management
export const AppContext=createContext();

console.log('mainContext');
    // create react functional component
    const AppContextProvider = (props) => {

    //sets the userState (creating state)
    const [weatherData, setWeatherData] = useState(null);
    const [githubData, setGithubData] = useState('');
    const [ip, setIP] = useState('');
    // const [product, setProduct]=useState(1);
    // const [productNum, setProductNum]=useState(1);
    // const [categories, setCategories]=useState('');

    return (
            //gives state access to entire app
            <AppContext.Provider value={{
                // add the use states to the provider
                weatherData,
                setWeatherData,

                githubData,
                setGithubData,

                ip,
                setIP

            }}> 
        {props.children}
        </AppContext.Provider>
        )
    }
    


export default AppContextProvider