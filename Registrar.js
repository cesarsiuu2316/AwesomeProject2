import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'; // Importar el paquete axios para hacer solicitudes HTTP
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './config';


const Registrar = () => {
  const navigation = useNavigation();
  const auth = getAuth();
  const [selectedCountry, setSelectedCountry] = useState('');
  const [nombre, setNombre] = useState(''); // Agrega estado para el nombre
  const [apellido, setApellido] = useState(''); // Agrega estado para el apellido
  const [correo, setCorreo] = useState(''); // Estado para el correo
  const [contrasena, setContrasena] = useState(''); // Estado para la contraseña
  const [idUser, setIdUser] = useState('');
  const countries = [
    { id: 1, name: 'Afghanistan' },
    { id: 2, name: 'Albania' },
    { id: 3, name: 'Algeria' },
    { id: 4, name: 'Andorra' },
    { id: 5, name: 'Angola' },
    { id: 6, name: 'Antigua and Barbuda' },
    { id: 7, name: 'Argentina' },
    { id: 8, name: 'Armenia' },
    { id: 9, name: 'Australia' },
    { id: 10, name: 'Austria' },
    { id: 11, name: 'Azerbaijan' },
    { id: 12, name: 'Bahamas' },
    { id: 13, name: 'Bahrain' },
    { id: 14, name: 'Bangladesh' },
    { id: 15, name: 'Barbados' },
    { id: 16, name: 'Belarus' },
    { id: 17, name: 'Belgium' },
    { id: 18, name: 'Belize' },
    { id: 19, name: 'Benin' },
    { id: 20, name: 'Bhutan' },
    { id: 21, name: 'Bolivia' },
    { id: 22, name: 'Bosnia and Herzegovina' },
    { id: 23, name: 'Botswana' },
    { id: 24, name: 'Brazil' },
    { id: 25, name: 'Brunei' },
    { id: 26, name: 'Bulgaria' },
    { id: 27, name: 'Burkina Faso' },
    { id: 28, name: 'Burundi' },
    { id: 29, name: 'Cabo Verde' },
    { id: 30, name: 'Cambodia' },
    { id: 31, name: 'Cameroon' },
    { id: 32, name: 'Canada' },
    { id: 33, name: 'Central African Republic' },
    { id: 34, name: 'Chad' },
    { id: 35, name: 'Chile' },
    { id: 36, name: 'China' },
    { id: 37, name: 'Colombia' },
    { id: 38, name: 'Comoros' },
    { id: 39, name: 'Congo' },
    { id: 40, name: 'Costa Rica' },
    { id: 41, name: 'Croatia' },
    { id: 42, name: 'Cuba' },
    { id: 43, name: 'Cyprus' },
    { id: 44, name: 'Czech Republic' },
    { id: 45, name: 'Denmark' },
    { id: 46, name: 'Djibouti' },
    { id: 47, name: 'Dominica' },
    { id: 48, name: 'Dominican Republic' },
    { id: 49, name: 'East Timor' },
    { id: 50, name: 'Ecuador' },
    { id: 51, name: 'Egypt' },
    { id: 52, name: 'El Salvador' },
    { id: 53, name: 'Equatorial Guinea' },
    { id: 54, name: 'Eritrea' },
    { id: 55, name: 'Estonia' },
    { id: 56, name: 'Ethiopia' },
    { id: 57, name: 'Fiji' },
    { id: 58, name: 'Finland' },
    { id: 59, name: 'France' },
    { id: 60, name: 'Gabon' },
    { id: 61, name: 'Gambia' },
    { id: 62, name: 'Georgia' },
    { id: 63, name: 'Germany' },
    { id: 64, name: 'Ghana' },
    { id: 65, name: 'Greece' },
    { id: 66, name: 'Grenada' },
    { id: 67, name: 'Guatemala' },
    { id: 68, name: 'Guinea' },
    { id: 69, name: 'Guinea-Bissau' },
    { id: 70, name: 'Guyana' },
    { id: 71, name: 'Haiti' },
    { id: 72, name: 'Honduras' },
    { id: 73, name: 'Hungary' },
    { id: 74, name: 'Iceland' },
    { id: 75, name: 'India' },
    { id: 76, name: 'Indonesia' },
    { id: 77, name: 'Iran' },
    { id: 78, name: 'Iraq' },
    { id: 79, name: 'Ireland' },
    { id: 80, name: 'Israel' },
    { id: 81, name: 'Italy' },
    { id: 82, name: 'Jamaica' },
    { id: 83, name: 'Japan' },
    { id: 84, name: 'Jordan' },
    { id: 85, name: 'Kazakhstan' },
    { id: 86, name: 'Kenya' },
    { id: 87, name: 'Kiribati' },
    { id: 88, name: 'Korea, North' },
    { id: 89, name: 'Korea, South' },
    { id: 90, name: 'Kuwait' },
    { id: 91, name: 'Kyrgyzstan' },
    { id: 92, name: 'Laos' },
    { id: 93, name: 'Latvia' },
    { id: 94, name: 'Lebanon' },
    { id: 95, name: 'Lesotho' },
    { id: 96, name: 'Liberia' },
    { id: 97, name: 'Libya' },
    { id: 98, name: 'Liechtenstein' },
    { id: 99, name: 'Lithuania' },
    { id: 100, name: 'Luxembourg' },
    // Agrega más países aquí...

  ];

  useEffect(() => {
    console.log('idUser:', idUser);
  }, [idUser]);

  const handleEntrar = () => {
    createUserWithEmailAndPassword(auth, correo, contrasena)
      .then(() => {
        handleRegistro();
        Alert.alert('Éxito', 'Usuario agregado exitosamente');
        navigation.navigate('Login', { idUser });
      })
      .catch(error => {
        Alert.alert('Error', 'Error al crear el usuario (pruebe otra contraseña)');
      });
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin:": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
      'Content-Type': "application/json",
    }
  }

  const handleId = (id) => {
    setIdUser(id);
  }

  const handleRegistro = async () => {
    const usuario = {
      "nombre": nombre,
      "apellido": apellido,
      "correo": correo,
      "contrasena": contrasena,
      "pais": selectedCountry,
    };
    //llenar firebase
    const response = await axios.post('http://192.168.193.70:3000/apiusuarios', usuario, config)
    try {
      //console.log('Usuario registrado:', response.data);
      //handleId(response.data.id)
      const { value, objectId } = response.data;
      // Realizar cualquier acción adicional después de registrar el usuario
      const id = response.data.id;
      console.log('id: ', id);
      handleId(id);
    } catch (error) {
      console.log('Error al registrar el usuario:', error);
      // Manejar el error de registro
    };
  };

  const handleVolver = () => {
    navigation.goBack(); // Regresar a la pantalla anterior
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      <Text style={styles.title}>
        Pantalla de Registro
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>País:</Text>
        <Picker
          selectedValue={selectedCountry}
          onValueChange={(itemValue) => setSelectedCountry(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Seleccionar país" value="" />
          {countries.map((country) => (
            <Picker.Item key={country.id} label={country.name} value={country.name} />
          ))}
        </Picker>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de teléfono:</Text>
        <TextInput style={styles.input} placeholder="Ingrese su número de teléfono"
          keyboardType="numeric" />

      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} placeholder="Ingrese su nombre" value={nombre} onChangeText={setNombre} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Apellido:</Text>
        <TextInput style={styles.input} placeholder="Ingrese su apellido" value={apellido} onChangeText={setApellido} />
      </View>


      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su correo electrónico"
          value={correo}
          onChangeText={setCorreo}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          secureTextEntry={true}
          value={contrasena}
          onChangeText={setContrasena}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleEntrar}>
        <Image source={require('./assets/boton_registrarse.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 50, // Ajusta el margen superior para dar espacio a la imagen
    paddingHorizontal: 20, // Ajusta el margen horizontal
  },
  image: {
    width: 300,
    height: 150,
    resizeMode: 'contain',

    borderColor: '#000000',
    borderWidth: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 1,
    marginBottom: 1,
    color: '#000080',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 8,
    padding: 12,
  },
  button: {
    marginTop: 20,
  },
  buttonImage: {
    width: 300,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 8,
    marginBottom: 5,
  },
});

export default Registrar;
