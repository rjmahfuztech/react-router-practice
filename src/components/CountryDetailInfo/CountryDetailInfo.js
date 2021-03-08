import React from 'react';
import { Card } from 'react-bootstrap';

const CountryDetailInfo = (props) => {
    const {name, nativeName, capital, region, subregion, flag} = props.info;
    return (
        <Card className="bg-dark text-white">
        <Card.Img src={flag} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Country Name: {name}</Card.Title>
          <Card.Title>Native Name: {nativeName}</Card.Title>
          <Card.Title>Capital: {capital}</Card.Title>
          <Card.Title>Region: {region}</Card.Title>
          <Card.Title>Sub-Region: {subregion}</Card.Title>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    );
};

export default CountryDetailInfo;