
var fs = require('fs');

function readDir(dir, readFile, saveData) {

   fs.readdir(dir, function(err, fileName){
   
       for(var i=0; i<fileName.length; i++){

           file = dir + "/" + fileName[i];

           readFile(file, saveData);
       }
   });
};

      

exports.readDir = readDir;