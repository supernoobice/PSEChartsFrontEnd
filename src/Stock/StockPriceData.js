import React from 'react';
import './StockPriceData.css';

const stockPricedata = (props) => {
    const borderstyle = ["table", "borderless"].join(" ");
    const tdstyle = ["text-right", "text-muted"].join(" ");

    

    var SI_SYMBOL = ["", "k", "M", "B", "T", "P", "E"];

    function abbreviateNumber(number){

        // what tier? (determines SI symbol)
        var tier = Math.log10(number) / 3 | 0;

        // if zero, we don't need a suffix
        if(tier == 0) return number;

        // get suffix and determine scale
        var suffix = SI_SYMBOL[tier];
        var scale = Math.pow(10, tier * 3);

        // scale the number
        var scaled = number / scale;

        // format number and add suffix
        return scaled.toFixed(1) + suffix;
    }

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