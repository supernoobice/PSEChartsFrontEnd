import React from "react";
import "./App.css";
import axios from "axios"; // ajax
import { createChart } from "lightweight-charts"; // charts
import StockPriceData from "./Stock/StockPriceData"; // component
import { Helmet } from "react-helmet"; // title
import TimeFrame from "./Stock/TimeFrame";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ChartInit from "./Chart/ChartInit";
import Financials from "./Stock/Financials";
<<<<<<< HEAD
=======
import { InputGroup, FormControl } from 'react-bootstrap';
import SearchResults from './Home/SearchResults';
>>>>>>> Homepage

class App extends React.Component {
  state = {
    api: "http://localhost/",
    stock: {
      name: " ",
      symbol: "",
      change: 0.0,
      diff: 0.0,
      high: 0.0,
      id: 0,
      last: 0.0,
      low: 0.0,
      open: 0.0,
      previous: 0.0,
      updated_at: "",
      value: 0
    },
    chart: [],
    volume: [],
    timeframe: "",
    tooltip: "",
    tooltipLabel : '',
    fin_table : '',
<<<<<<< HEAD
    kr_table: ''
=======
    kr_table: '',
    searching : false,
    searchList : [],
    stocks : []
>>>>>>> Homepage
  };

  getChart() {
    var chart = createChart(document.querySelector("#chart"), {
      priceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.15
        },
        borderVisible: false
      },
      timeScale: {
        borderVisible: false
      },
      layout: {
        backgroundColor: "#ffffff",
        textColor: "#333",
        fontFamily: "sans-serif"
      },
      grid: {
        horzLines: {
          color: "#eee"
        },
        vertLines: {
          color: "#ffffff"
        }
      }
    });
    return chart;
  }

  getLineSeries(chart) {
    let lineSeries = chart.addAreaSeries({
      topColor: "rgba(0, 123, 255, 0.4)",
      bottomColor: "rgba(0, 123, 255, 0)",
      lineColor: "#007bff",
      lineWidth: 2
    });
    return lineSeries;
  }

  getVolumeSeries(chart) {
    let volumeSeries = chart.addHistogramSeries({
      color: "rgba(128, 128, 128, 0.2)",
      lineWidth: 1,
      priceFormat: {
        type: "volume"
      },
      overlay: true,
      scaleMargins: {
        top: 0.85,
        bottom: 0
      }
    });

    return volumeSeries;
  }

  componentDidMount() {
    let chart = this.getChart();
    let lineSeries = this.getLineSeries(chart);
    let volumeSeries = this.getVolumeSeries(chart);

    // get chart data
    axios
      .get(
        this.state.api +
          "stockhistorical.php?id=" +
          this.props.match.params.symbol
      )
      .then(res => {
        
        this.setState({ chart: res.data.chart_data });
        //console.log(res.data.chart_data);
        lineSeries.setData(this.state.chart);
      });

    // volume data
    axios
      .get(
        this.state.api +
          "api/stockVolume.php?id=" +
          this.props.match.params.symbol
      )
      .then(res => {
        this.setState({ volume: res.data });
        volumeSeries.setData(this.state.volume);
        //console.log(this.state);
      });

    // get stock
    axios
      .get(this.state.api + "stock.php?id=" + this.props.match.params.symbol)
      .then(res => {
        this.setState({ stock: res.data });
<<<<<<< HEAD
        //console.log(res.data);
=======
        console.log(res.data);
>>>>>>> Homepage
      });
    
    //  financials table
    axios.get(this.state.api + 'financials.php?data=financials&id=' + this.props.match.params.symbol).then(res => {
<<<<<<< HEAD
      console.log(res.data);
=======
      //console.log(res.data);
>>>>>>> Homepage
      this.setState({ fin_table : res.data });
    });

    // key ratios table
    axios.get(this.state.api + 'financials.php?data=kr&id=' + this.props.match.params.symbol).then(res => {
<<<<<<< HEAD
      console.log(res.data);
      this.setState({ kr_table : res.data });
    });
=======
      //console.log(res.data);
      this.setState({ kr_table : res.data });
    });

    // get all stocks
    axios.get(this.state.api + 'stocks.php').then(res => {
        this.setState({stocks : res.data});
    });
>>>>>>> Homepage
  }



