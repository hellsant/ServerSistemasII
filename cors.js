function AllowCrossDomain() {
    this.permisos = function (req, res, next) {
        var dominios = [
            'localhost:4200',
            '*'
        ];
        var origen = req.headers.origin;
        if (dominios.indexOf(origen) >= -1) {
            res.header('Access-Control-Allow-Origin', origen);

        }
        res.header('Access-Control-Allow-Headers', 'Content-type');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        next();
    }
}
module.exports = new AllowCrossDomain();
