import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Alert, ScrollView } from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth,signOut  } from 'firebase/auth';



const Perfil = () => {
  const [editingPersonal, setEditingPersonal] = useState(false);
  const [editingPayment, setEditingPayment] = useState(false);
  const [editingPromotions, setEditingPromotions] = useState(false);
  const navigation = useNavigation();
  const auth = getAuth();
  const [profile, setProfile] = useState({
    nombreCompleto: 'Nombre Completo',
    correoElectronico: 'galexanderg03@gmail.com',
    cumpleanos: 'cumpleaños',
    numeroTelefono: 'Num. de telefono',
    residencia: 'Residencia',
  });
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert(
          'Cerrar sesión',
          '¿Estás seguro de que deseas cerrar sesión?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Aceptar',
              onPress: () => navigation.navigate('Carga'),
            },
          ],
          { cancelable: true }
        );
      })
      .catch(error => {
        Alert.alert('Error', 'Error al cerrar sesion');
      });
  };
  
  const [payment, setPayment] = useState({
    tipoTarjeta: 'Visa',
    numeroCuenta: '1234 5678 9012 3456',
    fechaExpiracion: '12/24',
    cvv: '123',
  });

  const profileImage = require('./assets/profile_image.png');
  const editButtonImage = require('./assets/edit_button.png');
  const LogoutButtonImage = require('./assets/logout_button.png');

  const handleEditProfile = () => {
    setEditingPersonal(true);
  };

  const handleEditPayment = () => {
    setEditingPayment(true);
  };

  const handleEditPromotions = () => {
    setEditingPromotions(true);
  };

  const handleSaveProfile = () => {
    setEditingPersonal(false);
    // Aquí puedes realizar acciones adicionales, como enviar los datos editados a la API, guardar en el almacenamiento, etc.
    Alert.alert('Cambios guardados', 'Los cambios en el perfil han sido guardados exitosamente.');
  };

  const handleSavePayment = () => {
    setEditingPayment(false);
    // Aquí puedes realizar acciones adicionales, como enviar los datos editados a la API, guardar en el almacenamiento, etc.
    Alert.alert('Cambios guardados', 'Los cambios en la forma de pago han sido guardados exitosamente.');
  };


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Información Personal</Text>
          {editingPersonal ? (
            <TouchableOpacity style={styles.editButton} onPress={handleSaveProfile}>
              <Text style={styles.editButtonText}>Guardar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
              <Image source={editButtonImage} style={styles.editButtonImage} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.profileContainer}>
          <Image source={profileImage} style={styles.profileImage} />
          <View style={styles.profileInfo}>
            <View style={styles.row}>
              {editingPersonal ? (
                <TextInput
                  style={styles.textInput}
                  value={profile.nombreCompleto}
                  onChangeText={(text) => setProfile({ ...profile, nombreCompleto: text })}
                />
              ) : (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.infoText}>
                  {profile.nombreCompleto}
                </Text>
              )}
            </View>
            <View style={styles.row}>
              {editingPersonal ? (
                <TextInput
                  style={styles.textInput}
                  value={profile.correoElectronico}
                  onChangeText={(text) => setProfile({ ...profile, correoElectronico: text })}
                />
              ) : (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.infoText}>
                  {profile.correoElectronico}
                </Text>
              )}
            </View>
            <View style={styles.row}>
              {editingPersonal ? (
                <TextInput
                  style={styles.textInput}
                  value={profile.cumpleanos}
                  onChangeText={(text) => setProfile({ ...profile, cumpleanos: text })}
                />
              ) : (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.infoText}>
                  {profile.cumpleanos}
                </Text>
              )}
            </View>
            <View style={styles.row}>
              {editingPersonal ? (
                <TextInput
                  style={styles.textInput}
                  value={profile.numeroTelefono}
                  onChangeText={(text) => setProfile({ ...profile, numeroTelefono: text })}
                />
              ) : (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.infoText}>
                  {profile.numeroTelefono}
                </Text>
              )}
            </View>
            <View style={styles.row}>
              {editingPersonal ? (
                <TextInput
                  style={styles.textInput}
                  value={profile.residencia}
                  onChangeText={(text) => setProfile({ ...profile, residencia: text })}
                />
              ) : (
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.infoText}>
                  {profile.residencia}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Forma de Pago</Text>
          {editingPayment ? (
            <TouchableOpacity style={styles.editButton} onPress={handleSavePayment}>
              <Text style={styles.editButtonText}>Guardar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={handleEditPayment}>
              <Image source={editButtonImage} style={styles.editButtonImage} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.paymentContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Tipo de Tarjeta:</Text>
            {editingPayment ? (
              <TextInput
                style={styles.textInput}
                value={payment.tipoTarjeta}
                onChangeText={(text) => setPayment({ ...payment, tipoTarjeta: text })}
              />
            ) : (
              <Text style={styles.infoText}>{payment.tipoTarjeta}</Text>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Número de Cuenta:</Text>
            {editingPayment ? (
              <TextInput
                style={styles.textInput}
                value={payment.numeroCuenta}
                onChangeText={(text) => setPayment({ ...payment, numeroCuenta: text })}
              />
            ) : (
              <Text style={styles.infoText}>{payment.numeroCuenta}</Text>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fecha de Expiración:</Text>
            {editingPayment ? (
              <TextInput
                style={styles.textInput}
                value={payment.fechaExpiracion}
                onChangeText={(text) => setPayment({ ...payment, fechaExpiracion: text })}
              />
            ) : (
              <Text style={styles.infoText}>{payment.fechaExpiracion}</Text>
            )}
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>CVV:</Text>
            {editingPayment ? (
              <TextInput
                style={styles.textInput}
                value={payment.cvv}
                onChangeText={(text) => setPayment({ ...payment, cvv: text })}
              />
            ) : (
              <Text style={styles.infoText}>{payment.cvv}</Text>
            )}
          </View>
        </View>
      </View>
  <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.sectionTitle}>Promociones</Text>
      </View>
      <View style={styles.promotionsContainer}>
        <View style={styles.promotionsButtonContainer}>
          <TouchableOpacity
            style={[styles.promotionsButton, editingPromotions ? styles.promotionsButtonSelected : null]}
            onPress={() => setEditingPromotions(true)}>
            <Text style={styles.promotionsButtonText}>-50% para los residentes de San Pedro Sula</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.promotionsButton, !editingPromotions ? styles.promotionsButtonSelected : null]}
            onPress={() => setEditingPromotions(false)}>
            <Text style={styles.promotionsButtonText}>-10% para los primeros 20 dias</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Image source={LogoutButtonImage} style={styles.logoutButtonImage} />
        </TouchableOpacity>

</View>
</ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingTop: 10, // Ajusta el valor del margen superior según tus necesidades
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  editButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  editButtonImage: {
    width: 44,
    height: 44,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    marginRight: 10,
  },
  textInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  infoText: {
    flex: 2,
  },
  promotionsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    minHeight: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promotionsTextInput: {
    flex: 1,
    textAlignVertical: 'top',
  },
  promotionsText: {
    fontStyle: 'italic',
    color: '#777',
  },
  promotionsButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 150, // Ajusta el ancho mínimo del botón según tus necesidades
    marginHorizontal: 5, // Añade un margen horizontal para separar los botones
  },  
  promotionsButtonSelected: {
    backgroundColor: '#00BFFF',
    borderWidth: 2,
    borderColor: '#FFF',
  },
  
  promotionsButtonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  promotionsButtonContainer: {
    flexDirection: 'row',
  },
  logoutButton: {
    width: 160,
    height: 50,
    right: -115,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    bottom: 20,
  },
  logoutButtonImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'contain',
},

  
  
  
});

export default Perfil;






