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
    
    handleDelUser() {
        var id = this.props;
        console.log(id);
        console.log(this.state);
        
        // this.props.delUser(user);
    }

    render() {

        const { users } = this.props.stateFromReducer;            
        return (
            (users.length > 0) ? <div>
            {users.map( (users) => {
                return <div key={users.id} id={users.id} className="user-item"> {users.name}
                <button className="user-del-btn btn" onClick={this.handleDelUser}>Delete</button>
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
    return {
        stateFromReducer: state
    };
}
const UserItemConnected = connect(mapStateToProps, mapDispatchToProps)(UserItem);
export default UserItemConnected;


