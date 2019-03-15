import React,{Component} from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import FormDetails from '../FormDetails';
import EmpList from './EmpList';

class Routes extends Component {
    render() { 
        return (  
            
                <Switch>
                    <Route path={'/'} exact component={FormDetails} ></Route>
                    <Route path={'/viewlist'} exact component={EmpList}></Route>
                </Switch>
            
        );
    }
}
 
export default Routes;