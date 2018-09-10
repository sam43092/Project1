const http = require('http');

http.createServer(function(request, response){
    response.writeHead(200);
    let html = "<html>"
        +"<head>"
            +"<meta charset='utf-8'>"
           +"<title>My Dog</title>"
        +"</head>"
        +"<body bgcolor='#A2539F'>"
        +"<p style='font-size: 28px' align='center'> Hello, this is your dog.</p><hr><br></br>"
        +"</br></br>"
        +"<p><b>Q:</b> Why are dogs like phones?<br></br>"
        +"<b>A:</b><i> Because they have collar IDs!</i></p>"
        +"<p><b>Q:</b> What do you get when you cross a sheepdog with a rose?<br></br>"
        +"<b>A:</b><i> A collie-flower!</i></p>"
        +"</body>"
        +"</html>";
    response.write(html);
    setTimeout(function(){
        response.write("Dog is done.");
        response.end();
    },5000);
    }).listen(8080);
console.log('Listening on port 8080...');
