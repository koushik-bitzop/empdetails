import React, {Component} from 'react';
import Header from './components/Header';
import Routes from './components/Routes';
import { BrowserRouter as Router} from 'react-router-dom';
class App extends Component{
    render(){
        return(
            <Router>
            <div className="EmpApp" >
                 <Header/>
                 <Routes />
                {/* <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <FormDetails />
                    </div>
                </div> */}
            </div>
            </Router>
        );
    }
}

export default App;