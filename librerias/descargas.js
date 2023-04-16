const multer = require("multer"); /*ACTIVA EL MODULO PARA LAS IMAGENES */
const path = require("path"); /* desde exprexs para obtener la hubicacion */
const { v4: uuidv4 } = require("uuid"); /* llamada a lel generador de id */

/* se crea una funcion llamada stornge */
/* se crea la carpeta para guardar las fotos con la palabra reservada storange*/
const storage /* PALABRA RESERVADA "STORAGE" */ = multer.diskStorage({
destination: path.join(__dirname, "../contenedor"),

  /* AGREGAR LA EXTENCION */
filename: function (req, file, cb) {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
},
});

/* el codigo para guardar el archivo */

const upload = multer({
storage /* PALABRA RESERVADA  multer envia desde lo que recibio del frontent el archivo file al storange que es la carpeta*/,
});

/* se exporta */

module.exports = upload;
