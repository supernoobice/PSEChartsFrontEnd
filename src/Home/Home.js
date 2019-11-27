import React from 'react';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
    render () {
        return <Redirect to="/stock/JFC" />
    }
}

export default Home;