import React from 'react';
import './StockPriceData.css';

const stockPricedata = (props) => {
    const borderstyle = ["table", "borderless"].join(" ");


    return(
        <div className="row">
            <div className="col-md-3">
            <table className={borderstyle}>
                <tbody>
                <tr>
                    <td>Open</td>
                    <td className="text-right text-muted">{props.data.open}</td>
                </tr>
                <tr>
                    <td>High</td>
                    <td className="text-right text-muted">{props.data.high}</td>
                </tr>
                <tr>
                    <td>Low</td>
                    <td className="text-right text-muted">{props.data.low}</td>
                </tr>
                <tr>
                    <td>Last</td>
                    <td className="text-right text-muted">{props.data.last}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default stockPricedata;