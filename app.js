// const jerry="Uzair";
// const rana ="Mukarram";
// const lucifer="Zeeshan";
// // const sayHi=(name)=>{console.log(`Hello Mr. "${name}"`)};
// const names= require('./1-app')
// const sayHi= require('./2-app')
// console.log(names);
// console.log(sayHi);


// // sayHi("Salman");
// sayHi(names.jerry);
// sayHi(names.lucifer);
// // sayHi(rana)
// const path=require('path')
// console.log(path.sep);  //  \
// const filePath=path.join('content','subfolder','test.txt')
// console.log(filePath)      //content\subfolder\test.txt
// const base=path.basename(filePath);
// console.log(base);  //test.txt
// const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)   //C:\Users\Zeeshan\Desktop\FREE CODE CAMP\content\subfolder\test.txt


// const {readFileSync,writeFileSync} = require('fs');


// const first=readFileSync('./content/first.txt')
// const second=readFileSync('./content/subfolder/second.txt','utf-8');

// console.log(first,second);
// writeFileSync( `./content/subfolder/lucifer.txt`,`here is my collection of FIle one : ${first} and second file: ${second} `)

// console.log(prompt("Enter value or not"))
// let b

// for (let a = 0 ;a <b;a++)
// {
//     console.log(a)
// }
// const http=require('http')
// const server = http.createServe((req,res)=>{
//     res.write('Wellcome Lucifer');
//     res.end()
// });
// server.listen(3000)

const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>Hello Lucifer</h1>");
    }
    if(res.url==="/about"){
        res.end("Hello Jerry")
    }
    res.end(`<h1>OOPS!!!!!</h1>
            <p>This is OK</p>
            <a href="/">HOME PAGE</a>`)
})
server.listen(3000);









