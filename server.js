const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3000; // Puerto para el servidor

var jsonParser = bodyParser.json();

app.use(cors({
  origin: "*",
}));
app.use(jsonParser);


mongoose.connect("mongodb+srv://juan:kpQMZdUUB17y2ZTW@airbnb.rucxd9u.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true, // parse mongoDB connection string to URL
  useUnifiedTopology: true
}).then((res) => {
  console.log("connected")
}).catch((err) => {
  console.log("error")
  console.log(err)
});

// Definir un esquema para el modelo de usuario
const userSchema = {
  nombre: String,
  apellido: String,
  correo: String,
  pais: String,
};

// Definir el modelo de usuario basado en el esquema
const User = mongoose.model('User', userSchema);

app.post('/apiusuarios', async (req, res) => {
  try {
    const nuevoUsuario = new User({
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      correo: req.body.correo,
      contrasena: req.body.contrasena,
      pais: req.body.pais,
    });
    const value = await nuevoUsuario.save();
    res.status(200).send({
      "msg": "creado exitosamente",
      "data": value,
      "id": value._id,
    });
  } catch (error) {
    console.log(error);
  }

});

/*app.get('/documents/:username', async (req, res) => {
  const username = req.params.username;
  const value = await User.findOne({ username }, (error, document) => {
    if (error) {
      console.error("error: ", error);
      res.status(500).send({
        "msg": error,
      });
    }
    if (!document) {
      res.status(404).send({
        "msg": "Cant find document"
      });
    }
    const id = document._id;
    res.status(200).send({ "id": id });
  });
  res.status(200).send({
    "msg": "Lista de Posts: ",
    "data": value,
  });
});*/

app.post('/createUser', (req, res) => {
  const { email, password } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      res.status(200).send('Usuario creado exitosamente');
    })
    .catch(error => {
      res.status(500).send('Error al crear el usuario');
    });
});


// Iniciar el servidor
/*app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});*/

app.listen(3000);
