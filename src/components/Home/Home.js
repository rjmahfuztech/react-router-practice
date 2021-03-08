import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [country, setCountry] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data));
    }, []);
    // console.log(country);
    return (
        <div>
            <h1>Total Country: {country.length}</h1>
            <div className="style text-center">
                {
                    country.map(country => <Country key={country.alpha2Code} country ={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;