import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from "./actions/userActions";

class UserFilter extends Component {
    constructor(props){
     super(props);

     this.handleFilterUser = this.handleFilterUser.bind(this);
   }

   handleFilterUser(e) {
    this.props.changeFilterString(e.target.value)
    // let {users} = this.props.stateFromReducer; 
    // let str =  e.target.value;  

    // this.props.changeFilterString(
    //     users.filter( (el, i, arr) => {
    //         if (str.length > 0)
    //             return arr[i].name.startsWith(str)
    //         else
    //             return arr[i]
    //     })

    //     )
}


render() {
    //const { filteredUsers, filteredText } = this.props;

    return (
        <div className="filter-container">
        <input className="user-filter control" placeholder = 'Search' onChange={this.handleFilterUser} />
        </div>
        );
}
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
    //const { users, filterText } = state
    //let filtered = (!filterText) ? users: users.filter((el, i, arr) => arr[i].name.startsWith(filterText));
    return {
        stateFromReducer: state,
        //filteredUsers: filtered
    }
}
const UserFilerConnected = connect(mapStateToProps, mapDispatchToProps)(UserFilter);
export default UserFilerConnected;