const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    let html = "<html>"
        +"<head>"
        +"</head>"
        +"<body>"
        +"<title>My Dog</title>"
        +"<p> Hello, this is your dog, Max.</p>"
        +"<p><b>Please feed me!</p>"
        +"</body>"
        +"</html>";
    response.write(html);
    response.end();
    }).listen(8080);
console.log('Listening on port 8080...');
