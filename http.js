var http = require('http');
http.createServer(function(request,response){
 response.writehead(200,{"Content-Type":"text/plain"})
 response.write("Vibhor Jobs Bijoy");
}).listen(8888);
