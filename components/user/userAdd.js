import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/userActions";

class UserAdd extends Component {  
     constructor(props){
         super(props);
    //     this.state = {
    //         name: ''
    //     }

         this.handleAddUser = this.handleAddUser.bind(this);
         this.handleChange = this.handleChange.bind(this);
     }
    
     handleAddUser() {        
        let {users, idCounter, name} = this.props.stateFromReducer;
        let user = {
            name: name,
            id: idCounter + 1
        }    
        users = [...users, user];    
          this.props.addUser({
            users,
            idCounter
        });     


    }

    handleChange(e) {
        this.props.changeName(e.target.value)
    }


    render() {
        console.log(this.props.stateFromReducer);
        return (
            <div className="user-add">            
                <h2 className="user-header">Add user</h2>
                
                <input ref="addInput" className="user-add-text control" onChange={this.handleChange} placeholder="Type name here"/>
                <button className="user-add-btn btn" type="button" onClick={this.handleAddUser}>Save user</button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    return {
        stateFromReducer: state
    };
}
const UserAddConnected = connect(mapStateToProps, mapDispatchToProps)(UserAdd);
export default UserAddConnected;


