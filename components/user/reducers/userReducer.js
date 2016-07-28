const initialState = {
	users: [
	// {
	// 	name: 'Роберt',
	// 	id: 1
	// },
	// {
	// 	name: 'Betty',
	// 	id: 2
	// }
	],
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

		default: {
			return state;
		}

	}
}