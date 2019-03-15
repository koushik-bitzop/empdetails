import React,{Component} from 'react';
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
// import FormModal from './components/FormModal'
import './Formstyle.css';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewEmp} from './actions';
//regex expressions for validation
const nameRegEx = /^[a-zA-Z]{3,20}$/;
const mobileRegEx = /^[6-9][0-9]{8}$/;//10 digit mobile no. 8 is hardcoded to get the o/p, it still checks for 9 characters
const emailRegEx = /^([a-z0-9.-]+)@([a-z0-9-]{3,30}).([a-z]{2,8})(.[a-z]{2,8})?$/i;
   	// userid/name	@ domainname 	.  extension    .anotherextension(optional)  case-insensitive
const cityRegEx = /^[a-zA-Z ]{4,35}$/;

let errorflag = {
    fnameFlag:"noerror",
    lnameFlag:"noerror",
    emailFlag:"noerror",
    mobileFlag:"noerror",
    cityFlag:"noerror",
}

class FormDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            city: '',
            // errors: "noerror"
        };
    
        // This binding is necessary to make `this` work in the callback
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleSubmit(){
        if(errorflag.fnameFlag === "noerror")
            if(errorflag.lnameFlag === "noerror")
                if(errorflag.emailFlag === "noerror")
                    if(errorflag.mobileFlag === "noerror")
                        if(errorflag.cityFlag === "noerror")
                        {
                            this.setState({errors:"noerror"});
                            let formdata = {
                                firstname: this.state.firstname,
                                lastname: this.state.lastname,
                                email: this.state.email,
                                mobile: this.state.mobile,
                                city: this.state.city
                            };
                            this.props.addNewEmp(formdata);
                            console.log("submitted",formdata);
                            this.setState({
                                firstname: '',
                                lastname: '',
                                email: '',
                                mobile: '',
                                city: '',
                                errors: "noerror"
                            }
                            );
                            console.log("this.state", this.state);
                            // return;
                        }
                        // else
                        // {
                        //     this.setState({errors:"error"});
                        //     console.log("errors");
                        // }

    }
    render(){
        // console.log("this.props",this.props);
        console.log("this.state", this.state);
        return(
            <div className="row">
                <div className="col-md-4 offset-md-4">
                {/* <FormModal/> */}
                <Form>
                    <h2 style={{"textAlign":"center", "marginTop":"20px"}}>Enter Employee Details</h2>
                    <hr/>
                    <FormGroup> 
                        <FormLabel>Firstname</FormLabel>
                        <FormControl
                            type="text"
                            name="firstname"
                            placeholder="Firstname"
                            onChange={e => {
                                this.setState({[e.target.name]:e.target.value});
                                if(!nameRegEx.test(this.state.firstname))
                                    errorflag.fnameFlag = "error";
                                else
                                    errorflag.fnameFlag = "noerror";
                            }}
                            value = {this.state.firstname}
                        />
                        <span className={errorflag.fnameFlag}>
                        <p >**strictly alphabet & should be atleast 3 and less than 20 char in length</p>
                        </span>
                    </FormGroup>
                
                    <FormGroup> 
                        <FormLabel>Lastname</FormLabel>
                        <FormControl
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                            onChange={e =>{
                                this.setState({[e.target.name]:e.target.value});
                                if(!nameRegEx.test(this.state.lastname))
                                    errorflag.lnameFlag = "error";
                                else
                                    errorflag.lnameFlag = "noerror";  
                            }}
                            value = {this.state.lastname}
                        />
                        <span className={errorflag.lnameFlag}>
                            <p >**strictly alphabet & should be atleast 3 and less than 20 char in length</p>
                        </span>
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            type="text"
                            name="email"
                            placeholder="Email"
                            onChange={e => {
                                this.setState({[e.target.name]:e.target.value});
                                if(!emailRegEx.test(this.state.email))
                                    errorflag.emailFlag = "error";
                                else
                                    errorflag.emailFlag = "noerror";
                            }}
                            value = {this.state.email}
                        />
                        <span className={errorflag.emailFlag}>
                            <p >**Invalid email address</p>
                        </span>
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>Mobile</FormLabel>
                        <FormControl
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                            onChange={e => {
                                this.setState({[e.target.name]:e.target.value});
                                if(!mobileRegEx.test(this.state.mobile))
                                    errorflag.mobileFlag = "error";
                                else
                                    errorflag.mobileFlag = "noerror";
                            }}
                            value = {this.state.mobile}
                        />
                        <span className={errorflag.mobileFlag}>
                            <p >**Invalid mobile number</p>
                        </span>
                    </FormGroup>

                    <FormGroup> 
                        <FormLabel>City</FormLabel>
                        <FormControl
                            type="text"
                            name="city"
                            placeholder="City/Village"
                            onChange={e => {
                                this.setState({[e.target.name]:e.target.value});
                                if(!cityRegEx.test(this.state.city))
                                    errorflag.cityFlag = "error";
                                else
                                    errorflag.cityFlag = "noerror";
                            }}
                            value = {this.state.city}
                        />
                        <span className={errorflag.cityFlag}>
                            <p >**strictly alphabet & should be less than 36 char in length</p>
                        </span>
                    </FormGroup>
                    
                    <Button disabled ={false} onClick={this.handleSubmit}>Submit</Button>
    
                </Form>
                </div>
            </div>       
        );
    }
}

function mapStateToProps(state){
    return {
        empdata: state.emplist
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({addNewEmp},dispatch)
}
export default connect (mapStateToProps, mapDispatchToProps)(FormDetails);