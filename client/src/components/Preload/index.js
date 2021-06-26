import React from 'react';
import React, { Component } from 'react';
import Loader from './BarU/client/public/index.html';

class App extends Component {
    render() {
        <div>
        this <Loader/>
        </div>
    }
}
function ShowDetail() {
    return (
        <div className="loading screen">
            <i className="fa fa-cog fa-spin" />
        </div>
    )
}
export default App;
export default ShowDetail;