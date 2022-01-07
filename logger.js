//los middlewares se invocan antes de llamar a las funciones ruta

function log(request,response,next){
    console.log("Entrando en el middleware ...")
    next();
}

module.exports = log;