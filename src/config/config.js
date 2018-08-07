//puerto
process.env.PORT = process.env.PORT || 3000;

//BD
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//variable para poner la cadena de conexion a la BD
let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/mean-db-task';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.urlDB = urlDB;