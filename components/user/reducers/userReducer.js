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
			 console.log(action);
				return Object.assign({}, state, {
								users,
								idCounter: state.idCounter + 1
            })								
		}

		case 'DELETE_USER': {

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