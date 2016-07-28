import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/userActions";

import UserItem from './userItem';
import UserAdd from './userAdd';
import './user.css'


class User extends Component {
     constructor() {
         super();
    //     this.state = {
    //         users: [],
    //         idCounter: 0
    //     };
        
         this.addUserParent = this.addUserParent.bind(this, name);
     }
    
     addUserParent(self, name) {

     }
    
    render() {
        return (            
            <div>
                <UserAdd/>        

                <div className="user-storage">
                    <h2 className="user-header">Users</h2>

                    <div className="user-list">
                     <UserItem />                       
                    </div>
                 </div>
            </div>

            //{

               // this.state.users.map(function(el, index) {
               //     return <UserItem key={index} user={el} delUser={this.delUser}></UserItem>;
               // }, this)
           //}
           //          </div>
           //      </div>
           // </div>
        )
    }
}

export default User;

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators(actions, dispatch);
// }

// function mapStateToProps(state) {
//     return {
//         stateFromReducer: state
//     };
// }
// const UserConnected = connect(mapStateToProps, mapDispatchToProps)(User);
// export default UserConnected;
