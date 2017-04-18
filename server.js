let http = require("http");
let server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<meta charset='utf-8'>");
    response.write("<title>Nessus backend</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("4 ЦНИИ & ВА РСВСН");
    response.write("</body>");
    response.write("</html>");
    response.end();
});

server.listen(8888);
console.log("Server is listening");