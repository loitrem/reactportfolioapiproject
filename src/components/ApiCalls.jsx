import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Main from './Main';
import apikeys from '../models/apikeys.js'


function ApiCalls() {

    //set use states - temp?
    let [weatherData, setWeatherData]=useState(null)
    let [gitHubData, setGitHubData]=useState(null)
    let [ipData, setIpData]=useState(null)
    let [locationData, setLocationData]=useState(null)

    //use context here - ?

    //api calls
    //github api
    const getGitHubData = async() => {
        let res = await axios.get('https://api.github.com/users/loitrem', {
                method: "GET",
                headers: {
                    'Authorization': apikeys.REACT_APP_GITHUB_API_KEY,
                }
            });
        setGitHubData(res.data);
    }

    //get ip address
    const getIpData = async() => {
        let res = await axios.get(`https://api.ipify.org?format=json`);
        setIpData(res.data.ip);
    }

    //location api
    const getLocationData = async() => {
        let res = await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${apikeys.REACT_APP_IP_KEY}&ip=${ipData}`);
        console.log('LOCATION RES = ',res.data);
        setLocationData(res.data);
    }

    //weather api
    const getWeatherData = async() => {
        let weatherSearch = null;
        
        if (ipData){
            weatherSearch = `http://api.weatherapi.com/v1/current.json?key=8b923b04d5a9435a9ab155803233107&q=${locationData.latitude,locationData.longitude}&aqi=no`;
        } else {
            weatherSearch = `http://api.weatherapi.com/v1/current.json?key=8b923b04d5a9435a9ab155803233107&q=Pittsburgh&aqi=no`;
        }
        let res = await axios.get(weatherSearch, {
                method: "GET",
                headers: {
                    'Authorization': apikeys.REACT_APP_WEATHER_API_KEY,
                }
            });
        setWeatherData(res.data);
    }

console.log(ipData);
    useEffect(()=>{

        getGitHubData()
        getWeatherData()
        getIpData()
        console.log(`DATA = `, ipData);
        if (ipData){
            console.log('GOT HERE');
            getLocationData()
        }

    },[ipData])
        //  loaded function for when data is fetched
        const loaded = () => {
            return (
                <div className='main'>
                    <Main weather={weatherData} github={gitHubData} ip={ipData}/>
                </div>
            );
            }
            // Function for when data doesn't exist
        const loading = () => {
            return <h1>Loading...</h1>;
        };
        
        // if coin has data, run the loaded function, otherwise, run loading
        return weatherData && gitHubData ? loaded() : loading();
}

export default ApiCalls