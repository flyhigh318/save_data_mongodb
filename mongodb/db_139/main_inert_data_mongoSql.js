
var fsReadDir = require('./module/fsReadDir');
var fsReadFile = require('./module/fsReadFile');
var saveData = require('./module/saveData');

var dir = "/tmp/testdata";

fsReadDir.readDir(dir, fsReadFile.readFile, saveData.save);



      

