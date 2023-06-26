import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const ReservasScreen = () => {
  const [reservas, setReservas] = useState([
    {
      id: 1,
      name: 'Lugar Reservado 1',
      date: '2023-07-12',
      
    },
    {
      id: 2,
      name: 'Lugar Reservado 2',
      date: '2023-07-15',
     
    },
    {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
      {
        id: 2,
        name: 'Lugar Reservado 2',
        date: '2023-07-15',
       
      },
    
  ]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {reservas.map((reserva) => (
          <View key={reserva.id} style={styles.card}>
            <Text style={styles.cardName}>{reserva.name}</Text>
            <Text style={styles.cardDate}>{reserva.date}</Text>
            {/* Mostrar otros detalles de la reserva aquí */}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 10,
    padding: 10,
    borderColor: '#ADD8E6', // Color del borde
    borderWidth: 2, // Ancho del borde
  },
  cardName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardDate: {
    fontSize: 14,
    color: '#888888',
  },
});

export default ReservasScreen;
