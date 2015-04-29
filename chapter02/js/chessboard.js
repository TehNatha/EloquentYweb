// Student Workspace
Chess.start = function () {
var output = "";
var black = "#";
var white = " ";
var size = 8;

for ( var m = 0; m < size; m++) {
	for( var c = 0; c < size; c++){
		if( (m+c) % 2 === 0){
			output += white;
		}
		else {
				output += black;
			}
		
	}
 output += '\n';
}
return output;


};