// https://api.openweathermap.org/data/2.5/weather?q=pune&appid=
// 48485a02a2067af724a3daba6b03ec68


import React, { useEffect, useState } from 'react'
import "./style.css"
import Weathercard from "./weathercard"

const Temp = () => {
    const [searchValue,setSearchValue]=useState("pune");
    const [tempInfo,setTempInfo] = useState({});
    const getWeatherInfo = async ()=>{
     try {
        //  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid= 915c1528d393261d812fa9061631f639`;
        // let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=
        // 48485a02a2067af724a3daba6b03ec68`;
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e80e72f1e5bf7a4a157c4b542421d64c`;
        const res= await fetch(url);  //getting data
         const data= await res.json();  //converting data into readable format
        const {temp,humidity,pressure} = data.main; 
        const {main:weathermood} =data.weather[0];
        const {name} =data;
        const {speed} =data.wind;
        const {country,sunset} = data.sys;
        const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset
        }
        setTempInfo(myNewWeatherInfo);
        } 
        catch (error) {
         console.log(error);
     }
    };

    useEffect(() => {
     getWeatherInfo();
    }, [ ])
    
    return (
        <>
            {/* for search button */}
            <div className='wrap'>
                <div className='search'>
                    <input type="search" placeholder='Search...' autoFocus id='search' className='searchTerm' 
                    value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} />
                    <button className='searchButton' type='button' onClick={getWeatherInfo}> Search</button>
                </div>
            </div>
            {/* for temperature card */}
            <Weathercard tempInfo ={tempInfo}/>
        </>
    )
}

export default Temp