//cargando el modulo http
var http = require ('http');
// cargando colores
var colors = require ('colors');
//generando un tema
colors.setTheme({
    silly:'rainbow',
    input:'grey',
    verbose :'cyan',
    prompt : 'grey',
    info :'green',
    data:'grey',
    help:'cyan',
    warn : ['yellow','bgwhite'],
    debug: 'blue',
    error:'red',
})
//obteniendo configuraciones
var config = require('./config/config');

var IP= config.IP;
var PORT=config.PORT;
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
server.listen(PORT,IP,function(){
    console.log(">Server esuchando en ".info +
    `http://${IP}:${PORT}/ ...`.info);
});