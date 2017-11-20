var conexion = require('./connection');
function MetodosBD() {
    this.seleccionar = function (respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from alumnos', function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }
    this.seleccionarId = function (id, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from alumnos where id=?', function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }
    this.insertar = function (datos, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('insert into alumnos set ?', datos, function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'ok' });
                }
            })
        })

    }
    this.actualizar = function (datos, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('update alumnos set ? where id = ?', [datos, datos, id], function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'ok' });
                }
            })
        })
    }
    this.borrar = function (id, respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('delete from alumnos where id = ?', id, function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'ok' });
                }
            })
        })
    }
}
    module.exports = new MetodosBD();