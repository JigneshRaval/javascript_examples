let db;
let objectStore

self.onmessage = function(event) {
	switch(event.data) {
		case('init'): {
			var request = indexedDB.open('vips', 1);
			request.onupgradeneeded = function (e) {
				let db = e.target.result;
				objectStore = db.createObjectStore("name", { autoIncrement: true });
				self.postMessage('Successfully upgraded db');
			};
			request.onsuccess = function (e) {
				db = e.target.result;
			};
			request.onerror = function(e) {
				self.postMessage('error');
			}
		};
		break;
		
		case('readAll'): {
			readAll();
		};
		break;
		
		case('add'): {
			add();
		};
		break;
		
		case('clearDB'): {
			clearDB();
		};
		break;
	}
}


function readAll() {
	let objectStore = db.transaction("name").objectStore("name");
	let users = [];
	
	objectStore.openCursor().onsuccess = function(event) {
		let cursor = event.target.result;
		
		if (cursor) {
			users.push(cursor.value.name);
			cursor.continue();
		} 
		else {
			if(users && users.length > 0) {
				var userList = `
				<ul>
				${users.map(function(user) { 
				return '<li>' + user + '</li>';
				})}
				</ul>
				`
				self.postMessage('Every users: ' + userList);
				} else {
				self.postMessage('No users are available. click on add button to add new user.');
			}
			
		}
	};
}

function add() {
	var userNames = ["Hiren", "Jignesh", "Jayesh", "Manish", "Ritesh"];
	var randomNames = userNames[Math.floor(Math.random() * userNames.length)];
	
	let request = db.transaction(["name"], "readwrite")
	.objectStore("name")
	.add({ name: randomNames });
	
	request.onsuccess = function(event) {
		self.postMessage('Successfully added user in db');
	};
	
	request.onerror = function(event) {
		self.postMessage('something went wrong here');
	}
}

function clearDB() {
	// open a read/write db transaction, ready for clearing the data
	var transaction = db.transaction(["name"], "readwrite");
	// create an object store on the transaction
	var objectStore = transaction.objectStore("name");
	
	// clear all the data out of the object store
	var objectStoreRequest = objectStore.clear();
}