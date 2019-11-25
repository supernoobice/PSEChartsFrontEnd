import React from 'react';
import Button from 'react-bootstrap/Button';

let timeframe = (props) => {

    return(
        <div className="row mt-3">
            <Button variant="link text-dark" onClick={() => props.myClickHandler(1)}>1 month</Button>
            <Button variant="link text-dark" onClick={() => props.myClickHandler(6)}>6 months</Button>
            <Button variant="link text-dark" onClick={() => props.myClickHandler('ytd')}>YTD</Button>
            <Button variant="link text-dark" onClick={() => props.myClickHandler(12)}>1 year</Button>
            <Button variant="link text-dark" onClick={() => props.myClickHandler(60)}>5 years</Button>
            <Button variant="link text-dark" onClick={() =>  props.myClickHandler('max')}>Max</Button>
        </div>
    );
}

export default timeframe;