<<<<<<< HEAD
=======
  /**
   * Search handler
   * @param {*} event 
   */
  searchHandler(event) {
    let query_string = event.target.value;
    //console.log("QUERY STRING" , query_string);

    if(!query_string) {
        this.setState({searching : false, searchList : []});
        return;
    }
    

    // search using regex for Symbol
    let matched_query = this.state.stocks.filter((stock) => {
    var reg1 = '[a-zA-Z0-9]*';
    var regex = new RegExp(query_string.toUpperCase() + reg1);
    return stock.symbol.match(regex);
    });

    // search for stock name
    let matched_query2 = this.state.stocks.filter((stock) => {
    var reg1 = '[a-zA-Z0-9]*';
    var regex = new RegExp(query_string.toUpperCase() + reg1);
    return stock.name.toUpperCase().match(regex);
    });

    //console.log("REGEX FOUND: ", matched_query);

    // combine the results
    let joined_results = matched_query.concat(matched_query2);
    
    // remove the duplicates
    let final_search_results = joined_results.filter( (item, index) => {
    return joined_results.indexOf(item) === index
    })

    
    // 3 levels deep of object works funky
    
    if(matched_query) {
    this.setState({
        searching : true,
        searchList : final_search_results});
    }
}




>>>>>>> Homepage
  /**
   * For x months timeframe chart data
   */
  clickHandler(months) {
    // console.log(months);
    document.querySelector("#chart").innerHTML = "";

    let chart = this.getChart();
    var lineSeries = this.getLineSeries(chart);
    var volumeSeries = this.getVolumeSeries(chart);

    // chart data
    axios
      .get(
        this.state.api +
          "stockhistorical.php?id=" +
          this.props.match.params.symbol +
          "&date=" +
          months
      )
      .then(res => {
        this.setState({ chart: res.data.chart_data, tooltip : res.data.returns, tooltipLabel : res.data.label });
        lineSeries.setData(this.state.chart);
        chart.timeScale().fitContent();
      });

    // volume data
    axios
      .get(
        this.state.api +
          "api/stockVolume.php?id=" +
          this.props.match.params.symbol +
          "&date=" +
          months
      )
      .then(res => {
        this.setState({ volume: res.data, timeframe: months });
        volumeSeries.setData(this.state.volume);
        //console.log(this.state);
      });

    // get stock
    axios
      .get(this.state.api + "stock.php?id=" + this.props.match.params.symbol)
      .then(res => {
        this.setState({ stock: res.data });
        // console.log(res.data);
      });

      
  }

  render() {
    const style = {
      height: "400px"
    };

    return (
      <div className="container">
        <Helmet>
          <title>
            {this.state.stock.symbol + " " + this.state.stock.name + " " + this.state.stock.change + "%"} PSECHARTS
          </title>
        </Helmet>
<<<<<<< HEAD
=======
        <div className="row mt-4">
            <div className="col-md-12">
            <InputGroup size="lg">
                <FormControl autoFocus value={this.state.searchQuery} onChange={ (e) => this.searchHandler(e)} className="shadow-sm" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for stocks..." />
            </InputGroup>
            {this.state.searching ? <SearchResults stocks={this.state.searchList} /> : '' }
            </div>
        </div>
>>>>>>> Homepage
        <div className="row mb-4">
          <div className="col-md-12">
            <div className="card mt-4">
              <div className="card-body">
                <div>
                  <h1 className="card-title h4 m-0">{this.state.stock.name}</h1>
                  <span className="text-muted">
                    PSE: {this.state.stock.symbol}
                  </span>
                </div>
                <h2 className="m-0 d-inline-block pr-1">
                  {this.state.stock.last}
                </h2>
                <span className="px-1">PHP</span>

                <span
                  className={
                    this.state.stock.diff > 0 ? "text-success" : "text-danger"
                  }
                >
                  {this.state.stock.diff} ({this.state.stock.change}%){" "}
                  <i
                    className={
                      this.state.stock.diff > 0
                        ? "fas fa-long-arrow-alt-up"
                        : "fas fa-long-arrow-alt-down"
                    }
                  ></i>
                </span>
                <div>
                  <small className="text-muted">
                    Last update: {this.state.stock.updated_at}
                  </small>
                </div>
                <TimeFrame
                  timeframe={this.state.timeframe}
                  myClickHandler={this.clickHandler.bind(this)}
                />
                <ChartInit
                  style={style}
                  symbol={this.props.match.params.symbol}
                  api={this.api}
                  tooltip={this.state.tooltip}
                  tooltipLabel={this.state.tooltipLabel}
                />
                <StockPriceData data={this.state.stock} />

                
                
                
              </div>
            </div>
            <Financials title="Financials" table={this.state.fin_table} />
            <Financials title="Key Ratios" table={this.state.kr_table} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
