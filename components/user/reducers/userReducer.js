const initialState = {
	users: [],
 	idCounter: 0,
 	name: ''
};

export default function userReducer(state = initialState, action) {
	switch(action.type) {		

		case 'ADD_USER': {
			 const {users, idCounter} = action;
				return Object.assign({}, state, {
								users,
								idCounter: state.idCounter + 1,
								name: ''
            })								
		}

		case 'DELETE_USER': {
				const { users } = action;
			return Object.assign({}, state, {
								users
            })	
		}

		case 'CHANGE_NAME': {
			const {name} = action
				return Object.assign({}, state, {
								name: name
            })								
			}		

			case 'FILTER': {
			const {users} = action
				return Object.assign({}, state, {
								//filter: filter,
								users: users
            })								
			}

		default: {
			return state;
		}

	}
}