import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carga from './Carga';
import Login from './Login';
import Registrar from './Registrar';
import MainScreen from './MainScreen';
import Recuperacion from './Recuperacion'; // Importa el componente Recuperacion
import Perfil from './Perfil'; // Importa el componente Perfil
import InfoLugar from './InfoLugar'; // Importa el componente sInfoLugar  FiltrarTitulo
import FiltrarTitulo from './FiltrarTitulo'; //ReservasScreen  Reserva
import ReservasScreen from './ReservasScreen';
import Reserva from './Reserva';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Carga">
        <Stack.Screen
          name="Carga"
          component={Carga}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: true,
            title: 'Iniciar sesión',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Recuperacion" // Agrega la ruta para el componente Recuperacion
          component={Recuperacion}
          options={{
            headerShown: true,
            title: 'Recuperar contraseña', // Cambia el título de la pantalla
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Registrar"
          component={Registrar}
          options={{
            headerShown: true,
            title: 'Registrar cuenta',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerShown: true,
            title: 'Perfil',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="InfoLugar" // Agrega la ruta para el componente sInfoLugar
          component={InfoLugar}
          options={{
            headerShown: true,
            title: 'Información del lugar', // Cambia el título de la pantalla
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="FiltrarTitulo" // Agrega la ruta para el componente sInfoLugar
          component={FiltrarTitulo}
          options={{
            headerShown: true,
            title: 'FiltrarTitulo', // Cambia el título de la pantalla
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="ReservasScreen" // Agrega la ruta para el componente sInfoLugar
          component={ReservasScreen}
          options={{
            headerShown: true,
            title: 'Mis Reservas ', // Cambia el título de la pantalla
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Reserva" // Agrega la ruta para el componente sInfoLugar
          component={Reserva}
          options={{
            headerShown: true,
            title: 'Reserva', // Cambia el título de la pantalla
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
