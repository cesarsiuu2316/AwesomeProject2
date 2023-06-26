import React, { useState } from 'react';
import { View, TouchableOpacity, Image, TextInput, Button, Alert, Text } from 'react-native';

const Recuperacion = () => {
  const handleBackPress = () => {
    // Lógica para manejar el evento de regreso
  };

  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleAdditionalInfoChange = (text) => {
    setAdditionalInfo(text);
  };

  const handleSubmit = () => {
    if (email) {
      Alert.alert('Correo ingresado', `El correo ingresado es: ${email}`);
    } else {
      Alert.alert('Error', 'Por favor, ingresa un correo');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={handleBackPress} style={{ position: 'absolute', top: 20, left: 20 }}>
       
      </TouchableOpacity>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image source={require('./assets/recuperacion_title.png')} style={{ width: 200, height: 70, top: -100, resizeMode: 'contain' }} />
      </View>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>Ingrese el correo asociado a su cuenta para recuperar su contraseña:</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={handleEmailChange}
        style={{ width: 370, height: 40, borderColor: 'blue', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
      />
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>Proporcione información adicional para ayudar a recuperar su contraseña:</Text>
      <TextInput
        placeholder="Información adicional"
        value={additionalInfo}
        onChangeText={handleAdditionalInfoChange}
        style={{ width: 370, height: 80, borderColor: 'blue', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        multiline
      />
      <TouchableOpacity onPress={handleSubmit} style={{ marginTop: 10 }}>
        <Image source={require('./assets/send_button.png')} style={{ width: 250, height: 70, bottom: -50,resizeMode: 'contain' }} />
      </TouchableOpacity>
      {/* Resto del contenido de tu pantalla */}
    </View>
  );
};

export default Recuperacion;





