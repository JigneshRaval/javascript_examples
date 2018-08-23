var path = require('path'),
fs = require('fs');

fs.readFile('node-file.txt', function(err, buf) {
	console.log(buf.toString());
	
	fs.writeFile("test.txt", buf.toString(), function(err) {
		if(err) {
			console.log(err);
			} else {
			console.log("The file was saved!");
		}
	}); 
	
});


/*
	function ensureDirectoryExistence(filePath) {
	var dirname = path.dirname(filePath);
	if (fs.existsSync(dirname)) {
	return true;
	}
	ensureDirectoryExistence(dirname);
	fs.mkdirSync(dirname);
}*/