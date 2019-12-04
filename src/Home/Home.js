import React from 'react';
import axios from 'axios';
import StockList from './StockList';
import {InputGroup, FormControl} from 'react-bootstrap';
import SearchResults from './SearchResults';
import {Helmet} from 'react-helmet';

class Home extends React.Component {
    state = {
        api: "http://localhost/",
        gainers: [],
        losers: [],
        active : [],
        searching : false,
        searchList : [],
        stocks : []
    }

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

    componentDidMount() {
        // get gainers and losers
        axios.get(this.state.api + 'api/gainersLosers.php')
        .then(res => {
            this.setState({gainers: res.data.gainers, losers: res.data.losers, active: res.data.active}, () => {console.log(this.state)});
        });

        // get all stocks
        axios.get(this.state.api + 'stocks.php').then(res => {
            this.setState({stocks : res.data});
        });
    }


    render () {

        return (<div>
            <Helmet>
            <title>
                PSECHARTS
            </title>
            </Helmet>
            <div className="container mb-4">
                <div className="row mt-4">
                    <div className="col-md-12">
                    <InputGroup size="lg">
                        <FormControl autoFocus value={this.state.searchQuery} onChange={ (e) => this.searchHandler(e)} className="shadow-sm" aria-label="Large" aria-describedby="inputGroup-sizing-sm" placeholder="Search for stocks..." />
                    </InputGroup>
                    {this.state.searching ? <SearchResults stocks={this.state.searchList} /> : '' }
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <StockList title="Top Gainers" stocks={this.state.gainers} />
                    </div>
                    <div className="col-md-6">
                    <StockList title="Top Losers" stocks={this.state.losers} />
                    </div>
                    <div className="col-md-6">
                    <StockList title="Most Active" stocks={this.state.active} />
                    </div>
                </div>
            </div>
            
            
        </div>);
    }
}

export default Home;