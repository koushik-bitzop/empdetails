import React, {Component} from 'react';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {delEmp} from '../actions';
import FormModal from './FormModal';

class EmpList extends Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    
    //     // This binding is necessary to make `this` work in the callback
    //     this.handleDelete = this.handleDelete.bind(this);
    //   }
    handleDelete(index){
        // let employee = this.props.empdata[index];
        // console.log("data at index:", employee);
        // this.props.delEmp(employee);
        this.props.delEmp(index);
    }
    handleEdit(index){
        console.log("@@@@@@@@",index);
    }
    render(){
        console.log("empdata",this.props.empdata);
        return(
            <div className="EmpApp"> 
                <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Employees List</h2>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Fist Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Mobile</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.empdata.map((emp, index) => {
                                    return(
                                        <tr key={index}>
                                                <td>{index}</td>
                                                <td>{emp.firstname}</td>
                                                <td>{emp.lastname}</td>
                                                <td>{emp.email}</td>
                                                <td>{emp.mobile}</td>
                                                <td>{emp.city}</td>
                                                <td>
                                                    <button 
                                                        type="button"
                                                        onClick={()=>this.handleEdit(index)}
                                                        className="btn btn-sm btn-primary">Edit
                                                    </button>
                                                    {" | "}
                                                    <button
                                                        type="button" 
                                                        onClick={()=>this.handleDelete(index)}
                                                        className="btn btn-sm btn-danger">Delete
                                                    </button>
                                                </td>
                                            </tr>
                                    )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
                <FormModal/>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('stateeee', state);
    return {
        empdata : state
    };
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({delEmp},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(EmpList);


