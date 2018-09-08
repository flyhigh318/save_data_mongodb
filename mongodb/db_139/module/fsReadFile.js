
var fs = require('fs');
var readline = require('readline');

function readFile(fileName, save) {

   var rl = readline.createInterface({
      input: fs.createReadStream(fileName)  // absolute path
   });

   var reg = /^20[1-2][0-9]/;
   rl.on('line', (line) => {
   	var rs = reg.exec(line);
   	if(rs){
   		//console.log('Line from file:', line);
   		var monitor_line_data_tmp = new Array();
   		var monitor_line_data = new Array();
   		monitor_line_data_tmp = line.split(/\s+/);
   		monitor_line_data[0] = monitor_line_data_tmp[0] + " "  + monitor_line_data_tmp[1];
   		for(var n=1; n<=6; n++) {
   			monitor_line_data[n] = monitor_line_data_tmp[n+1];
   		}
         save(monitor_line_data);                        
   	}
   });
};

exports.readFile = readFile;


      

