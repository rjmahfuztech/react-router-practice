import React from 'react';
import './Country.css';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const { name, region, flag } = props.country;

    const history = useHistory();
    const handleClick = (countryName) => {
        const url = `/country/${countryName}`;
        history.push(url);
    }

    return (
        <Card style={{ width: '18rem' }} className="m-2">
            <Card.Img variant="top" src={flag} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Region: {region}</Card.Title>
            <Button onClick={() => handleClick(name)} variant="primary">Go somewhere</Button>
            </Card.Body>
            {/* <Link to={`/country/${name}`}>Info</Link> */}
      </Card>


    );
};

export default Country;