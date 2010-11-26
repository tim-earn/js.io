var sys = require('sys'),
	jsioPath = './jsio';

require(jsioPath + '/jsio');

// reset the current directory so we can load the compiler when 
// this script is run from a different directory
var pathStat = jsio.__util.splitPath(__filename),
	path = jsio.__util.makeRelativePath(pathStat.directory, process.cwd());

jsio.path.add(path);
var compiler = jsio('import compiler');
jsio.path.remove(path);

compiler.start();