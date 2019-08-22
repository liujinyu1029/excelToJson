var excelParser = require('excel-parser');
var path = require('path')
var infilePah = path.resolve('./demo.xlsx')
console.log(infilePah)
excelParser.worksheets({
  inFile: infilePah
}, function (err, worksheets) {
  if (err) console.error(11,err)
    console.log(worksheets);
})