import React from 'react';

class ChartInit extends React.Component {

    render() {
        const numberFormat = (value) => {
            return parseFloat(value).toFixed(2);
        }

        const container = {
            position: 'relative'
        }
        const mystyle = {
            position: "absolute",
            top:  10,
            left: 0,
            //backgroundColor: 'rgba(128, 128, 128, 0.1)',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            zIndex: 999,
            padding: '0.2em 0.5em',
            borderRadius: '3px'
        }

        const styleColor = (this.props.tooltip > 0) ? "text-success" : "text-danger";
        const tooltip = (this.props.tooltip) ? <small style={mystyle}>{this.props.tooltipLabel} <span className={styleColor}>{numberFormat(this.props.tooltip)}%</span></small> : '';

        return (
            <div style={container}>
                <div id="chart" style={this.props.style}></div>
                {tooltip}
            </div>
        );
    }
}

export default ChartInit;