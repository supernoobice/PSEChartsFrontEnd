import React from 'react';
import {numberFormat, abbreviateNumber} from '../Utils/Utils';
import {Card} from 'react-bootstrap';

const searchresults = (props) => {

    let limit = props.stocks.slice(0, 10);

    let searchResults = limit.map((stock) => {

        const diff = stock.last - stock.previous;

        const change = (diff / stock.previous) * 100;

        const url = `/stock/${stock.symbol}`;

        return <div key={stock.id} className="row search py-1">
            <div className="col-md-2"><a href={url}>{stock.symbol}</a></div>
            <div className="col-md-5"><a href={url} className="text-dark">{stock.name}</a></div>
            <div className="col-md-3"><a href={url}><b className="text-dark">{numberFormat(stock.last)} <small>PHP</small></b> 
                <span className={change > 0 ? "text-success" : "text-danger"}> {numberFormat(diff)} ({numberFormat(change)}%)</span></a></div>
            <div className="col-md-2 text-muted">{abbreviateNumber(stock.value)} <small>PHP</small></div>
        </div>
    });

    


    return(
        <Card className="shadow-sm">
            <Card.Body>
            {searchResults}
            </Card.Body>
        </Card>
    );
}

export default searchresults;