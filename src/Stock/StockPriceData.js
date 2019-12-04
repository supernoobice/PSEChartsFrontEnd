import React from 'react';
import './StockPriceData.css';
import {abbreviateNumber} from '../Utils/Utils';

const stockPricedata = (props) => {
    const borderstyle = ["table", "borderless"].join(" ");
    const tdstyle = ["text-right", "text-muted"].join(" ");



    return(
        <div className="row mt-4">
            <div className="col-md-3">
            <table className={borderstyle}>
                <tbody>
                <tr>
                    <td>Open</td>
                    <td className={tdstyle}>{props.data.open}</td>
                </tr>
                <tr>
                    <td>High</td>
                    <td className={tdstyle}>{props.data.high}</td>
                </tr>
                <tr>
                    <td>Low</td>
                    <td className={tdstyle}>{props.data.low}</td>
                </tr>
                <tr>
                    <td>Last</td>
                    <td className={tdstyle}>{props.data.last}</td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="col-md-3">
                <table className={borderstyle}>
                    <tbody>
                        <tr>
                            <td>Prev close</td>
                            <td className={tdstyle}>{props.data.previous}</td>
                        </tr>
                        <tr>
                            <td>52-wk high</td>
                            <td className={tdstyle}>{props.data.week52high}</td>
                        </tr>
                        <tr>
                            <td>52-wk low</td>
                            <td className={tdstyle}>{props.data.week52low}</td>
                        </tr>
                        <tr>
                            <td>Value</td>
                            <td className={tdstyle}>{abbreviateNumber(props.data.value)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-md-3">
                <table className={borderstyle}>
                    <tbody>
                        <tr>
                            <td>Mkt cap</td>
                            <td className={tdstyle}>{abbreviateNumber(props.data.market_cap)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default stockPricedata;