var http = require("http");

function logMe(value){
console.log(value);
}

function runFunction(someFunction, value){
someFunction(value);

}

function onRequest(request, response) {
  runFunction(logMe," I am here"  );
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);