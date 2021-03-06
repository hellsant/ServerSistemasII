var conexion = require('./connection');
function MetodosBD() {
    this.seleccionar = function (respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from colegio.alumno', function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }
    this.seleccionarCurso = function (respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from colegio.curso', function (error, resultado) {
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
            cn.query('select * from colegio.alumnos where id=?', id, function (error, resultado) {
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
            cn.query('insert into colegio.alumno set ?', datos, function (error, resultado) {
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
            cn.query('update colegio.alumnos set ? where id = ?', [datos, datos, id], function (error, resultado) {
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
            cn.query('delete from colegio.alumnos where id = ?', id, function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send({ estado: 'ok' });
                }
            })
        })
    }
    this.seleccionarProfesor = function (respuesta) {
        conexion.obtener(function (er, cn) {
            cn.query('select * from colegio.profesor', function (error, resultado) {
                cn.release();
                if (error) {
                    respuesta.send({ estado: 'Error' });
                } else {
                    respuesta.send(resultado);
                }
            })
        })
    }
    this.insertarProfesor = function (datos, respuesta) {
        conexion.obtener(function (er, cn) {    
            cn.query('insert into colegio.profesor set ?', datos, function (error, resultado) {
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