import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Linking, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseConfig from './config';
import axios from 'axios';


// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const auth = getAuth();
  const [idUser, setIdUser] = useState('');

  /*useEffect(() => {
    console.log('idUser:', idUser);
  }, [idUser]);

  const handleId = (id) => {
    setIdUser(id);
  }*/

  const handleEntrar = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        //getID();
        navigation.navigate('MainScreen');
      })
      .catch(error => {
        Alert.alert('Error', 'Usuario o contraseña incorrectos');
      });
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin:": "*",
      "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
      'Content-Type': "application/json",
    }
  }

  /*const getID = async () => {
    //llenar firebase
    const response = await axios.get(`http://192.168.193.70:3000/documents/${username}`, config)
    try {
      const id = response.data;
      handleId(id);
      console.log('Id del usuario: ', id);
    } catch (error) {
      console.log('Error obteniendo id', error);
      // Manejar el error de registro
    };
  };*/

  const handleRecuperarContraseña = () => {
    navigation.navigate('Recuperacion');
  };

  const handleContinuarCon = async (proveedor) => {
    // ... lógica para continuar con proveedores
  };

  const handleRegistrar = () => {
    // ... lógica para registrar una nueva cuenta
    navigation.navigate('Registrar');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/login_boton.png')} style={styles.loginButtonImage} />

      <Text style={styles.ingresaCuentaText}>Ingresa tu cuenta</Text>
      <View style={styles.line} />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          autoCapitalize="none"
          keyboardType="email-address"
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.passwordToggle} onPress={togglePasswordVisibility}>
            <Image
              source={showPassword ? require('./assets/eye_closed.png') : require('./assets/eye_closed.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.forgotPassword} onPress={handleRecuperarContraseña}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.largerButton]} onPress={handleEntrar}>
        <Image source={require('./assets/boton_ingresar.png')} style={styles.buttonImage} />
      </TouchableOpacity>
      <View style={styles.divider} />
      <View style={styles.continuarConContainer}>
        <Text style={styles.continuarConText}>Continuar con</Text>

        <View style={styles.proveedoresContainer}>
          <TouchableOpacity
            style={[styles.proveedorButton, styles.circularButton]}
            onPress={() => handleContinuarCon('Google')}
          >
            <Image source={require('./assets/boton_google.png')} style={styles.proveedorImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.proveedorButton, styles.circularButton]}
            onPress={() => handleContinuarCon('Facebook')}
          >
            <Image source={require('./assets/boton_facebook.png')} style={styles.proveedorImage} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.proveedorButton, styles.circularButton]}
            onPress={() => handleContinuarCon('iCloud')}
          >
            <Image source={require('./assets/boton_icloud.png')} style={styles.proveedorImage} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={[styles.button, styles.largerButton, styles.registrarButton]} onPress={handleRegistrar}>
        <Image source={require('./assets/boton_registrar.png')} style={styles.buttonImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loginButtonImage: {
    width: '100%',
    height: '10%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  ingresaCuentaText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#000000',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ADD8E6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordToggle: {
    position: 'absolute',
    top: 15,
    right: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  forgotPassword: {
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#0000FF',
    textAlign: 'center',
  },
  button: {
    marginBottom: 20,
  },
  largerButton: {
    width: 250,
    height: 60,
  },
  buttonImage: {
    width: '150%',
    height: '150%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  continuarConContainer: {
    width: '80%',
    marginBottom: 20,
  },
  continuarConText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  proveedoresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  proveedorButton: {
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 25,
    padding: 12,
    alignItems: 'center',
  },
  circularButton: {
    width: 50,
    height: 100,
  },
  proveedorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  registrarButton: {
    marginTop: 0,
    marginBottom: 50,
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: '#000000',
    marginBottom: 20,
  },
});

export default Login;
