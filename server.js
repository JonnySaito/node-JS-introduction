// console.log('Hello world');
// "console" means something different for a server (not like browser console!)
// "console" means the Terminal
// Can write normal js and it'll run in the Terminal
// for (var i = 0; i < 10; i++) {
//   console.log('hello world again');
// };
// helloFromFunction();
// console.log('hello after function');
// function helloFromFunction(){
//   setTimeout(function(){
//     console.log('hello from a function');
//   }, 3000)
//
// };
// We always list the required modules at the start of the node server file
const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello there. How is it going?');
  console.log('Your server is running on port 3000');
}).listen(3000);
