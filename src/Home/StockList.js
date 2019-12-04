import React from "react";
import { Card } from "react-bootstrap";
import { abbreviateNumber, numberFormat } from "../Utils/Utils";

const stocklist = props => {
  let stock_arr = props.stocks.slice(0, 10);

  const list = stock_arr.map(stock => {
    return (
      <div key={stock.id} className="row pb-1">
        <div className="col-md-2">
          <a href={"/stock/" + stock.symbol}>{stock.symbol}</a>
        </div>
        <div className="col-md-6">
          <small>
            <a className="text-dark" href={"/stock/" + stock.symbol}>
              {stock.name}
            </a>
          </small>
        </div>
        <div className="col-md-2">
          <span className={stock.change > 0 ? "text-success" : "text-danger"}>
            {numberFormat(stock.change) + "% "}
          </span>
        </div>
        <div className="col-md-2">
          <small>{abbreviateNumber(stock.value)}</small>
        </div>
      </div>
    );
  });

  const header = (
    <div className="row text-muted">
      <div className="col-md-2">
        <small>Symbol</small>
      </div>
      <div className="col-md-6">
        <small>Company</small>
      </div>
      <div className="col-md-2">
        <small>Change </small>
      </div>
      <div className="col-md-2">
        <small>Value</small>
      </div>
    </div>
  );

  return (
    <Card className="mt-4">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {header}
        <div className="text-warning">{props.loading ? "Loading..." : ""}</div>
        {list}
      </Card.Body>
    </Card>
  );
};

export default stocklist;
