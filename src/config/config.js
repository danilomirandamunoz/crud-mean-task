//puerto
process.env.PORT = process.env.PORT || 3000;

//BD
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//variable para poner la cadena de conexion a la BD
let urlDB;

if (process.env.NODE_ENV == 'devd') {
    urlDB = 'mongodb://localhost:27017/mean-db-task';
} else {
    urlDB = "mongodb://dmirandam-a123456:a123456@ds115472.mlab.com:15472/crud-mean-dmirandam";
}

process.env.urlDB = urlDB;