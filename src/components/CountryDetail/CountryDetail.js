import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryDetailInfo from '../CountryDetailInfo/CountryDetailInfo';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryDetail, setCountryDetail] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryDetail(data))
    }, []);
    return (
        <div className="container">
            <h2>Here is Detail about {countryName}</h2>
            {
                countryDetail.map(info => <CountryDetailInfo key={info.alpha3Code} info = {info}></CountryDetailInfo>)
            }
        </div>
    );
};

export default CountryDetail;