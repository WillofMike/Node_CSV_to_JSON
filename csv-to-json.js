var fs = require('fs');
var _ = require('lodash');
var csvInput = process.argv[2];
var jsonOutput = process.argv[3];

var columns;
var rows;
var jsonResult = [];

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
// Push into our jsonResult Array
rows.forEach(function(row, index){
    var obj = _.zipObject(columns, rows[index]);
    jsonResult.push(obj);
});

// Reassign the array to a strinified version
jsonResult = JSON.stringify(jsonResult);

// Write the JSON to a new file as specified in the arguments
fs.writeFileSync(jsonOutput, jsonResult);