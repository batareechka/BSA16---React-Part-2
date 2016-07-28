// export function addUser(addParametrs) {
// 	const action = {
// 		type: ADD_USER,
// 		users: addParametrs.users,
// 		idCounter: addParametrs.idCounter
// 	};
// 	return action
// }

export function addUser(addParametrs) {
	console.log('addParametrs');
	console.log(addParametrs);
	console.log(addParametrs.users);
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

export function delUser(name) {
	const action = {
		type: 'DELETE_USER',
		users: users
	};
	return action;
}