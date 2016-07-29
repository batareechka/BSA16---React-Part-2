import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/userActions";

class UserItem extends Component {  
    constructor(props){
        super(props);
        
        // this.state = {
        //     name: props.user.name,
        //     id: props.user.id
        // };
        
        this.handleDelUser = this.handleDelUser.bind(this);
    }
    
    handleDelUser(e) {
        let { users } = this.props.stateFromReducer;
        let id = e.target.getAttribute('data-id');

        users.forEach((item, i, arr) => {
            if(item.id == id) users.splice(i, 1);
        })
        this.props.delUser(users);
     
    }

    render() {

        const {users,filterText} = this.props.stateFromReducer; 
        let filteredUsers = (!filterText) ? users: users.filter((el, i, arr) => arr[i].name.startsWith(filterText)); 
        //const users = filteredUsers          
        return (
            (filteredUsers) ? <div>
            {filteredUsers.map( (filteredUsers, index) => {
                return <div key={filteredUsers.id} className="user-item">{filteredUsers.name}
                <button className="user-del-btn btn" data-id={filteredUsers.id} onClick={this.handleDelUser}>Delete</button>
                </div>
            })}
            
            </div> : null

            // <div className='user-item'>
            //     <span className="user-name">{users.name}</span>
            //     <span className="user-id">{users.id}</span>
            //     <button className="user-del-btn btn" onClick={this.handleDelUser}>Delete</button>
            // </div>


           )
    }
}

//export default UserItem

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    //const { users, filterText } = state
    //let filtered = (!filterText) ? users: users.filter((el, i, arr) => arr[i].name.startsWith(filterText));
    return {
        stateFromReducer: state
        //filteredUsers: filtered
    }
}
const UserItemConnected = connect(mapStateToProps, mapDispatchToProps)(UserItem);
export default UserItemConnected;


