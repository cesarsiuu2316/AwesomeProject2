import React, { useState } from 'react';
import { Text, View, Button, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ba from './assets/BotonAtras.png';
import ft from './assets/FiltrarTitulo.png';
import bb from './assets/BotonBuscar.png';
import { Dropdown } from 'react-native-element-dropdown';
import Slider from '@react-native-community/slider';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import sInfoLugar from './InfoLugar'; // Importa el componente sInfoLugar

const Tab = createMaterialTopTabNavigator();

const data = [
  { label: 'Atlantida', value: '1' },
  { label: 'Choluteca', value: '2' },
  { label: 'Colón', value: '3' },
  { label: 'Comayagua', value: '4' },
  { label: 'Copán', value: '5' },
  { label: 'Cortés', value: '6' },
  { label: 'El Paraíso', value: '7' },
  { label: 'Francisco Morazán', value: '8' },
  { label: 'Gracias a Dios', value: '9' },
  { label: 'Intibucá', value: '10' },
  { label: 'Islas de la Bahía', value: '11' },
  { label: 'La Paz', value: '12' },
  { label: 'Lempira', value: '13' },
  { label: 'Ocotepeque', value: '14' },
  { label: 'Olancho', value: '15' },
  { label: 'Santa Bárbara', value: '16' },
  { label: 'Valle', value: '17' },
  { label: 'Yoro', value: '18' },
];

const Filtrar = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value2, setValue2] = useState(1);
  const [value3, setValue3] = useState(1);
  const [value4, setValue4] = useState(1);
  const [value5, setValue5] = useState(1);
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Seleccione un Departamento</Text>
      <Text style={styles.text}></Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Tiempo Disponible</Text>
      <Text style={styles.text}>{value2 && +value2.toFixed(3)} horas</Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={1}
        maximumValue={168}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setValue2}
      />
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Costo por Dia</Text>
      <Text style={styles.text}>{value3 && +value3.toFixed(3)} Dolares</Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={1}
        maximumValue={300}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setValue3}
      />
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Num. de Habitaciones</Text>
      <Text style={styles.text}>{value4 && +value4.toFixed(3)}</Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={1}
        maximumValue={10}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setValue4}
      />
      <Text style={styles.text}></Text>
      <Text style={styles.text}>Num. de Huéspedes</Text>
      <Text style={styles.text}>{value5 && +value5.toFixed(3)}</Text>
      <Slider
        style={styles.slider}
        step={1}
        minimumValue={1}
        maximumValue={50}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        onValueChange={setValue5}
      />
      <Text style={styles.text}></Text>
      <View style={styles.view2}>
        <ImageBackground style={{ width: 232, height: 60 }} source={bb} resizeMode="stretch">
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 200,
    height: 40,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  view2: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    justifyContent: 'center',
  },
  view: {
    flexDirection: 'row',
    height: 100,
    padding: 10,
    justifyContent: 'space-between',
  },
  line: {
    width: '80%',
    height: 2,
    backgroundColor: '#000000',
    marginBottom: 20,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 4,
    height: 74,
    width: 66,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  dropdown: {
    height: 50,
    width: '40%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Filtrar;
