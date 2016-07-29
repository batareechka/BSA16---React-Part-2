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
}


render() {
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
    return {
        stateFromReducer: state,
    }
}
const UserFilerConnected = connect(mapStateToProps, mapDispatchToProps)(UserFilter);
export default UserFilerConnected;