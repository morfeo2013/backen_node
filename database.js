
/* CREA LA ACTIVACION DE MONGODB , LA ACTIVACIN DE EXPREXS Y MONGODB Y LA CREACION DE UNA BASE DE DATOS LLAMADA  /backend3*/

const mongoose=require('mongoose')
const URI = ('mongodb+srv://jose:trujillo@cluster0.mg3nl.mongodb.net/test' )/* nombre de la tabla clave para configurar robo3t*/
mongoose.connect(URI, {   /* al conectarse la tabla se genera ciertas propiedades como permitir un id index */
    useNewUrlParser: true,
    useUnifiedTopology: true,
   /*  useCreateIndex: true,
    useFindAndModify:false */
}).then(db => console.log('se establecio la conexion a la base de datos'))  /* si es correcto que muestre un mensage */
.catch(error=>console.log(error,'NO HAY conexion a la base de datos')  )
module.exports=mongoose /* exportar la base de datos para ser usada por el modelo.js */