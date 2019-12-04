import React from 'react';
import { Card } from 'react-bootstrap';

const financials = (props) => {
    return(
        <Card className="mt-2">
            <Card.Body>
            <h5>{props.title}</h5>
            <div className="table table-responsive" dangerouslySetInnerHTML={{__html: props.table}} />
            </Card.Body>
        </Card>
    );
}

export default financials;