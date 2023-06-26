import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, StyleSheet, Modal, Slider } from 'react-native';

const Reserva = () => {
  const [nombreLugar, setNombreLugar] = useState('');
  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmarReserva, setConfirmarReserva] = useState(false); // Nuevo estado para confirmar la reserva
  const lugares = ['Lugar 1', 'Lugar 2', 'Lugar 3'];

  const handleContinuar = () => {
    setConfirmarReserva(true); // Mostrar el modal de confirmación al presionar Continuar
  };

  const handleLugarSeleccionado = (lugar) => {
    setNombreLugar(lugar);
    setModalVisible(false);
  };

  const handleConfirmarReserva = () => {
    console.log('Reserva realizada:', {
      nombreLugar,
      cantidadPersonas,
    });
    setConfirmarReserva(false); // Cerrar el modal de confirmación después de confirmar la reserva
  };

  const handleCancelarReserva = () => {
    setConfirmarReserva(false); // Cerrar el modal de confirmación si se cancela la reserva
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Reservar.png')} style={styles.image} />
      <TouchableOpacity style={styles.comboboxContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.comboboxText}>{nombreLugar || 'Seleccione un lugar'}</Text>
      </TouchableOpacity>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={12}
        step={1}
        value={cantidadPersonas}
        onValueChange={(value) => setCantidadPersonas(value)}
      />
      <Text>Cantidad de personas: {cantidadPersonas}</Text>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {lugares.map((lugar) => (
            <TouchableOpacity
              key={lugar}
              style={styles.modalOption}
              onPress={() => handleLugarSeleccionado(lugar)}
            >
              <Text style={styles.modalOptionText}>{lugar}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <Modal
        visible={confirmarReserva}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setConfirmarReserva(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.confirmationContainer}>
            <Text style={styles.confirmationText}>¿Estás seguro que quieres reservar en el lugar seleccionado con la cantidad de personas seleccionadas?</Text>
            <View style={styles.confirmationButtonsContainer}>
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarReserva}>
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelarReserva}>
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleContinuar}>
        <Image source={require('./assets/Continuar2.png')} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 75,
    marginBottom: 20,
    top: -190,
  },
  comboboxContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
    width: 200,
    alignItems: 'center',
    backgroundColor: 'white',
    top: -100,
  },
  comboboxText: {
    fontSize: 16,
    color: 'black',
  },
  slider: {
    width: 200,
    marginTop: 10,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalOption: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 4,
  },
  modalOptionText: {
    fontSize: 16,
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  buttonIcon: {
    width: 230,
    height: 60,
    marginRight: 5,
    top: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  confirmationContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 4,
  },
  confirmationText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  confirmationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    marginRight: 10,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 16,
  },
  cancelButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Reserva;
