import React, { useState, useEffect } from 'react';
import 'react-native-safe-area-context';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Carga = ({ navigation }) => {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setMostrarBoton(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleEmpezar = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image source={require('./assets/imagencarga2.png')} style={styles.imagen} />
      </View>

      {mostrarBoton && (
        <View style={styles.botonContainer}>
          <TouchableOpacity style={styles.boton} onPress={handleEmpezar}>
            <Image source={require('./assets/boton_emp.png')} style={styles.botonImagen} />
          </TouchableOpacity>
        </View>
      )}
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
  imagenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  imagen: {
    width: 550,
    height: 550,
    resizeMode: 'contain',
  },
  botonContainer: {
    marginBottom: 5,
    marginTop: 5,
  },
  boton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonImagen: {
    width: 300, // Ajustar el ancho de la imagen
    height: 100, // Ajustar el alto de la imagen
    resizeMode: 'contain',
  },
});

export default Carga;
