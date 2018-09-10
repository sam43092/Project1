const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    let html = "<html>"
        +"<head>"
        +"</head>"
        +"<body bgcolor='#D3D3D3'>"
        +"<title>My Dog</title>"
        +"<p> Hello, this is your dog, Max.</p>"
        +"<p><b>Q:</b> Why are dogs like phones?</br>"
        +" <b>A:</b> Because they have collar IDs!</p>"
        +"<p><b>Q:</b> What do you get when you cross a sheepdog with a rose?</br>"
        +"<b>A:</b> A collie-flower!"
        +"</body>"
        +"</html>";
    response.write(html);
    response.end();
    }).listen(8080);
console.log('Listening on port 8080...');
