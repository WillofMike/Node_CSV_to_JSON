var fs = require('fs');
var _ = require('lodash');
var csvInput = process.argv[2];

var columns;
var rows;

// Read the first line of the csv
var getColumns = function(input) {
    var firstLine = fs.readFileSync(input).toString().split('\n');
    columns = firstLine[0].split(',');
}

// Store each row in an array
var getRows = function(input) {
    var lines = fs.readFileSync(input).toString().split('\n');
    lines.shift(); // Remove the first line
    //lines[0].split(',');

    for (var i = 0; i < lines.length; i++) {
        lines[i] = lines[i].split(',');
    }
    
    rows = lines;
}

getColumns(csvInput);
getRows(csvInput);


// Create a array of objects with the columns as keys and the rows as values
var objectify = function() {
    var result = rows.forEach(function(row, index){
        _.zipObject(columns, rows[index]);
    });
    
    return result;
}

console.log(objectify());


//{
//    column1: 'Some Value',
//    column2: 'Another Value'
//}
