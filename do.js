var xlsx = require('node-xlsx')
var fs = require('fs')
// Or var xlsx = require('node-xlsx').default;

// Parse a buffer
const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(`${__dirname}/maidian.xlsx`));

// Parse a file
// const workSheetsFromFile = xlsx.parse(`${__dirname}/myFile.xlsx`);

// 页面映射
var obj = {}
workSheetsFromBuffer[1].data.map((v,i)=>{
  let s1 = v[4].split('/')[4]
  var s2 = v[4].split('/')[5]+''
  var s2 = s2.replace(/\?.*/, '')
  obj['/'+s1+'/'+s2]  = {
    pageId: v[0],
    name:v[1],
    url: '/'+v[4].split('/').slice(4).join('/')
  } 
})
console.log(obj)

// 点击映射
var obj = {}
workSheetsFromBuffer[2].data.map((v, i) => {
  obj[v[1]] = {
    spm: v[0],
    belongTo: v[2],
    desc:v[5]
  }
})
// console.log(obj)
