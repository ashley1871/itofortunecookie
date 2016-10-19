//cargando el modulo http
var http = require ('http');
//creando el server
var server = http.createServer(function(req,res){
    res.writeHead(
        200,
        {
            'Content-Type':'text/plain',
            'server':'buho.0.0'
        }
    )
    res.write('Hola desde el server...');
    res.end();

});
//poniendo a escuchar al server
server.listen(3000,'127.0.0.1',function(){
    console.log(">Server esuchando en "+
    "http://127.0.0.1:3000/ ...");
});