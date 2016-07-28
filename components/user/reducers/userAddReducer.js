const initialState = {
	name: 'Роберт'
};

export default function userAddReducer(state = initialState, action) {
	switch(action.type) {
		case 'HANDLE_ADD_USER': {
				return (
					console.log(this.props);
					console.log(this.state);
					
					)
		}

		case 'HANDLE_DELETE_USER': {
		}

		default: {
			return state;
		}

	}
}