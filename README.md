# Node CLI Tool: CSV to JSON Converter

### This Project is designed to Convert CSV (Comma Separated Values) files into a JSON (Javascript Object Notation) files.  

1. Fork and clone this project

2. Now npm install for all the of the dependencies.

3. You will want to be specific with the path of the file your looking to convert from.
- Example: The CSV file I'm wanting to convert is /Users/macbook/downloads/csv/testFile.csv
    - You want to be specific with the path otherwise you will get an error


### What not do do (be specific)
- ![alt text](https://github.com/WillofMike/markdown/blob/master/images/Screen%20Shot%202018-01-15%20at%2010.51.30%20AM.png "What not to do!")

- You will also want to make sure that your specific with the file that is be written in the conversion.  


### The ideal way (notice the full paths of the file and the file that it's converting too)
- ![alt text](https://github.com/WillofMike/markdown/blob/master/images/Screen%20Shot%202018-01-15%20at%201.07.55%20PM.png?raw=true "The ideal way")

- Notice that the full paths are written out:
  - File to be converted: /Users/macbook/downloads/csv/testFile.csv
  - The file that is has been converted: /Users/macbook/downloads/csv/testFile.json

    Run the script:
    ```
    $ node csv-to-json.js <yourfile.csv> <filetowrite.json>
    ```

  - Following these directions will convert any .csv file to a .json file.

- If you need to convert back into a .csv you can either access your old file or
  - [Here is an npm package](https://www.npmjs.com/package/json2csv) to convert you back

### Admin
- [Adam Smith](https://github.com/adamtysonsmith)

### Contributors
- [Mike Williams](https://github.com/WillofMike)
