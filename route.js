var bd = require('./query');
function http() {
    this.configurar = function (app) {
        app.get('/alumno/', function (solicitud, respuesta) {
            bd.seleccionar(respuesta);
        })
        app.get('/alumno/:id/', function (solicitud, respuesta) {
            bd.seleccionarId(solicitud.params.id, respuesta);
        })
        app.post('/alumno/', function (solicitud, respuesta) {
            bd.insertar(solicitud.body, respuesta);
        })
        app.put('/alumno/', function (solicitud, respuesta) {
            bd.actualizar(solicitud.body, respuesta);
        })
        app.delete('/alumno/:id/', function (solicitud, respuesta) {
            bd.borrar(solicitud.params.id, respuesta);
        })
        app.get('/curso/', function (solicitud, respuesta) {
            bd.seleccionarCurso(respuesta);
        })
        app.get('/profesor/', function (solicitud, respuesta) {
            bd.seleccionarProfesor(respuesta);
        })
    }
}
module.exports = new http();