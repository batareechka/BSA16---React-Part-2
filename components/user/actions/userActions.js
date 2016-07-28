export function addUser(addParametrs) {
	const action = {
		type: 'ADD_USER',		
		users: addParametrs.users,
		idCounter: addParametrs.idCounter
	};
	return action;
} 

export function changeName(name) {
	const action = {
		type: 'CHANGE_NAME',
		name: name
	};
	return action;
}

export function delUser(users) {
	const action = {
		type: 'DELETE_USER',
		users: users
	};
	return action;
}

export function searchUser(users) {
	console.log('idIn='+ id);
	const action = {
		type: 'SEARCH_USER',
		users: users
	};
	return action;
}